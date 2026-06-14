"use client";

import React from "react";
import { Shield, FileText, CheckCircle2, Award, Landmark } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CERTIFICATIONS = [
  {
    title: "Company Registration Certificate",
    icon: Landmark,
    number: "REG-001-2012-NPL",
    issuedBy: "Office of the Company Registrar, Nepal",
    issueDate: "15 Oct 2012",
    desc: "Official incorporation under the Companies Act of Nepal."
  },
  {
    title: "PAN / VAT Registration",
    icon: FileText,
    number: "VAT-XXXXXXXXX",
    issuedBy: "Inland Revenue Department, Nepal",
    issueDate: "20 Oct 2012",
    desc: "Authorized for national tax compliance and commercial billing."
  },
  {
    title: "PPMO Registered Supplier",
    icon: Shield,
    number: "PPMO-SUP-4099",
    issuedBy: "Public Procurement Monitoring Office",
    issueDate: "05 Jan 2015",
    desc: "Cleared and certified for all Government of Nepal (GoN) tender biddings."
  },
  {
    title: "ISO-Aligned Quality Process",
    icon: Award,
    number: "ISO-9001-ALIGN",
    issuedBy: "Internal Quality Board",
    issueDate: "Annual Renewal",
    desc: "Operating strictly under international quality management systems."
  },
  {
    title: "OEM Authorized Distributor",
    icon: CheckCircle2,
    number: "AUTH-2025-GLOBAL",
    issuedBy: "Partner Brands (Multiple)",
    issueDate: "Valid through 2025",
    desc: "Exclusive distribution rights for tactical and IT hardware brands."
  }
];

export default function CertificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO */}
      <section className="text-center relative overflow-hidden pt-[calc(72px+4rem)] pb-16 md:pt-[calc(72px+6rem)] md:pb-24">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10">
          <ScrollReveal delay={0.05}>
            <span className="font-sans font-medium text-[11px] uppercase tracking-[0.14em] text-accent-primary mb-4 block">COMPLIANCE</span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-sans font-medium text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl mx-auto mb-6">
              Verified. Compliant. Accountable.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-sans text-[18px] text-text-secondary max-w-2xl mx-auto">
              Siddhi Binayak Overseas Pvt. Ltd. Nepal operates with total transparency, fully certified to supply the highest levels of government and defense in Nepal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CERTIFICATIONS GRID */}
      <section className="py-24 bg-[#FAFAFA] flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-white border border-surface-border rounded-2xl p-8 flex flex-col sm:flex-row gap-8 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-[#d1d1d1] transition-all duration-300 h-full">
                  {/* Logo Placeholder */}
                  <div className="w-20 h-20 shrink-0 bg-[#FAFAFA] rounded-xl border border-surface-border flex items-center justify-center text-accent-primary">
                    <cert.icon size={40} />
                  </div>
                  
                  {/* Details */}
                  <div className="flex flex-col flex-1">
                    <h3 className="font-sans font-medium text-2xl mb-4 text-text-primary">{cert.title}</h3>
                    <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-surface-border">
                      <p className="font-mono text-[13px] text-accent-primary bg-[#FFF0EB] px-2 py-1 rounded w-fit">
                        {cert.number}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-sans font-medium text-[13px] text-text-tertiary">Issuing Authority</span>
                        <span className="font-sans text-[15px] font-medium text-text-secondary">{cert.issuedBy}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-sans font-medium text-[13px] text-text-tertiary">Issue Date</span>
                        <span className="font-sans text-[15px] font-medium text-text-secondary">{cert.issueDate}</span>
                      </div>
                    </div>
                    <p className="font-sans text-[15px] text-text-tertiary italic">
                      {cert.desc}
                    </p>
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
