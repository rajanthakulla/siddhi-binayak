import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-sans transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none",
          
          // Variants
          variant === "primary" &&
            "bg-[#111111] text-white hover:bg-accent-primary shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,106,40,0.3)] border border-transparent",
          variant === "secondary" &&
            "bg-white text-[#111111] border border-surface-border hover:border-[#d1d1d1] hover:bg-[#fafafa]",
          variant === "ghost" &&
            "bg-transparent text-[#111111] hover:text-accent-primary p-0 border-none",
            
          // Sizes
          size === "default" && "h-12 px-7 py-3 text-[15px] font-medium",
          size === "sm" && "h-10 px-5 text-[14px] font-medium",
          size === "lg" && "h-14 px-8 text-[16px] font-medium",
          size === "icon" && "h-12 w-12",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
