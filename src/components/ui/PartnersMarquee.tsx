"use client";

import React from "react";

const partners = [
  { imageUrl: "/images/vsg-logo.png", name: "Vertical Supply Group" },
  { imageUrl: "/images/prototypa.webp", name: "Prototypa" },
  { imageUrl: "/images/onboard-logo.png", name: "Onboard Systems Int." },
  { imageUrl: "/images/ess-logo.png", name: "ESS" },
  { imageUrl: "/images/zennison-logo.png", name: "Zennison" },
  { imageUrl: "/images/kaya-logo.png", name: "Kaya Safety" },
  { imageUrl: "/images/petzl-logo.png", name: "PETZL" },
];

export function PartnersMarquee() {
  // Duplicate for seamless infinite loop
  const items = [...partners, ...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="partners-container">
        {/* Edge fade masks */}
        <div className="fade-left" />
        <div className="fade-right" />

        {/* Scrolling track */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {items.map((partner, i) => (
              <div className="partner-item" key={i}>
                <img 
                  src={partner.imageUrl} 
                  alt={partner.name} 
                  className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          width: 100%;
          background: #ffffff;
          display: flex;
          justify-content: center;
          padding: 30px 0;
        }

        .partners-container {
          position: relative;
          width: 100%;
          max-width: 1280px; /* Standard max-w-7xl matching nav */
          height: 80px;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin: 0 auto;
        }

        /* Gradient fade on left and right edges */
        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 3;
          pointer-events: none;
        }
        @media (min-width: 768px) {
          .fade-left,
          .fade-right {
            width: 180px;
          }
        }
        .fade-left {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .fade-right {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          /* Total width = num items * item width. With 21 items at ~180px each = ~3780px */
          width: max-content;
          animation: marquee-scroll 25s linear infinite;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll one full set (7 partners) */
            transform: translateX(calc(-100% / 3));
          }
        }

        .partner-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          user-select: none;
        }

        @media (min-width: 768px) {
          .partner-item {
            padding: 0 60px;
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
