"use client";

import React from "react";

const partners = [
  { icon: "✳", name: "lemp" },
  { icon: "⌘", name: "jump" },
  { icon: "⊞", name: "aper" },
  { icon: "⌐", name: "driep" },
  { icon: "✳", name: "quep" },
  { icon: "❋", name: "doin" },
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
                <span className="partner-icon">{partner.icon}</span>
                <span className="partner-name">{partner.name}</span>
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
          padding: 20px 0;
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
          width: 180px;
          z-index: 3;
          pointer-events: none;
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
          /* Total width = num items * item width. With 18 items at ~170px each = ~3060px */
          width: max-content;
          animation: marquee-scroll 18s linear infinite;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll one full set (6 partners * ~170px = ~1020px) */
            transform: translateX(calc(-100% / 3));
          }
        }

        .partner-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 52px;
          white-space: nowrap;
          color: #666666;
          user-select: none;
        }

        .partner-icon {
          font-size: 18px;
          line-height: 1;
          color: #666666;
          opacity: 1;
        }

        .partner-name {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: #666666;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
