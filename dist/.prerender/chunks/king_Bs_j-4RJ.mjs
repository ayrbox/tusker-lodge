import { z as createVNode, B as Fragment, _ as __astro_tag_component__ } from './prerender_dkmDDFL_.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "default", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "default", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

function RoomCarousel({ images }) {
  return /* @__PURE__ */ jsx("div", { className: "w-full pb-4", children: /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "start",
        loop: true
      },
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: images.map((image, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image.src.src,
            alt: image.alt,
            className: "w-full h-auto"
          }
        ) }) }, index)) }),
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-4 bg-white/80 hover:bg-white" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "right-4 bg-white/80 hover:bg-white" })
      ]
    }
  ) });
}

const frontmatter = {
  "title": "King Room with Garden View",
  "description": "Premium king room with 5-foot zip & link king-size bed, en-suite shower, and garden views of Torwood Gardens at Tusker Lodge Torquay bed and breakfast.",
  "heroImage": "../../images/rooms/king.jpg",
  "images": [{
    "src": "../../images/rooms/king.jpg",
    "alt": "King Room with Garden View - 5-Foot Zip & Link King-Size Bed at Tusker Lodge Torquay"
  }, {
    "src": "../../images/rooms/king.jpg",
    "alt": "King Room with En-Suite Shower - Premium Double Accommodation with Torwood Gardens View"
  }],
  "capacity": {
    "min": 1,
    "max": 2
  },
  "beds": [{
    "type": "5-Foot Zip & Link King-Size Bed",
    "quantity": 1
  }],
  "amenities": ["Private En-Suite Shower Room", "Free Toiletries", "Hair Dryer", "Flat-Screen TV", "Tea and Coffee Maker", "Garden View", "Seating Area", "Soundproof Walls", "Carpeted Floors", "Electric Kettle", "Desk", "Iron", "Wardrobe or Closet", "Heating", "Fan", "Wake-up Service/Alarm Clock", "Socket Near Bed", "Refrigerator", "Dining Table", "Complimentary Bottled Water"],
  "rating": {
    "value": 8.8,
    "count": 89,
    "label": "Based on 89 reviews for comfortable beds"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "room-overview",
    "text": "Room Overview"
  }, {
    "depth": 2,
    "slug": "room-facilities--features",
    "text": "Room Facilities & Features"
  }, {
    "depth": 2,
    "slug": "private-bathroom",
    "text": "Private Bathroom"
  }, {
    "depth": 2,
    "slug": "breakfast--dining",
    "text": "Breakfast & Dining"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(RoomCarousel, {
      images: frontmatter.images,
      "client:visible": true,
      "client:component-path": "@/components/RoomCarousel",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "room-overview",
      children: "Room Overview"
    }), "\n", createVNode(_components.p, {
      children: ["Experience luxury and comfort in our ", createVNode(_components.strong, {
        children: "King Room with Garden View"
      }), ", a first-floor, south-facing bedroom featuring stunning views of the picturesque Torwood Gardens. This premium room is perfectly designed for guests seeking relaxation and sophistication at Tusker Lodge, a premier bed and breakfast in Torquay, Devon."]
    }), "\n", createVNode(_components.p, {
      children: ["With a luxurious 5-foot zip & link king-size bed and a private en-suite shower room, this room combines elegant comfort with practical amenities. Guests consistently praise the exceptional comfort of our beds, with an impressive ", createVNode(_components.strong, {
        children: "8.8/10 rating"
      }), " based on 89 verified reviews. Tea and coffee making facilities and complimentary bottled water are included for your convenience."]
    }), "\n", createVNode(_components.h2, {
      id: "room-facilities--features",
      children: "Room Facilities & Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "5-Foot Zip & Link King-Size Bed"
        }), " - Premium comfort and flexibility"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "First-Floor Location"
        }), " - South-facing with direct access"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Garden View"
        }), " - Beautiful outlook over Torwood Gardens"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Private En-Suite Shower Room"
        }), " - Exclusive bathroom facilities"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Free Toiletries"
        }), " - Premium quality products"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hair Dryer"
        }), " - Provided in en-suite"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Flat-Screen TV"
        }), " - Entertainment and relaxation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tea and Coffee Maker"
        }), " - With electric kettle"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Complimentary Bottled Water"
        }), " - Stay refreshed"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Seating Area"
        }), " - Comfortable lounge space"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Soundproof Walls"
        }), " - Peace and quiet guaranteed"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Carpeted Floors"
        }), " - Comfort underfoot"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Workspace"
        }), " - Desk for work or planning"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Iron & Ironing Board"
        }), " - Available upon request"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wardrobe or Closet"
        }), " - Ample storage"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Refrigerator"
        }), " - Keep drinks chilled"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dining Table"
        }), " - Convenient dining space"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Climate Control"
        }), " - Heating and fan"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Socket Near Bed"
        }), " - Convenient charging"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wake-up Service/Alarm Clock"
        }), " - Never miss checkout"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [":::tip[Guest Comfort Rating]\n", createVNode(_components.strong, {
        children: "Beds Rated 8.8 out of 10"
      }), " - Based on 89 verified guest reviews\nOur guests consistently praise the comfort and quality of our beds, making this king room an excellent choice for a restful stay in Torquay.\n:::"]
    }), "\n", createVNode(_components.h2, {
      id: "private-bathroom",
      children: "Private Bathroom"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Free Toiletries"
        }), " - Premium products provided"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Toilet"
        }), " - Private facilities"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bath or Shower"
        }), " - Choose your preferred option"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Towels"
        }), " - Fresh towels provided"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hair Dryer"
        }), " - Available in en-suite"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Toilet Paper"
        }), " - Fully stocked"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "breakfast--dining",
      children: "Breakfast & Dining"
    }), "\n", createVNode(_components.p, {
      children: "Start your day right with our delicious breakfast, an optional extra at just £10 per person per day. Enjoy your morning meal in comfort before exploring Torquay and the English Riviera."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Why Choose Our King Room?"
        }), "\nDiscover the perfect blend of elegance and comfort in our king room. With a premium 5-foot zip & link king-size bed rated 8.8/10 for comfort, stunning garden views, and a private en-suite shower room, this room offers the ideal retreat for couples or individuals seeking a luxurious stay at Tusker Lodge in Torquay. The soundproof walls ensure a peaceful night’s sleep, while comprehensive amenities and complimentary bottled water make for a comfortable, worry-free experience."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/rooms/king.mdx";
const file = "/home/ayrbox/beans.projects/tusker-lodge/src/content/rooms/king.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/ayrbox/beans.projects/tusker-lodge/src/content/rooms/king.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
