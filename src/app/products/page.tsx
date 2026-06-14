"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Military & Defense",
  "Safety & Security",
  "IT & Electronics",
  "Construction",
  "Medical",
  "Office"
];

const PRODUCTS = [
  { cat: "Military & Defense", name: "Tactical Uniform Set", spec: "ISO-Certified Ripstop Material" },
  { cat: "Military & Defense", name: "Combat Boots", spec: "All-Terrain Waterproof" },
  { cat: "Military & Defense", name: "Ballistic Helmet", spec: "Level IIIa NIJ Certified" },
  { cat: "Military & Defense", name: "Encrypted Radio", spec: "VHF/UHF Dual Band" },
  
  { cat: "Safety & Security", name: "Body Armor Vest", spec: "Level IV Ceramic Plates" },
  { cat: "Safety & Security", name: "4K NVR System", spec: "32-Channel Commercial Grade" },
  { cat: "Safety & Security", name: "Fire Alarm Panel", spec: "Addressable Multizone" },
  { cat: "Safety & Security", name: "Access Control Hub", spec: "Biometric + RFID" },
  
  { cat: "IT & Electronics", name: "Enterprise Server", spec: "Dual Xeon, 256GB RAM" },
  { cat: "IT & Electronics", name: "Network Switch", spec: "48-Port PoE+ Gigabit" },
  { cat: "IT & Electronics", name: "Commercial Display", spec: "75-inch 24/7 Rating" },
  { cat: "IT & Electronics", name: "UPS Backup", spec: "10kVA Online Double Conversion" },
  
  { cat: "Construction", name: "Rotary Hammer Drill", spec: "Heavy Duty SDS Max" },
  { cat: "Construction", name: "Scaffolding Set", spec: "Galvanized Steel H-Frame" },
  { cat: "Construction", name: "TMT Rebar", spec: "Fe500 Grade Bulk Supply" },
  { cat: "Construction", name: "Industrial Hard Hats", spec: "ANSI Z89.1 Certified" },
  
  { cat: "Medical", name: "Surgical Kit", spec: "Sterile Disposable Set" },
  { cat: "Medical", name: "Trauma First Aid", spec: "Military Grade Medkit" },
  { cat: "Medical", name: "Patient Monitor", spec: "Multi-Parameter Touch" },
  { cat: "Medical", name: "PPE Coveralls", spec: "Level 3 Biohazard" },
  
  { cat: "Office", name: "Ergonomic Chair", spec: "Mesh Back, 4-Way Adjust" },
  { cat: "Office", name: "Executive Desk", spec: "L-Shape Modular Laminate" },
  { cat: "Office", name: "High-Volume Printer", spec: "A3 Color Laser MFP" },
  { cat: "Office", name: "Archive Shelving", spec: "Mobile Compactor System" }
];

const getCategoryImage = (cat: string) => {
  switch(cat) {
    case "Military & Defense": return "/images/prod_military_1781206923269.png";
    case "Safety & Security": return "/images/prod_safety_1781206934890.png";
    case "IT & Electronics": return "/images/prod_it_1781206945008.png";
    case "Construction": return "/images/prod_construction_1781206957009.png";
    case "Medical": return "/images/prod_medical_1781206968554.png";
    case "Office": return "/images/prod_office_1781206980279.png";
    default: return "/images/prod_office_1781206980279.png";
  }
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.cat === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO & FILTERS */}
      <section className="relative overflow-hidden pt-[calc(72px+4rem)] pb-16 md:pt-[calc(72px+6rem)] md:pb-24">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-[#FAFAFA]">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center">
          <ScrollReveal delay={0.1}>
            <h1 className="font-sans font-medium text-5xl md:text-6xl leading-[1.05] tracking-tight text-text-primary mb-6">
              Our product <span className="text-accent-primary">catalog.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-sans text-[18px] text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Explore our extensive range of high-quality, certified products sourced directly from verified global manufacturers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 bg-[#FAFAFA] flex-1">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full font-sans text-[15px] font-medium transition-all duration-300 border",
                    activeCategory === cat 
                      ? "bg-[#111111] text-white border-transparent shadow-[0_4px_14px_rgba(0,0,0,0.1)]" 
                      : "bg-white text-text-secondary border-surface-border hover:border-[#d1d1d1] hover:text-text-primary hover:bg-[#FAFAFA]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod, idx) => (
              <ScrollReveal key={`${prod.name}-${activeCategory}-${idx}`} delay={0.03 * idx} className="h-full">
                <div className="bg-white border border-surface-border rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-[#d1d1d1] transition-all duration-300 flex flex-col h-full">
                  <div className="h-[220px] bg-[#111111] w-full relative flex items-center justify-center overflow-hidden border-b border-surface-border shrink-0">
                    <Image src={getCategoryImage(prod.cat)} alt={prod.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 z-10">{prod.cat}</Badge>
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-2">
                    <h4 className="font-sans font-medium text-lg leading-snug">{prod.name}</h4>
                    <p className="font-sans text-[15px] text-text-secondary mb-6 flex-1">{prod.spec}</p>
                    <Button variant="ghost" className="self-start text-[14px] font-medium px-0 text-accent-primary hover:text-accent-secondary" asChild>
                      <Link href="/quote">Enquire for pricing <ChevronRight className="w-4 h-4 ml-1"/></Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 text-text-tertiary font-sans">
              No products found in this category.
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 border-t border-surface-border bg-white text-center">
        <div className="container flex flex-col items-center gap-6">
          <ScrollReveal delay={0.1}>
            <p className="font-sans font-medium text-3xl tracking-tight">
              Don&apos;t see what you need?
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <Button variant="secondary" className="rounded-full" asChild>
              <Link href="/quote">Submit a custom requirement</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
