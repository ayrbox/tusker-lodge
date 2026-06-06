import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot } from './prerender_dkmDDFL_.mjs';

const $$Policies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Policies;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <h1 class="text-4xl font-bold text-gray-900 mb-2">${frontmatter.title}</h1> <p class="text-sm text-gray-500 italic mb-8">Last updated: ${frontmatter.lastUpdated}</p> <div class="prose prose-slate max-w-none text-gray-700"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/layouts/Policies.astro", void 0);

export { $$Policies as $ };
