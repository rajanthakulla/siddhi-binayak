"use client";
import React from 'react';

export function HeroAbstractUI() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {/* Background Grid for Tech/Structured Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      {/* Animated SVG Connection Routes */}
      <svg className="absolute inset-0 w-full h-full hidden lg:block opacity-30" style={{ zIndex: 0 }}>
        <path 
          d="M 15vw 30vh C 35vw 10vh, 65vw 40vh, 85vw 25vh" 
          fill="none" 
          stroke="#FF5A1F" 
          strokeWidth="2" 
          strokeDasharray="8 8" 
          className="animate-[dash_30s_linear_infinite]" 
        />
        <path 
          d="M 20vw 75vh C 45vw 90vh, 55vw 50vh, 85vw 70vh" 
          fill="none" 
          stroke="#FF5A1F" 
          strokeWidth="2" 
          strokeDasharray="8 8" 
          className="animate-[dash_30s_linear_infinite_reverse]" 
        />
      </svg>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>

      {/* Central Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,213,194,0.5)_0%,rgba(255,255,255,0)_60%)] rounded-full blur-3xl opacity-80" />
    </div>
  );
}
