import { defineCollection, z } from 'astro:content';

const rooms = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string(),
  }),
});

const attractions = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    category: z.string(),
    description: z.string().optional(),
    link: z.string(),
    image: image().optional(),
  }),
});

export const collections = {
  'rooms': rooms,
  'policies': policies,
  'attractions': attractions,
};
