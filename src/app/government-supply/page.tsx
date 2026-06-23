"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Building, FileCheck2, ArrowRight, Search, Users, Target, Activity, HeartPulse, HardHat, Siren, Briefcase } from "lucide-react";

export default function GovernmentSupplyPage() {
  return (
    <div className="flex flex-col bg-white">
      <section className="relative overflow-hidden pt-[calc(72px+6rem)] pb-12 md:pt-[calc(72px+8rem)] md:pb-16">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-white">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center gap-6">
          <ScrollReveal delay={0.1}>
            <h1 className="font-sans font-medium text-5xl md:text-6xl leading-[1.05] tracking-tight text-text-primary max-w-4xl">
              Trusted Partner for <span className="text-accent-primary">Government Procurement</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="flex flex-col gap-4 font-sans text-[18px] text-text-secondary leading-relaxed max-w-3xl">
              <p>
                Securing critical supplies for state institutions requires precision, strict compliance, and a robust global network. At Siddhi Binayak Overseas Pvt. Ltd. Nepal, we engineer end-to-end procurement solutions that seamlessly connect international manufacturing powerhouses with the specific demands of Nepal’s public sector.
              </p>
              <p>
                As an authorized partner to government bodies and ministerial departments, we manage complex technical tenders from inception to delivery. By enforcing uncompromising quality controls and rigorous regulatory adherence, we ensure that every milestone is executed flawlessly, on time, and within budget.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col text-center items-center mb-16">
            <ScrollReveal delay={0.1}>
              <h2 className="font-sans font-medium text-4xl text-text-primary mb-4">Our Approach to Execution</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-[16px] text-text-secondary max-w-2xl">
                We operate as an extension of your procurement division. Our methodology integrates deep technical analysis with strategic global sourcing, ensuring absolute compliance with e-GP mandates and delivering mission-critical supplies with uncompromising reliability.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-5 h-5" />,
                title: "Pre-Bid Feasibility",
                desc: "In-depth pre-bid requirement analysis and sourcing feasibility to ensure realistic timelines and budgeting for public projects."
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Supplier Coordination",
                desc: "Seamless multi-supplier coordination for large or mixed procurements, handling negotiations and logistics under one roof."
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Specification Alignment",
                desc: "Rigorous specification alignment and commercial evaluation support to meet exact GoN tender requirements."
              },
              {
                icon: <Activity className="w-5 h-5" />,
                title: "Execution Tracking",
                desc: "Structured execution tracking and progress reporting. Schedule reliability remains central to our execution model."
              },
              {
                icon: <Building className="w-5 h-5" />,
                title: "PPMO Compliance",
                desc: "Fully registered and compliant with the Public Procurement Monitoring Office (PPMO) guidelines and e-GP platform."
              },
              {
                icon: <FileCheck2 className="w-5 h-5" />,
                title: "Audit-Ready Delivery",
                desc: "Every supply chain execution comes with comprehensive documentation, ensuring full transparency for government audits."
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="p-8 border border-surface-border rounded-2xl bg-[#FAFAFA] flex flex-col gap-4 group hover:border-[#d1d1d1] hover:shadow-sm transition-all h-full">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-surface-border text-accent-primary mb-2 shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-sans font-medium text-xl text-text-primary">{item.title}</h3>
                  <p className="font-sans text-text-secondary leading-relaxed text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS WE SERVE */}
      <section className="py-20 bg-[#FAFAFA] border-t border-surface-border">
        <div className="container">
          <div className="flex flex-col text-center items-center mb-16">
            <ScrollReveal delay={0.1}>
              <h2 className="font-sans font-medium text-4xl text-text-primary mb-4">Sectors We Serve</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-[16px] text-text-secondary max-w-2xl">
                Our experience spans framework agreements, bulk procurement programs, and project-based supply across critical sectors in Nepal.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Defense, Security & Public Safety",
                desc: "Tactical gear, specialized equipment, and secure communications."
              },
              {
                icon: <Siren className="w-7 h-7" />,
                title: "Emergency Response & Rescue",
                desc: "Disaster relief supplies, rescue tools, and field equipment."
              },
              {
                icon: <HardHat className="w-7 h-7" />,
                title: "Industrial & Infrastructure",
                desc: "Heavy machinery, construction materials, and energy grid components."
              },
              {
                icon: <HeartPulse className="w-7 h-7" />,
                title: "Healthcare & Logistics",
                desc: "Medical devices, hospital supplies, and cold-chain logistics."
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-white border border-surface-border p-6 rounded-2xl flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:-translate-y-1 transition-transform h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#FFF8F5] flex items-center justify-center text-accent-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-lg text-text-primary">{item.title}</h4>
                    <p className="font-sans text-sm text-text-secondary mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-surface-border text-center">
        <div className="container flex flex-col items-center gap-6">
          <ScrollReveal delay={0.1}>
            <div className="w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center text-white mb-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] mx-auto">
              <Briefcase className="w-7 h-7" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-sans font-medium text-4xl text-text-primary max-w-2xl">
              Ready to streamline your next public procurement project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-sans text-[18px] text-text-secondary mb-4 max-w-xl">
              <span className="font-medium text-accent-primary">Compliance Assured:</span> All our supplies meet relevant Nepal government procurement standards and strict documentation requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Button variant="primary" size="lg" className="rounded-full px-8" asChild>
              <Link href="/quote">Request Supply Tender <ArrowRight className="w-4 h-4 ml-2"/></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
