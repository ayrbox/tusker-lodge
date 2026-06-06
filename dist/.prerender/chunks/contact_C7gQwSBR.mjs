import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dkmDDFL_.mjs';
import { MapPin, Phone, Mail } from 'lucide-react';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Tusker Lodge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-bold mb-2">Contact Us</h1> <p class="text-sm mb-8 text-gray-500">
You can call us, email us or visit us directly.
</p> <div class="space-y-8"> <div class="flex gap-4"> ${renderComponent($$result2, "MapPin", MapPin, { "class": "text-indigo-600" })} <address class="not-italic text-gray-700">
Tusker Lodge<br>
533 Babbacombe Road<br>
Torquay,<br>
Devon<br>
TQ1 1HQ
</address> </div> <div class="flex gap-4"> ${renderComponent($$result2, "Phone", Phone, { "class": "text-indigo-600" })} <p class="text-gray-700">01803 292668</p> </div> <div class="flex gap-4"> ${renderComponent($$result2, "Mail", Mail, { "class": "text-indigo-600" })} <p> <a href="mailto:info@tuskerlodge.co.uk" class="text-indigo-600 hover:underline">
info@tuskerlodge.co.uk
</a> </p> </div> </div> </div> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/pages/contact.astro", void 0);

const $$file = "/home/ayrbox/beans.projects/tusker-lodge/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
