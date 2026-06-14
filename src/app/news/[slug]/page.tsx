"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "../page";
import { ChevronLeft } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Safe unwrapping for Promise params in newer Next.js versions
  const resolvedParams = params instanceof Promise ? React.use(params) : params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ARTICLE HEADER */}
      <section className="relative overflow-hidden pt-[calc(72px+4rem)] pb-16 md:pt-[calc(72px+6rem)] md:pb-24">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10 max-w-[800px] flex flex-col gap-6 text-center items-center">
          <ScrollReveal delay={0.05}>
            <Button variant="ghost" className="mb-4 text-text-tertiary hover:text-text-primary px-0 font-medium" asChild>
              <Link href="/news"><ChevronLeft className="w-4 h-4 mr-1"/> Back to Insights</Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Badge variant="default" className="w-fit">ARTICLE</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-sans font-medium text-4xl md:text-5xl tracking-tight leading-tight text-text-primary">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex items-center gap-4 pt-6 mt-2">
              <div className="w-12 h-12 rounded-full bg-white border border-surface-border flex items-center justify-center font-sans font-medium text-[18px] text-text-tertiary">
                {post.author.charAt(0)}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-medium text-[15px] text-text-primary">{post.author}</span>
                <span className="font-sans text-[14px] text-text-secondary">
                  {post.role} <span className="text-accent-primary">{post.company}</span>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 md:py-24">
        <div className="container max-w-[800px]">
          <article className="prose max-w-none prose-p:font-sans prose-p:text-[18px] prose-p:leading-[1.8] prose-p:text-text-secondary prose-headings:font-sans prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-text-primary prose-a:text-accent-primary hover:prose-a:text-accent-primary prose-strong:text-text-primary prose-li:text-text-secondary">
            <ScrollReveal delay={0.1}>
              <p className="lead text-xl text-text-primary font-medium mb-8">
                {post.excerpt}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.15}>
              <h2>The Changing Landscape of Procurement</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h3>Key Compliance Requirements</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul>
                <li>Valid PAN and VAT registration with active tax clearance.</li>
                <li>PPMO verification for government tender eligibility.</li>
                <li>ISO-aligned supply chain methodologies.</li>
                <li>Transparent OEM authorization letters for specialized equipment.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <h2>Looking Ahead to 2025</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-[#FAFAFA] border-l-4 border-accent-primary p-6 my-8 rounded-r-2xl border-y border-r border-y-surface-border border-r-surface-border">
                <p className="m-0 italic font-medium text-text-primary">
                  &quot;Procurement is no longer just about lowest cost; it&apos;s about compliance, traceability, and guaranteed execution.&quot;
                </p>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>
    </div>
  );
}
