import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const rooms = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rooms" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.object({ src: z.string(), alt: z.string() })),
    capacity: z.object({
      min: z.number(),
      max: z.number(),
    }),
    beds: z.array(
      z.object({
        type: z.string(),
        quantity: z.number(),
      }),
    ),
    amenities: z.array(z.string()),
    rating: z.object({
      value: z.number(),
      count: z.number(),
      label: z.string(),
    }),
    order: z.number().optional(),
  }),
});

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
  rooms,
  attractions,
  testimonials,
};
