import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-[calc(100vh-72px)] bg-white relative overflow-hidden pt-[72px]">
      {/* Background 404 */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[240px] leading-none text-[#FAFAFA] select-none pointer-events-none z-0 tracking-tighter">
        404
      </span>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center gap-6 max-w-lg px-4">
        <h1 className="font-sans font-medium text-5xl md:text-6xl tracking-tight">
          Page not found.
        </h1>
        <p className="font-sans text-[18px] text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or is currently unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button variant="primary" className="rounded-full" asChild>
            <Link href="/">Go to homepage</Link>
          </Button>
          <Button variant="secondary" className="rounded-full" asChild>
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
