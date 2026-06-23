"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowRight, ShieldCheck, Globe, Handshake, Target, Eye, Award } from "lucide-react";

export default function WhyUsPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-[calc(72px+6rem)] pb-12 md:pt-[calc(72px+8rem)] md:pb-16 text-center">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-white">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10 flex flex-col items-center gap-6">
          <ScrollReveal delay={0.1}>
            <h1 className="font-sans font-medium text-5xl md:text-6xl leading-[1.05] tracking-tight text-text-primary max-w-4xl">
              Why <span className="text-accent-primary">Siddhi Binayak Overseas Pvt. Ltd. Nepal?</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.25}>
            <div className="flex flex-col gap-4 font-sans text-[18px] text-text-secondary leading-relaxed max-w-3xl">
              <p>
                Siddhi Binayak Overseas Pvt. Ltd. Nepal stands at the forefront of global procurement and institutional supply. We engineer resilient, large-scale supply chains that empower Nepal's public sector and enterprise B2B operations with uncompromising efficiency.
              </p>
              <p>
                By enforcing rigorous quality thresholds, absolute regulatory compliance, and precise delivery schedules, we serve as the critical bridge connecting world-class manufacturers to Nepal’s most demanding infrastructure, defense, and public health initiatives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. MISSION, VISION & DIFFERENCE */}
      <section className="py-20 bg-white">
        <div className="container flex flex-col gap-12">
          {/* Top Row: Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-white p-10 rounded-3xl border border-surface-border shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FFF8F5] flex items-center justify-center text-accent-primary">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="font-sans font-medium text-3xl text-text-primary tracking-tight">Our Mission</h3>
                </div>
                <p className="font-sans text-[16px] text-text-secondary leading-relaxed">
                  To architect and execute fault-tolerant supply chains that empower Nepal&apos;s state institutions and enterprise sectors. We eliminate logistical friction, ensuring uninterrupted access to mission-critical resources for national development.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-white p-10 rounded-3xl border border-surface-border shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FFF8F5] flex items-center justify-center text-accent-primary">
                    <Eye className="w-7 h-7" />
                  </div>
                  <h3 className="font-sans font-medium text-3xl text-text-primary tracking-tight">Our Vision</h3>
                </div>
                <p className="font-sans text-[16px] text-text-secondary leading-relaxed">
                  To stand as the definitive benchmark for institutional procurement in the region, forging unbreakable strategic alliances through absolute transparency, zero-defect execution, and uncompromising ethical standards.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Row: The Difference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-surface-border shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FFF8F5] flex items-center justify-center text-accent-primary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-medium text-xl text-text-primary">Global Reach, Local Expertise</h3>
                </div>
                <p className="font-sans text-text-secondary leading-relaxed text-[15px]">
                  We synthesize an elite network of tier-one global manufacturers with granular, on-the-ground mastery of Nepal&apos;s regulatory frameworks, customs clearance protocols, and last-mile logistics.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-surface-border shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FFF8F5] flex items-center justify-center text-accent-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-medium text-xl text-text-primary">Zero-Risk Compliance</h3>
                </div>
                <p className="font-sans text-text-secondary leading-relaxed text-[15px]">
                  Our rigorous compliance infrastructure guarantees that every procurement cycle strictly adheres to GoN mandates and international trade laws, entirely insulating our partners from operational and financial liabilities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-surface-border shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FFF8F5] flex items-center justify-center text-accent-primary">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-medium text-xl text-text-primary">Financial Resilience</h3>
                </div>
                <p className="font-sans text-text-secondary leading-relaxed text-[15px]">
                  Backed by robust institutional capital and sophisticated financial structuring, we possess the capacity to underwrite and execute massive, multi-year framework agreements without fiscal interruption.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. CORE STRENGTHS & STATS */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <h2 className="font-sans font-medium text-4xl text-text-primary tracking-tight">
                Our Core Strengths
              </h2>
              <p className="font-sans text-[16px] text-text-secondary leading-relaxed">
                Our operational superiority is anchored by direct strategic partnerships with vetted global manufacturers, transparent procurement architectures, and flawlessly documented delivery protocols. From initial feasibility analysis to final on-site handover, we guarantee frictionless, audit-ready execution at every phase.
              </p>
              <ul className="flex flex-col gap-4 mt-4">
                {[
                  "Strategic Global Sourcing",
                  "Certified Quality Products",
                  "Industry-Tailored Supply",
                  "Trusted by Gov & B2B",
                  "Audit-Ready & Fully Documented"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-sans text-text-primary font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button variant="primary" asChild>
                  <Link href="/contact">Partner With Us <ArrowRight className="w-4 h-4 ml-2"/></Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "40+", label: "Govt Tenders Fulfilled" },
              { val: "3+", label: "Years of Experience" },
              { val: "50+", label: "Product Catalogues" },
              { val: "100%", label: "On-Time Delivery" }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="bg-[#FAFAFA] border border-surface-border rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-all min-h-[140px]">
                  <div className="text-4xl md:text-5xl font-medium font-sans text-text-primary mb-2">
                    {stat.val.replace(/(\+)|(%)*/g, "")}
                    <span className="text-accent-primary">
                      {stat.val.includes("+") ? "+" : stat.val.includes("%") ? "%" : ""}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-text-secondary leading-snug">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container flex flex-col items-center gap-6">
          <ScrollReveal delay={0.1}>
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] border border-surface-border flex items-center justify-center text-accent-primary mb-2 shadow-sm mx-auto">
              <Award className="w-7 h-7" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-sans font-medium text-4xl text-text-primary max-w-2xl tracking-tight">
              Partner with the industry leader.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-sans text-[18px] text-text-secondary mb-4 max-w-xl">
              Let us manage the complexities of your supply chain so you can focus on what matters most.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Button variant="primary" size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">Start a Conversation <ArrowRight className="w-4 h-4 ml-2"/></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
