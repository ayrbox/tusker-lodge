import { A as AstroError, I as InvalidComponentArgs, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate, r as renderComponent, h as renderHead } from './prerender_dkmDDFL_.mjs';
import 'piccolore';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CTA;
  const { href, variant = "default" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="
  border rounded-full border border-transparent px-8 py-3 text-base font-medium text-white focus:ring-2
  focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden shadow bg-[#ffa400] hover:bg-[#009ffd]"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/components/CTA.astro", void 0);

const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavItem;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} className="hover:text-blue-500"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/components/NavItem.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navigations = [
    {
      name: "home",
      text: "Home",
      url: "/"
    },
    {
      name: "our-rooms",
      text: "Rooms",
      url: "/rooms"
    },
    {
      name: "attractions",
      text: "Attractions",
      url: "/attractions"
    },
    {
      name: "pets",
      text: "Pets",
      url: "/pets"
    },
    {
      name: "parking",
      text: "Parking",
      url: "/parking"
    },
    {
      name: "contact",
      text: "Contact",
      url: "/contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div className="p-8"> <div className="container mx-auto py-3 flex justify-between items-center"> <a href="/"> <img src="/logo.jpg" alt="Tusker Lodge Logo"${addAttribute(200, "width")}${addAttribute(60, "height")}> </a>  <ol className="hidden xl:flex align-items gap-6"> ${navigations.map((n) => renderTemplate`<li${addAttribute(n.name, "key")}> ${renderComponent($$result, "NavItem", $$NavItem, { "text": n.text, "url": n.url })} </li>`)} </ol> <div className="flex items-center content-center gap-x-2"> <div className="hidden relative xl:grid grid-cols-[auto_1fr] gap-x-2 items-center text-gray-700 mr-4"> <div className="p-3 row-span-2 rounded-full bg-orange-500"> <span>Phone Icon was here</span> </div> <p className="text-gray-400 text-sm">Call Us</p> <p className="text-gray-700 font-semibold"> <a href="tel:+441803292668"> <span className="absolute inset-0"></span>
+44 1803 292668
</a> </p> </div> ${renderComponent($$result, "CTA", $$CTA, { "href": undefined                                       , "className": "hidden md:block" }, { "default": ($$result2) => renderTemplate`
Book Directly
` })} ${renderComponent($$result, "CTA", $$CTA, { "href": undefined                                      , "variant": "booking", "className": "hidden md:block" }, { "default": ($$result2) => renderTemplate`
Booking.com
` })}  <button className="block xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Open menu"> <span class="h-6 w-6">Burger menu was here</span> </button> </div>  <div${addAttribute(clsx(
    "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300",
    "opacity-0 pointer-events-none"
  ), "className")} role="button"></div>  <aside${addAttribute(clsx(
    "fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out",
    "w-80 max-w-[85vw]",
    "translate-x-full"
  ), "className")}> <div className="flex flex-col h-full">  <div className="flex items-center justify-between p-4 border-b border-gray-200"> <img src="/logo.jpg" alt="Tusker Lodge Logo"${addAttribute(200, "width")}${addAttribute(60, "height")}> <button className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Close menu"> ${renderComponent($$result, "XIcon", XIcon, { "className": "h-6 w-6" })} </button> </div>  <nav className="flex-1 px-4 py-6"> <ol className="space-y-4"> ${navigations.map((n) => renderTemplate`<li${addAttribute(n.name, "key")}> <a${addAttribute(n.url, "href")} className="block py-3 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors text-lg font-medium"> ${n.text} </a> </li>`)} </ol> </nav>  <div className="border-t border-gray-200 p-4 space-y-4"> <div className="flex flex-col gap-4"> <div className="flex items-center gap-3 text-gray-700"> <div className="p-2 rounded-full bg-orange-500"> ${renderComponent($$result, "PhoneCallIcon", PhoneCallIcon, { "className": "text-orange-100 h-4 w-4" })} </div> <div> <p className="text-gray-400 text-sm">Call Us</p> <p className="font-semibold"> <a href="tel:+441803292668">+44 1803 292668</a> </p> </div> </div> ${renderComponent($$result, "BookingCTA", BookingCTA, { "href": undefined                                        }, { "default": ($$result2) => renderTemplate`
Book Directly
` })} ${renderComponent($$result, "BookingCTA", BookingCTA, { "href": undefined                                      , "variant": "booking" }, { "default": ($$result2) => renderTemplate`
Booking.com
` })} </div> </div> </div> </aside> </div> </div>`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/components/Header.astro", void 0);

function NavItem(props) {
  return /* @__PURE__ */ jsx("a", { href: props.url, className: "hover:text-blue-500", children: props.text });
}

const LogoImage = new Proxy({"src":"/_astro/logo.FZhf0sgm.jpg","width":150,"height":45,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/logo.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/logo.jpg");
							return target[name];
						}
					});

const FooterHeading = (props) => {
  return /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-gray-700 pt-4 pb-2 md:pt-0", children: props.children });
};
function Footer() {
  return /* @__PURE__ */ jsx("section", { className: "py-12 px-8 text-gray-500", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: LogoImage.src,
          alt: "Tusker Lodge Logo",
          width: 200,
          height: 60
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mt-2", children: "533 Babbacombe Road, Torquay, Devon, TQ1 1HQ." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(FooterHeading, { children: "Reservations" }),
      /* @__PURE__ */ jsx("p", { children: "Tel: 01803 292668" }),
      /* @__PURE__ */ jsx("p", { children: "tuskerlodgehotel@gmail.com" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(FooterHeading, { children: "Socials" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/TuskerLodgeHotel", target: "_blank", children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-7 w-7",
            fill: "currentColor",
            style: { color: "#1877f2" },
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" })
          }
        ) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/tuskerlodgehotel/",
            target: "_blank",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-7 w-7 hover:fill-current hover:text-blue-500",
                fill: "currentColor",
                style: { color: "#c13584" },
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(FooterHeading, { children: "Links" }),
      /* @__PURE__ */ jsxs("ol", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavItem, { text: "Location", url: "/" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavItem, { text: "Zutto Sushi", url: "/pets" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavItem, { text: "Terms & Condition", url: "/terms" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavItem, { text: "Privacy Policy", url: "/privacy" }) })
      ] })
    ] })
  ] }) });
}

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(true);
  useEffect(() => {
    const cookieAccepted = document.cookie.split("; ").find((row) => row.startsWith("cookie_accepted="));
    if (!cookieAccepted) {
      setIsAccepted(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5e3);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleAccept = (e) => {
    e.preventDefault();
    const expirationDate = /* @__PURE__ */ new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `cookie_accepted=true; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;
    setIsVisible(false);
    setTimeout(() => setIsAccepted(true), 500);
  };
  if (isAccepted && !isVisible) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `fixed bottom-0 left-0 right-0 z-50 p-4 bg-black text-white transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-full"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "We use cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to our use of cookies." }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            onClick: handleAccept,
            className: "text-white underline hover:no-underline font-medium px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors",
            children: "Accept"
          }
        ) })
      ] })
    }
  );
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Tusker Lodge",
    description = "Pet friendly bed and breakfast (B&B) in Torquay, Devon, UK"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="antialiased"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, {})} ${renderComponent($$result, "CookieBanner", CookieBanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CookieBanner", "client:component-export": "default" })}</body></html>`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/layouts/Layout.astro", void 0);

export { $$Layout as $, createComponent as c };
