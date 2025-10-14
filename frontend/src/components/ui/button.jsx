import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
    "disabled:pointer-events-none disabled:opacity-50 " +
    "[&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 " +
    "transition-colors duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-[#fb7707] text-white border border-red-500 hover:bg-[#fb5507]",
        destructive:
          "bg-red-600 text-white border border-red-600 hover:bg-red-700",
        outline:
          "border border-gray-300 text-gray-900 bg-transparent hover:bg-gray-100",
        secondary:
          "bg-gray-200 text-gray-900 border border-gray-300 hover:bg-gray-300",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
      },
      size: {
        default: "min-h-[36px] px-4 py-2",
        sm: "min-h-[32px] px-3 text-xs rounded-md",
        lg: "min-h-[40px] px-6 text-base rounded-md",
        icon: "h-9 w-9 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };




