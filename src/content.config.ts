import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const rooms = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/rooms" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    heroImage: image(),
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
    })),
    capacity: z.object({
      min: z.number(),
      max: z.number(),
    }),
    beds: z.array(z.object({
      type: z.string(),
      quantity: z.number(),
    })),
    amenities: z.array(z.string()),
    rating: z.object({
      value: z.number(),
      count: z.number(),
      label: z.string(),
    }).optional(),
  }),
});

const policies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/policies" }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string(),
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

export const collections = {
  'rooms': rooms,
  'policies': policies,
  'attractions': attractions,
};
