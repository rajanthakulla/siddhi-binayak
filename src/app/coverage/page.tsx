"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Globe2, Truck, ShieldCheck, ArrowRight, Building, Flag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CoveragePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-[calc(72px+6rem)] pb-8 md:pt-[calc(72px+8rem)] md:pb-10">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-white">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10 max-w-4xl text-center flex flex-col items-center gap-6">
          <ScrollReveal delay={0.05}>
            <Badge variant="default" className="w-fit">OUR NETWORK</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-sans font-medium text-5xl md:text-6xl text-text-primary tracking-tight leading-[1.1]">
              Global Sourcing.<br/>
              <span className="text-accent-primary">Local Delivery.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-sans text-[18px] md:text-[20px] text-text-secondary leading-relaxed max-w-2xl mt-2">
              From our headquarters in Kathmandu, our logistics and procurement network spans across all 7 provinces of Nepal and connects directly with manufacturing hubs globally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="primary" asChild className="rounded-full px-8 h-14 text-[16px] bg-[#111111] hover:bg-black transition-colors">
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button variant="secondary" asChild className="rounded-full px-8 h-14 text-[16px] border-surface-border hover:bg-surface-border/50 transition-colors bg-white">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE THREE PILLARS */}
      <section className="pt-4 pb-20 bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe2 className="w-7 h-7" />,
              title: "Global Sourcing",
              desc: "We maintain active vendor networks and strategic partnerships across Europe, North America, and key Asian manufacturing hubs to ensure we can source any requirement directly from verified OEMs."
            },
            {
              icon: <MapPin className="w-7 h-7" />,
              title: "Pan-Nepal Network",
              desc: "Headquartered in Kathmandu, we possess the logistical capability to deliver vital supplies to all 77 districts of Nepal, including remote areas, high-altitude outposts, and major urban centers."
            },
            {
              icon: <Truck className="w-7 h-7" />,
              title: "Last-Mile Logistics",
              desc: "We partner with premier freight and local transport agencies to ensure that your supplies clear customs efficiently and reach your specific warehouse or facility perfectly on time."
            }
          ].map((pillar, i) => (
            <ScrollReveal key={i} delay={0.1 * i} className="h-full">
              <div className="p-10 bg-[#FAFAFA] border border-surface-border rounded-3xl flex flex-col items-start gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF8F5] flex items-center justify-center text-accent-primary shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-sans font-medium text-2xl text-text-primary mb-3">{pillar.title}</h3>
                  <p className="font-sans text-[16px] text-text-secondary leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. LOGISTICS & CUSTOMS DEEP DIVE */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="bg-[#111111] text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-8">
              <ScrollReveal delay={0.1}>
                <div>
                  <Badge variant="default" className="w-fit mb-4 bg-white/10 text-white hover:bg-white/20 border-none">SUPPLY CHAIN CAPABILITIES</Badge>
                  <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl text-white leading-tight mb-6">
                    End-to-End <br/><span className="text-accent-primary">Import & Distribution</span>
                  </h2>
                  <p className="font-sans text-[18px] text-gray-400 leading-relaxed">
                    Importing specialized equipment requires deep knowledge of international trade laws, transit routes, and local taxation. We handle the entire lifecycle so our clients don't have to worry about delays or compliance failures.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <ScrollReveal delay={0.2} className="h-full">
                  <div className="flex flex-col gap-3 h-full">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-primary mb-2 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="font-sans font-medium text-[18px] text-white">Customs Clearance</h4>
                    <p className="font-sans text-[15px] text-gray-400 leading-relaxed">
                      Expedited clearing at major border checkpoints and Tribhuvan International Airport (TIA).
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3} className="h-full">
                  <div className="flex flex-col gap-3 h-full">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-primary mb-2 shrink-0">
                      <Flag className="w-6 h-6" />
                    </div>
                    <h4 className="font-sans font-medium text-[18px] text-white">PPMO Compliance</h4>
                    <p className="font-sans text-[15px] text-gray-400 leading-relaxed">
                      Strict adherence to government regulations and public procurement guidelines.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal delay={0.25} className="h-full">
              <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-white/10 h-full">
                <h3 className="font-sans font-medium text-2xl text-white mb-6">Our International Reach</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "North American Defense & Tech OEMs",
                    "European Industrial Manufacturers",
                    "Asian Electronics & Healthcare Hubs",
                    "Global Aviation Parts Distributors",
                    "International Heavy Machinery Suppliers"
                  ].map((item, idx) => (
                    <ScrollReveal key={idx} delay={0.05 * idx + 0.3}>
                      <li className="flex items-center gap-4 bg-[#222222] px-6 py-4 rounded-full border border-white/5 shadow-[0_10px_30px_rgba(10,10,10,0.8)] hover:bg-[#2A2A2A] transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" />
                        <span className="font-sans text-gray-300 text-[15px]">{item}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. DOMESTIC COVERAGE */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container flex flex-col items-center text-center gap-6">
          <ScrollReveal delay={0.1}>
            <Badge variant="default" className="w-fit mb-2">LOCAL PRESENCE</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl text-text-primary leading-tight max-w-2xl">
              Serving All <span className="text-accent-primary">7 Provinces</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-sans text-[18px] text-text-secondary leading-relaxed max-w-3xl">
              Whether it's a metropolitan hospital in Bagmati Province, a defense outpost in the high Himalayas, or an infrastructure project in Lumbini, our logistics network ensures your supplies arrive exactly when and where they are needed.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} className="w-full max-w-5xl">
            <div className="w-full mt-12 relative rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-surface-border h-[300px] md:h-[400px] lg:h-[480px]">
              <img src="/images/nepal_map_hd_labeled.png" alt="Nepal Supply Chain Network Map" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-white text-center border-t border-surface-border">
        <div className="container flex flex-col items-center gap-6">
          <ScrollReveal delay={0.1}>
            <h2 className="font-sans font-medium text-3xl md:text-4xl text-text-primary tracking-tight">
              Ready to secure your supply chain?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-[18px] text-text-secondary max-w-2xl leading-relaxed">
              Partner with Siddhi Binayak Overseas Pvt. Ltd. Nepal for reliable, compliant, and efficient procurement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="primary" asChild className="mt-4 bg-accent-primary hover:bg-[#E04B18] text-white rounded-full px-8 h-14 text-[16px] shadow-[0_8px_20px_rgb(255,107,53,0.3)] hover:shadow-[0_8px_25px_rgb(255,107,53,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
