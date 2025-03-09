import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "w-[103px] inline-flex items-center justify-center rounded-full border rounded-xl px-1.5 text-xs font-medium text-white leading-normal transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 bg-gray p-[10px]",
  {
    variants: {
      variant: {
        default: " bg-primary text-primary-foreground",
        secondary: " bg-secondary text-secondary-foreground",
        destructive: " bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
