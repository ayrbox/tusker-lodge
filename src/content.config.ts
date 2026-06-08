import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const attractions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/attractions" }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    description: z.string().optional(),
    link: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: file("src/data/testimonials.json"),
  schema: z.object({
    title: z.string(),
    text: z.string(),
    name: z.string(),
    source: z.string(), // may be enum
  }),
});

export const collections = {
  attractions,
  testimonials,
};
