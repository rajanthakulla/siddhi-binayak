"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
}

export const Marquee = ({
  className,
  children,
  pauseOnHover = true,
  speed = "normal",
  direction = "left",
  ...props
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] min-w-full",
          "animate-marquee flex-row",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "right" && "[animation-direction:reverse]",
          speed === "fast" && "[animation-duration:15s]",
          speed === "normal" && "[animation-duration:30s]",
          speed === "slow" && "[animation-duration:50s]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] min-w-full",
          "animate-marquee flex-row",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "right" && "[animation-direction:reverse]",
          speed === "fast" && "[animation-duration:15s]",
          speed === "normal" && "[animation-duration:30s]",
          speed === "slow" && "[animation-duration:50s]"
        )}
      >
        {children}
      </div>
    </div>
  );
};
