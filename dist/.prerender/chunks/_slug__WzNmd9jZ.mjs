import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dkmDDFL_.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_B4yQqLOU.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { BedDouble, PawPrint, Wifi, Tv, CircleParking } from 'lucide-react';

function RoomWrapper(props) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight", children: props.title }) }),
    props.children
  ] });
}
function Sidebar(props) {
  return /* @__PURE__ */ jsx("div", { className: "mt-4 lg:row-span-3 lg:mt-0", children: props.children });
}
function Content(props) {
  return /* @__PURE__ */ jsx("div", { className: "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16", children: props.children });
}

function Facilities(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl tracking-tight text-gray-900", children: "Facilities" }),
    /* @__PURE__ */ jsxs("div", { className: "my-6 text-blue-600", children: [
      /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Ameneties" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(BedDouble, {}),
        /* @__PURE__ */ jsx(PawPrint, {}),
        /* @__PURE__ */ jsx(Wifi, {}),
        /* @__PURE__ */ jsx(Tv, {}),
        /* @__PURE__ */ jsx(CircleParking, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "ul",
      {
        role: "list",
        className: "list-disc space-y-2 pl-4 text-sm text-gray-600",
        children: props.facilities?.map(({ key, text }) => /* @__PURE__ */ jsx("li", { children: text }, key))
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        type: "submit",
        className: "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",
        href: "./booking",
        children: "Check Avaibility"
      }
    )
  ] });
}

async function getStaticPaths() {
  const roomEntries = await getCollection("rooms");
  return roomEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content: Content$1 } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center"> ${renderComponent($$result2, "Wrapper", RoomWrapper, { "title": entry.data.title }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sidebar", Sidebar, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Facilities", Facilities, {})} ` })} ${renderComponent($$result3, "RoomContent", Content, {}, { "default": async ($$result4) => renderTemplate` <div class="space-y-8"> ${renderComponent($$result4, "Content", Content$1, {})} </div> ` })} ` })} </div> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/pages/rooms/[slug].astro", void 0);

const $$file = "/home/ayrbox/beans.projects/tusker-lodge/src/pages/rooms/[slug].astro";
const $$url = "/rooms/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
