import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoFocus: z.string(),
    route: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string().optional(),
    clinicalReviewRequired: z.boolean(),
    lastEditorialReview: z.string(),
    owner: z.literal("CMOEditorial"),
    pageType: z.enum(["home", "institutional", "services", "service", "listing", "contact"]),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Prevencao",
      "Atendimento 24h",
      "Sinais de alerta",
      "Servicos",
      "Servicos veterinarios",
      "Cuidado com gatos",
      "Cuidado com caes",
    ]),
    seoFocus: z.string(),
    audience: z.string(),
    clinicalReviewRequired: z.boolean(),
    cta: z.string(),
    lastEditorialReview: z.string(),
    owner: z.literal("CMOEditorial"),
  }),
});

const campaigns = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    objective: z.string(),
    audience: z.string(),
    channels: z.array(z.string()),
    primaryCTA: z.string(),
    clinicalReviewRequired: z.boolean(),
    status: z.enum(["draft", "reviewed", "approved", "published"]),
    service: z.string(),
  }),
});

export const collections = { pages, blog, campaigns };
