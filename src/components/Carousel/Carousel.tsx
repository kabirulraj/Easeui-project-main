import React, { useEffect, useRef, useState, useCallback } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselVariants = cva("relative w-full overflow-hidden rounded-xl", {
  variants: {
    variant: {
      default: "bg-white shadow-md",
      dark: "bg-slate-900 text-white",
      outline: "border-2 border-gray-200 bg-transparent",
    },
  },
  defaultVariants: { variant: "default" },
});

interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      items,
      variant,
      autoPlay = false,
      interval = 3000,
      showDots = true,
      showArrows = true,
      className,
      ...props
    },
    ref
  ) => {
    const [current, setCurrent] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);

    const goTo = useCallback(
      (index: number) => {
        if (isAnimating.current || index === current) return;
        isAnimating.current = true;
        const dir = index > current ? 1 : -1;
        const track = trackRef.current;
        if (!track) return;

        gsap.fromTo(
          track,
          { x: dir * 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
        setCurrent(index);
      },
      [current]
    );

    const prev = () => goTo((current - 1 + items.length) % items.length);
    const next = useCallback(
      () => goTo((current + 1) % items.length),
      [current, goTo, items.length]
    );

    useEffect(() => {
      if (!autoPlay) return;
      const id = setInterval(next, interval);
      return () => clearInterval(id);
    }, [autoPlay, interval, next]);

    return (
      <div ref={ref} className={cn(carouselVariants({ variant }), className)} {...props}>
        <div ref={trackRef} className="w-full">
          {items[current]}
        </div>

        {showArrows && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow transition"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow transition"
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </>
        )}

        {showDots && (
          <div className="flex justify-center gap-2 py-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current ? "bg-indigo-600 w-4" : "bg-gray-300 w-2"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
export { Carousel, carouselVariants };
