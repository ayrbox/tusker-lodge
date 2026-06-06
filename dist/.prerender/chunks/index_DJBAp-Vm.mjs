import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dkmDDFL_.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Available Rooms | Tusker Lodge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-bold mb-8 text-center">About Tusker Lodge</h1> <div class="prose prose-slate max-w-none text-gray-700"> <p>
Tusker Lodge is a pet-friendly bed and breakfast (B&B) located in the beautiful coastal town of Torquay, Devon.
        Our Victorian property offers comfortable accommodation with modern amenities, perfect for couples, individuals, and families traveling with pets.
</p> </div> </div> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/pages/rooms/index.astro", void 0);

const $$file = "/home/ayrbox/beans.projects/tusker-lodge/src/pages/rooms/index.astro";
const $$url = "/rooms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
