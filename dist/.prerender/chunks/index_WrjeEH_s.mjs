import { c as createComponent, $ as $$Layout } from './Layout_BWxZLDmF.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_dkmDDFL_.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import clsx from 'clsx';
import { ArrowRightIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const HarbourImage = new Proxy({"src":"/_astro/hero-banner.uP1ta6Ky.jpg","width":1440,"height":810,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/hero-banner.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/hero-banner.jpg");
							return target[name];
						}
					});

const BG = new Proxy({"src":"/_astro/featured_bg.Gidc8ClW.jpg","width":1920,"height":693,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/bg/featured_bg.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/bg/featured_bg.jpg");
							return target[name];
						}
					});

function Featured() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "relative py-10 bg-cover bg-no-repeat bg-center",
      style: {
        backgroundImage: `url(${BG.src})`
      },
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto mb-16 py-8 flex flex-col xl:flex-row", children: [
        /* @__PURE__ */ jsx("div", { className: "p-8 xl:w-1/2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "rounded rounded-lg shadow-md h-full object-cover",
            src: HarbourImage.src,
            alt: "Torquay Harbour"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 xl:w-1/2 text-gray-500", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-bold text-blue-400 mb-2", children: "Welcome to Tusker Lodge" }),
          /* @__PURE__ */ jsx("h1", { className: "mb-6 text-4xl font-bold", children: "Experience Torquay with us" }),
          /* @__PURE__ */ jsx("p", { className: "mb-3 text-lg", children: "Welcome to Tusker Lodge – your perfect coastal retreat just 10 minutes from Torquay harbour!" }),
          /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Run by Sandy (a professional chef) and his wife, we bring genuine warmth and exceptional hospitality to your Devon getaway. Start each day with Sandy's expertly crafted breakfast, and don't miss his weekend Japanese takeaway – a delicious surprise that sets us apart!" }),
          /* @__PURE__ */ jsxs("p", { className: "mb-3", children: [
            "With 9 comfortable rooms (singles, doubles, and triples) and a pet-friendly policy, we welcome everyone – including your four-legged family members. Public transport is right across the road, making it easy to explore all that the",
            " ",
            /* @__PURE__ */ jsx("strong", { className: "text-lg", children: "English Riviera" }),
            " offers."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Whether you're seeking seaside adventures, family fun, or a peaceful escape, Tusker Lodge is your ideal home base in beautiful Torquay." }),
          /* @__PURE__ */ jsx("p", { className: "mb-3 text-lg", children: /* @__PURE__ */ jsx("strong", { children: "We can't wait to welcome you!" }) })
        ] })
      ] })
    }
  );
}

const TorquayHarbourImage = new Proxy({"src":"/_astro/featured-torquay-harbour.D_V5KGKG.jpg","width":2047,"height":948,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/featured-torquay-harbour.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/featured-torquay-harbour.jpg");
							return target[name];
						}
					});

const BookingCTA = ({
  href = "",
  variant = "default",
  children,
  className
}) => /* @__PURE__ */ jsx(
  "a",
  {
    href,
    target: "_blank",
    className: clsx(
      "border rounded-full border border-transparent px-8 py-3 text-base font-medium text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden shadow",
      {
        "bg-[#ffa400] hover:bg-[#009ffd]": variant === "default"
      },
      {
        "bg-[#003b95] hover:bg-[#006ce4]": variant === "booking"
      },
      className
    ),
    children
  }
);

function Hero() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "relative bg-cover bg-no-repeat bg-center",
      style: {
        backgroundImage: `url(${TorquayHarbourImage.src})`
      },
      children: /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-8 py-32 xl:p-40 flex flex-col text-center md:text-left", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl text-gray-200 text-shadow-lg", children: [
          "Experience Torquay with",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: " Tusker Lodge" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "my-8 text-gray-200 font-bold", children: "Sandy welcomes you to Tusker Lodge in Torquay Harbour, located in heart of English Riviera." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 justify-items-end", children: [
          /* @__PURE__ */ jsx(BookingCTA, { href: process.env.NEXT_PUBLIC_BOOKING_DIRECTLY, children: "Book Directly" }),
          /* @__PURE__ */ jsx(
            BookingCTA,
            {
              href: process.env.NEXT_PUBLIC_BOOKING_DOT_COM,
              variant: "booking",
              children: "Booking.com"
            }
          )
        ] })
      ] })
    }
  );
}

