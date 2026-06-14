"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Government Supply", href: "/government-supply" },
  { name: "Why Us", href: "/why-us" },
  { name: "Coverage", href: "/coverage" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1200px] h-[72px] z-[999] transition-all duration-300 ease-in-out border border-surface-border bg-white rounded-full",
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "shadow-sm"
        )}
      >
        <div className="px-6 md:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="Siddhi Binayak Logo" className="h-[40px] md:h-[50px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-[15px] text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button variant="secondary" size="sm" asChild className="rounded-full">
              <Link href="/quote">Get started</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[1000] bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="px-6 h-[88px] flex items-center justify-between border-b border-surface-border shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="Siddhi Binayak Logo" className="h-[40px] md:h-[50px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" />
          </Link>
          <button
            className="text-text-primary p-2 rounded-full hover:bg-bg-secondary"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-3xl font-medium text-text-secondary hover:text-text-primary flex items-center justify-between border-b border-surface-border pb-4"
            >
              {link.name}
              <ChevronRight className="text-accent-primary" />
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8 shrink-0">
          <Button variant="primary" className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
            <Link href="/quote">Get started</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
