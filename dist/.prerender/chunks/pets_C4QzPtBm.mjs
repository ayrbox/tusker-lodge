import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dkmDDFL_.mjs';

const $$Pets = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pets | Tusker Lodge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-bold mb-2">
We welcome well behaved dogs at Tusker Lodge.
</h1> <p class="text-sm mb-8 text-gray-500">
One small/medium sized dog is allowed per room (size guide: max 20kgs).
</p> <div class="prose prose-slate max-w-none text-gray-700"> <p>
Please be advised that we have two dogs and therefore guest’s dogs must
        be kept on a lead at all times in common areas of the Guest House. Dogs
        are not allowed on beds or other furniture, should not be left
        unattended in rooms under any circumstances.
</p> <p class="mt-10">
We generally charge a one off fee per stay (fee dependant on the length
        of stay but starts at £10 for 1-5 nights) to cover cleaning costs, this
        may increase if the room requires more time. We also ask that you
        dispose of your pets waste (yes, you’d be surprised!) off the premises
        in dog litter bins which are across the road in the park.
</p> <p class="mt-10">We do not accept any pets other than dogs.</p> <p class="mt-10">
For a list of dog friendly beaches in the area please
<a href="https://www.torbay.gov.uk/asb-environment-and-nuisance/dogs/dogs-on-the-beach/" class="text-indigo-600 hover:underline">
click here
</a> </p> <p class="mt-10">
Most bars and pubs around the harbour are dog friendly, however the
        following site is quite useful...
<a href="http://www.doggiepubs.org.uk/" target="_blank" class="text-indigo-600 hover:underline">
www.doggiepubs.org.uk
</a> </p> <p class="mt-10">
For our four legged furry friends who have enjoyed your breakfast liver
        cake treat, here is the recipe (make sure they make you some) 😊
</p> </div> </div> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/pages/pets.astro", void 0);

const $$file = "/home/ayrbox/beans.projects/tusker-lodge/src/pages/pets.astro";
const $$url = "/pets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
