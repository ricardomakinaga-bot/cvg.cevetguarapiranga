#!/usr/bin/env node
"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");

const cachePath = path.resolve(
  __dirname,
  "../landing/data/google-reviews-cache.json",
);
const approvedReviews = [
  {
    reviewer: "Carlos Herold",
    rating: 5,
    text: "Ótima clínica com excelentes profissionais super recomendo.",
  },
  {
    reviewer: "Jaqueline Botelho Da Ponte",
    rating: 5,
    text: "Profissionais sérios, competentes, atenciosos, cuidam da minha filha de quatro patas com muito carinho. Indico o atendimento deles.",
  },
];
const fallbackUrl = "https://maps.app.goo.gl/JL6qTAAV4v96Zewu5";
const publicProfileUrl = "https://maps.google.com/?cid=17542561690735068854";

function fallbackCache(reason) {
  return {
    state: "maps-cta-only",
    generatedAt: new Date().toISOString(),
    reason,
    source: {
      provider: "Google Places Details legacy",
      publicUrl: fallbackUrl,
      sourceDecision: "RMA-19 google-reviews-source-package revision 3",
    },
    aggregate: null,
    reviews: [],
  };
}

function approvedReviewFrom(apiReview) {
  return approvedReviews.find((approved) => {
    return (
      apiReview.author_name === approved.reviewer &&
      apiReview.rating === approved.rating &&
      apiReview.text === approved.text
    );
  });
}

async function fetchPlacesDetails() {
  const googleCredential = process.env.GOOGLE_PLACES_API_KEY;
  const placeIdentifier = process.env.GOOGLE_PLACE_ID;

  if (!googleCredential || !placeIdentifier) {
    return fallbackCache("missing-runtime-config");
  }

  const detailsUrl = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json",
  );
  detailsUrl.searchParams.set("place_id", placeIdentifier);
  detailsUrl.searchParams.set(
    "fields",
    "name,url,rating,user_ratings_total,reviews",
  );
  detailsUrl.searchParams.set("language", "pt-BR");
  detailsUrl.searchParams.set("key", googleCredential);

  const response = await fetch(detailsUrl, { method: "GET" });
  if (!response.ok) {
    return fallbackCache("places-http-error");
  }

  const payload = await response.json();
  if (payload.status !== "OK" || !payload.result) {
    return fallbackCache("places-status-not-ok");
  }

  const result = payload.result;
  const allowedReviews = Array.isArray(result.reviews)
    ? result.reviews
        .map((review) => {
          const approved = approvedReviewFrom(review);
          if (!approved) {
            return null;
          }

          return {
            reviewer: approved.reviewer,
            rating: approved.rating,
            reviewedAt: new Date(review.time * 1000).toISOString(),
            text: approved.text,
          };
        })
        .filter(Boolean)
    : [];

  if (allowedReviews.length !== approvedReviews.length) {
    return fallbackCache("approved-reviews-not-returned");
  }

  return {
    state: "loaded-with-cards",
    generatedAt: new Date().toISOString(),
    source: {
      provider: "Google Places Details legacy",
      profileName: result.name || "Centro Veterinário Guarapiranga 24hs",
      publicUrl: result.url || publicProfileUrl,
      sourceDecision: "RMA-19 google-reviews-source-package revision 3",
    },
    aggregate: {
      rating: result.rating,
      totalReviews: result.user_ratings_total,
      updatedAt: new Date().toISOString(),
    },
    reviews: allowedReviews,
  };
}

async function readExistingCache() {
  try {
    const existing = await fs.readFile(cachePath, "utf8");
    return JSON.parse(existing);
  } catch {
    return null;
  }
}

async function writeCache(cache) {
  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  await fs.writeFile(`${cachePath}.tmp`, `${JSON.stringify(cache, null, 2)}\n`);
  await fs.rename(`${cachePath}.tmp`, cachePath);
}

async function main() {
  const cache = await fetchPlacesDetails();
  const existing = await readExistingCache();

  if (
    cache.state === "maps-cta-only" &&
    cache.reason === "approved-reviews-not-returned" &&
    existing?.state === "loaded-with-cards"
  ) {
    console.log(
      `Google reviews cache sync preserved existing approved cache: state=${existing.state} reviews=${existing.reviews.length}`,
    );
    return;
  }

  await writeCache(cache);

  console.log(
    `Google reviews cache sync finished: state=${cache.state} reviews=${cache.reviews.length}`,
  );
}

main().catch(async () => {
  const existing = await readExistingCache();
  if (existing?.state === "loaded-with-cards") {
    console.log(
      `Google reviews cache sync preserved existing approved cache: state=${existing.state} reviews=${existing.reviews.length}`,
    );
    return;
  }

  const cache = fallbackCache("sync-error");
  await writeCache(cache);
  console.log("Google reviews cache sync finished: state=maps-cta-only reviews=0");
});
