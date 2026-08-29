import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

// ─── Stack ────────────────────────────────────────────────────────────────────
const stackVariants = cva("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
    align: "stretch",
    justify: "start",
  },
});

interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(stackVariants({ direction, gap, align, justify }), className)}
      {...props}
    />
  )
);
Stack.displayName = "Stack";

// ─── Grid ─────────────────────────────────────────────────────────────────────
const gridVariants = cva("grid w-full", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
    },
  },
  defaultVariants: { cols: 3, gap: "md" },
});

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gridVariants({ cols, gap }), className)}
      {...props}
    />
  )
);
Grid.displayName = "Grid";

// ─── Sidebar Layout ───────────────────────────────────────────────────────────
interface SidebarLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar: React.ReactNode;
  sidebarWidth?: string;
  side?: "left" | "right";
}

const SidebarLayout = React.forwardRef<HTMLDivElement, SidebarLayoutProps>(
  (
    { sidebar, sidebarWidth = "w-56", side = "left", className, children, ...props },
    ref
  ) => (
    <div ref={ref} className={cn("flex gap-4 w-full", className)} {...props}>
      {side === "left" && (
        <aside className={cn(sidebarWidth, "shrink-0")}>{sidebar}</aside>
      )}
      <main className="flex-1 min-w-0">{children}</main>
      {side === "right" && (
        <aside className={cn(sidebarWidth, "shrink-0")}>{sidebar}</aside>
      )}
    </div>
  )
);
SidebarLayout.displayName = "SidebarLayout";

// ─── Split ────────────────────────────────────────────────────────────────────
const splitVariants = cva("flex w-full", {
  variants: {
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
    },
    ratio: {
      "1/2": "[&>*:first-child]:flex-1 [&>*:last-child]:flex-1",
      "1/3": "[&>*:first-child]:w-1/3 [&>*:last-child]:flex-1",
      "2/3": "[&>*:first-child]:w-2/3 [&>*:last-child]:flex-1",
    },
  },
  defaultVariants: { gap: "md", ratio: "1/2" },
});

interface SplitProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof splitVariants> {}

const Split = React.forwardRef<HTMLDivElement, SplitProps>(
  ({ className, gap, ratio, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(splitVariants({ gap, ratio }), className)}
      {...props}
    />
  )
);
Split.displayName = "Split";

export { Stack, stackVariants, Grid, gridVariants, SidebarLayout, Split, splitVariants };
