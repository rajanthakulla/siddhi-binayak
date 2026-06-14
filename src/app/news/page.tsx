"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { User2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const BLOG_POSTS = [
  {
    slug: "navigate-nepals-ppmo-tender-process",
    title: "How to Navigate Nepal's PPMO Tender Process",
    excerpt: "A comprehensive guide for vendors on successfully bidding and winning public procurement contracts in Nepal.",
    author: "Rajan Thakulla",
    role: "CEO",
    company: "@SiddhiBinayak",
    image: "/images/tender_process.png"
  },
  {
    slug: "top-5-things-government-supply-partner",
    title: "Top 5 Things to Look for in a Government Supply Partner",
    excerpt: "Discover the critical criteria every institutional buyer should evaluate before selecting a B2B trading partner.",
    author: "S.K. Thakulla",
    role: "Procurement Lead",
    company: "@GovSupply",
    image: "/images/government_supply.png"
  },
  {
    slug: "nepal-defense-procurement-update-2025",
    title: "Defense Procurement Update 2025",
    excerpt: "An overview of the upcoming changes in defense supply chains and tactical equipment compliance for 2025.",
    author: "Logistics Unit",
    role: "Director",
    company: "@DefenseOps",
    image: "/images/defense_procurement.png"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO */}
      <section className="relative text-center overflow-hidden pt-[calc(72px+4rem)] pb-16 md:pt-[calc(72px+6rem)] md:pb-24">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10">
          <ScrollReveal delay={0.05}>
            <Badge variant="default" className="mb-6">BLOG</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-sans font-medium text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6 text-text-primary">
              Procurement <span className="text-accent-primary">insights.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-sans text-[18px] text-text-secondary max-w-2xl mx-auto">
              Industry news, tender updates, and procurement strategies from Nepal&apos;s trusted supply partner.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* LISTING */}
      <section className="pb-32 bg-white flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {BLOG_POSTS.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={0.1 * idx} className="h-full">
                <div className="flex flex-col gap-4 group cursor-pointer h-full">
                  <Link href={`/news/${post.slug}`} className="block mb-2 rounded-[24px] overflow-hidden shrink-0">
                    <div className="w-full aspect-square relative bg-surface-border flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </Link>

                  <div className="flex flex-col gap-3 flex-1">
                    <h2 className="font-sans font-medium text-[24px] leading-tight text-text-primary group-hover:text-accent-primary transition-colors">
                      <Link href={`/news/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="font-sans text-[15px] text-text-secondary leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto pt-2">
                    <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-surface-border flex items-center justify-center overflow-hidden shrink-0">
                      <User2 className="w-5 h-5 text-text-tertiary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans font-medium text-[15px] text-text-primary">{post.author}</span>
                      <span className="font-sans text-[14px] text-text-secondary">
                        {post.role} <span className="text-accent-primary">{post.company}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
