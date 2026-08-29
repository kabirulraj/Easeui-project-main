import React, { useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const tooltipVariants = cva(
  "absolute z-50 px-3 py-1.5 text-xs font-medium rounded-md shadow-md pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        light: "bg-white text-gray-800 border border-gray-200",
        primary: "bg-indigo-600 text-white",
        danger: "bg-red-500 text-white",
      },
    },
    defaultVariants: { variant: "dark" },
  }
);

const placementClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses: Record<string, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent",
};

const arrowColorClasses: Record<string, string> = {
  dark: "border-slate-900",
  light: "border-gray-200",
  primary: "border-indigo-600",
  danger: "border-red-500",
};

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  content: string;
  placement?: "top" | "bottom" | "left" | "right";
  children: React.ReactElement;
}

const Tooltip = ({
  content,
  placement = "top",
  variant = "dark",
  children,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const show = () => {
    setVisible(true);
    requestAnimationFrame(() => {
      if (!tooltipRef.current) return;
      gsap.fromTo(
        tooltipRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.7)" }
      );
    });
  };

  const hide = () => {
    if (!tooltipRef.current) return;
    gsap.to(tooltipRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.15,
      ease: "power1.in",
      onComplete: () => setVisible(false),
    });
  };

  return (
    <span className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={cn(tooltipVariants({ variant }), placementClasses[placement])}
        >
          {content}
          {/* Arrow */}
          <span
            className={cn(
              "absolute w-0 h-0 border-4",
              arrowClasses[placement],
              arrowColorClasses[variant ?? "dark"]
            )}
          />
        </div>
      )}
    </span>
  );
};

Tooltip.displayName = "Tooltip";
export { Tooltip, tooltipVariants };