const KingRoomImage = new Proxy({"src":"/_astro/king.CdC90fw6.jpg","width":1024,"height":576,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/king.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/king.jpg");
							return target[name];
						}
					});

const TripleRoomImage = new Proxy({"src":"/_astro/room-03-03.C8GSRGKT.jpg","width":1024,"height":576,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/room-03-03.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/room-03-03.jpg");
							return target[name];
						}
					});

const DoubleRoomImage = new Proxy({"src":"/_astro/doubles.DIzMtk9R.jpg","width":1024,"height":576,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/doubles.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/doubles.jpg");
							return target[name];
						}
					});

const SingleRoomImage = new Proxy({"src":"/_astro/singles.Dzkhfih7.jpg","width":1024,"height":576,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/singles.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/rooms/singles.jpg");
							return target[name];
						}
					});

const Room = (props) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative group text-white", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "object-cover h-full w-full",
        src: props.image.src,
        alt: props.name
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-[#1a627d] to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 p-4 flex items-end", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: props.name }),
      /* @__PURE__ */ jsxs("a", { className: "flex", href: props.href, children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0" }),
        /* @__PURE__ */ jsx("span", { children: "View" }),
        /* @__PURE__ */ jsx(ArrowRightIcon, { className: "transition-all group-hover:translate-x-4" })
      ] })
    ] }) })
  ] });
};
const roomsInfo = [
  {
    name: "Triple Room",
    image: TripleRoomImage,
    href: "./rooms/family"
  },
  {
    name: "King & Queen Room",
    image: KingRoomImage,
    href: "./rooms/king"
  },
  {
    name: "Doubles",
    image: DoubleRoomImage,
    href: "./rooms/doubles"
  },
  {
    name: "Singles",
    image: SingleRoomImage,
    href: "./rooms/singles"
  }
];
function Rooms() {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col xl:flex-row-reverse", children: [
    /* @__PURE__ */ jsx("div", { className: "xl:w-1/2 px-8 py-8 flex justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col gap-8 text-center items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl text-gray-700 font-bold", children: "Our Rooms" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Choose from 9 comfortable rooms – singles, doubles, or triples to suit your needs. Each comes with TV and all essential amenities at reasonable prices. Simple, comfortable, and everything you need for a relaxing stay." }),
      /* @__PURE__ */ jsxs("a", { className: "flex", href: "./rooms", children: [
        /* @__PURE__ */ jsx("span", { children: "Find more " }),
        /* @__PURE__ */ jsx(ArrowRightIcon, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "xl:w-1/2 grid md:grid-cols-2 h-dvh xl:h-[32rem]", children: roomsInfo.map((r) => /* @__PURE__ */ jsx(Room, { name: r.name, image: r.image, href: r.href }, r.name)) })
  ] });
}

const testimonials = [
  {
    title: "A fantastic impromptu overnight stay!",
    text: `We checked in for a last minute overnight stay. The host was very welcoming and friendly, the room was very clean and well stocked with tea & coffee, the bathroom had shampoos and body cream.
We were even able to have our dog stay over with us! Very comfortable mattress and lovely view over Torwood Gardens.`,
    name: "Trudi",
    source: "Booking.com"
  },
  {
    title: "Lovely place",
    text: "A really great place to stay: excellent location, lovely hosts, a lot of character to the place, next to a sweet little park.",
    name: "Elena",
    source: "Booking.com"
  },
  {
    title: "Wonderful place and location.",
    text: `The couple running this Guest house are very kind and welcoming. They work hard to make the guests feel comfortable.
It is dog-friendly, so we took our little dog.
It is very close to the marina and centre, but there is no noise.
If you go with your dog there is a lovely garden just across the road.`,
    name: "Viviana Williams",
    source: "Google Reviews"
  },
  {
    title: "Beautiful Little Gem",
    text: "Really enjoyed my stay at this beautiful little gem. The owner was lovely. The room was beautiful. The location was perfect. It was very clean and very reasonably priced.",
    name: "Jolene Davies",
    source: "Google Reviews"
  },
  {
    title: "Stay was lovely, clean and comfortable",
    text: `The stay was lovely, very clean and comfortable room,great location close to the harbour and shopping. It was a great breakfast, and Sandy and his wife were fantastic. They made us feel very welcome,
We hope to be back for a longer visit in the future.`,
    name: "Sharon & Dave",
    source: "Google Reviews"
  }
];
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const isDraggingRef = useRef(false);
  useEffect(() => {
    if (isAutoScrollPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);
  const handleStart = (clientX) => {
    startXRef.current = clientX;
    currentXRef.current = clientX;
    isDraggingRef.current = true;
    setIsAutoScrollPaused(true);
  };
  const handleMove = (clientX) => {
    if (!isDraggingRef.current) return;
    currentXRef.current = clientX;
  };
  const handleEnd = () => {
    if (!isDraggingRef.current) return;
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        setCurrentIndex(
          (prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }
    isDraggingRef.current = false;
    setTimeout(() => setIsAutoScrollPaused(false), 2e3);
  };
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };
  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };
  const handleMouseUp = () => {
    handleEnd();
  };
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    handleEnd();
  };
  const handleWheel = (e) => {
    e.preventDefault();
    setIsAutoScrollPaused(true);
    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else {
      setCurrentIndex(
        (prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
    setTimeout(() => setIsAutoScrollPaused(false), 2e3);
  };
  const currentTestimonial = testimonials[currentIndex];
  return /* @__PURE__ */ jsx("section", { className: "py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-col gap-6 items-center text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg text-gray-500 font-bold", children: "Testimonials" }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-full p-8 xl:w-2/3 cursor-grab active:cursor-grabbing select-none text-lg text-gray-800",
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onWheel: handleWheel,
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold my-3", children: currentTestimonial.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg transition-opacity duration-500", children: [
            '"',
            currentTestimonial.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "transition-opacity duration-500 mt-6", children: [
            /* @__PURE__ */ jsx("h5", { className: "font-bold", children: currentTestimonial.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm -mt-1", children: currentTestimonial.source })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: testimonials.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-gray-600" : "bg-gray-300"}`,
        onClick: () => {
          setCurrentIndex(index);
          setIsAutoScrollPaused(true);
          setTimeout(() => setIsAutoScrollPaused(false), 2e3);
        }
      },
      index
    )) })
  ] }) });
}

const ZuttoSushiImage = new Proxy({"src":"/_astro/zutto-sushi.CZXxqaan.jpg","width":2100,"height":1800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ayrbox/beans.projects/tusker-lodge/src/images/zutto-sushi.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/ayrbox/beans.projects/tusker-lodge/src/images/zutto-sushi.jpg");
							return target[name];
						}
					});

function ZuttoSushi() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative py-10 bg-cover bg-no-repeat bg-center",
      style: {
        backgroundImage: `url(${ZuttoSushiImage.src})`
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-900 opacity-40 group-hover:hidden" }),
        /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto py-8 flex flex-col text-center border-2 border-gray-200", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-200 text-shadow-lg", children: "Zutto Sushi" }),
          /* @__PURE__ */ jsx("p", { className: "mb-8 text-gray-200 font-bold", children: "Experience Zutto Sushi from our Chef." }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.zuttosushi.co.uk/",
              target: "_blank",
              className: "text-gray-100 rounded-full border-transparent bg-[#009ffd] px-8 py-3 text-base font-medium hover:bg-[#ffa400] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",
              children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-2", children: [
                "Learn Now",
                /* @__PURE__ */ jsx(ArrowRightIcon, {})
              ] })
            }
          ) })
        ] })
      ]
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tusker Lodge | Pet Friendly B&B in Torquay" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, {})} ${renderComponent($$result2, "Featured", Featured, {})} ${renderComponent($$result2, "Rooms", Rooms, {})} ${renderComponent($$result2, "Testimonials", Testimonials, {})} ${renderComponent($$result2, "ZuttoSushi", ZuttoSushi, {})} </main> ` })}`;
}, "/home/ayrbox/beans.projects/tusker-lodge/src/pages/index.astro", void 0);

const $$file = "/home/ayrbox/beans.projects/tusker-lodge/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
