import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase",
          variant === "default" && "bg-transparent text-accent-primary border border-accent-primary",
          variant === "success" && "bg-[rgba(34,197,94,0.1)] text-success",
          variant === "warning" && "bg-[rgba(245,158,11,0.1)] text-warning",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
