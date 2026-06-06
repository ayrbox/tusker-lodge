import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_dkmDDFL_.mjs';
import { g as getCollection } from './_astro_content_B4yQqLOU.mjs';

const $$Attractions = createComponent(async ($$result, $$props, $$slots) => {
  const allAttractions = await getCollection("attractions");
  const categories = [...new Set(allAttractions.map((a) => a.data.category))];
  const groupedAttractions = categories.map((category) => ({
    name: category,
    attractions: allAttractions.filter((a) => a.data.category === category)
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Attractions | Tusker Lodge" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 py-12"> <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Local Attractions</h1> <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-8"> ${groupedAttractions.map((category) => renderTemplate`<div${addAttribute(category.name, "key")}> <h2 class="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">${category.name}</h2> <ul role="list" class="space-y-4"> ${category.attractions.map((attraction) => renderTemplate`<li class="group"${addAttribute(attraction.data.name, "key")}> <a${addAttribute(attraction.data.link, "href")} target="_blank" class="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"> ${attraction.data.name} </a> ${attraction.data.description && renderTemplate`<div class="text-sm text-gray-600 mt-1">${attraction.data.description}</div>`} </li>`)} </ul> </div>`)} </div> </div> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/pages/attractions.astro", void 0);

const $$file = "/home/ayrbox/beans.projects/tusker-lodge/src/pages/attractions.astro";
const $$url = "/attractions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Attractions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
