"use client";

import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.2, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}
