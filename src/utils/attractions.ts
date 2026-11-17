import { getCollection, type CollectionEntry } from "astro:content";

export const ATTRACTIONS_PER_PAGE = 9;

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getSortedAttractions(): Promise<
  CollectionEntry<"attractions">[]
> {
  const attractions = await getCollection("attractions");
  return attractions.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export interface CategoryInfo {
  name: string;
  slug: string;
  href: string;
}

export function getCategoryLinks(
  attractions: CollectionEntry<"attractions">[],
): CategoryInfo[] {
  const uniqueCategories = [
    ...new Set(attractions.map((a) => a.data.category)),
  ];
  return [
    { name: "All", slug: "all", href: "/attractions" },
    ...uniqueCategories.map((name) => {
      const slug = slugifyCategory(name);
      return {
        name,
        slug,
        href: `/attractions/category/${slug}`,
      };
    }),
  ];
}
