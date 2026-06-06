import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dkmDDFL_.mjs';

const $$Parking = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Parking | Tusker Lodge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-bold mb-2">Parking at Tusker Lodge</h1> <p class="text-sm mb-8 text-gray-500">3 onsite parking available.</p> <div class="prose prose-slate max-w-none text-gray-700"> <p class="mt-10">
We have 3 onsite parking spaces which we reserve for guest's use
        when checking in and out.
</p> <p>
Paid parking is available at the Harbour Car Park which is located 100
        metres from the Guest House. The fees will be paid by the guest house;
</p> <p class="mt-10 text-yellow-600 italic">
* Information correct as at 19 May 2023, please check the display boards
        at the car park for any updates.
</p> </div> </div> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/pages/parking.astro", void 0);

const $$file = "/home/ayrbox/beans.projects/tusker-lodge/src/pages/parking.astro";
const $$url = "/parking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Parking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
