import { getCollection } from "astro:content";
import { siteOrigin } from "@/lib/site";

export async function GET() {
  const pages = await getCollection("pages");
  const posts = await getCollection("blog");
  const campaigns = await getCollection("campaigns");
  const urls = [
    ...pages.map((entry) => entry.data.route),
    ...posts.map((entry) => `/blog/${entry.slug}`),
    ...campaigns.map((entry) => `/campanhas/${entry.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `  <url><loc>${siteOrigin}${url === "/" ? "/" : `${url.replace(/\/$/, "")}/`}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
