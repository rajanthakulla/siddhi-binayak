"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FAQS = [
  {
    question: "Do you support public sector procurement?",
    answer: "Yes, we are fully equipped to support public sector procurement. We comply with all Public Procurement Monitoring Office (PPMO) guidelines and handle the entire documentation and bidding process for government entities."
  },
  {
    question: "Do you source products directly from OEMs?",
    answer: "Absolutely. We have established direct relationships with global Original Equipment Manufacturers (OEMs), ensuring that you receive authentic products with full warranties and comprehensive after-sales support."
  },
  {
    question: "What types of products do you supply?",
    answer: "We supply a diverse range of products including defense and security gear, aviation equipment, heavy machinery, medical infrastructure, and custom IT equipment tailored to institutional requirements."
  },
  {
    question: "How can we submit an RFQ or tender inquiry?",
    answer: "You can submit your Request for Quotation (RFQ) directly through our Contact page, or email our procurement team with your specifications. We will review your requirements and provide a detailed sourcing strategy."
  },
  {
    question: "Do you manage international shipping and trade documentation?",
    answer: "Yes, we provide end-to-end logistics solutions. This includes international freight forwarding, customs clearance, transit insurance, and final inland delivery directly to your facility in Nepal."
  },
  {
    question: "What quality and compliance standards do your supplies meet?",
    answer: "All our imported products meet strict international quality certifications (such as ISO, CE, FDA where applicable) and fully adhere to Nepal's national import compliance and quality control standards."
  }
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col bg-[#FAFAFA]">
      <section className="relative lg:min-h-[80vh] overflow-hidden pt-[calc(72px+4rem)] pb-16 md:pt-[calc(72px+6rem)] md:pb-24">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <ScrollReveal delay={0.05}>
                <Badge variant="default" className="w-fit">FAQ</Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <h1 className="font-sans font-medium tracking-tight text-5xl md:text-6xl text-text-primary leading-[1.05]">
                  Got questions?<br/>We&apos;ve <span className="text-accent-primary">got answers.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="font-sans text-[18px] text-text-secondary leading-relaxed max-w-md">
                  Explore our Frequently Asked Questions for short answers that provide clarity about our services.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <div className="mt-2">
                  <Button variant="primary" className="bg-[#111111] hover:bg-accent-primary transition-colors duration-300 text-white rounded-full px-8">Contact Us</Button>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="flex flex-col gap-4 mt-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <ScrollReveal key={idx} delay={0.05 * idx + 0.2}>
                    <div 
                      className="bg-white border border-surface-border rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button 
                        className="w-full text-left px-6 py-5 flex items-center justify-between font-sans font-medium text-text-primary text-[17px]"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                      >
                        {faq.question}
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-text-tertiary shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-text-tertiary shrink-0" />
                        )}
                      </button>
                      <div 
                        className={cn(
                          "px-6 text-text-secondary font-sans text-[16px] leading-relaxed transition-all duration-300 overflow-hidden",
                          isOpen ? "pb-5 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={0.3} className="hidden lg:block h-full">
            <div className="relative bg-[#111111] rounded-3xl overflow-hidden min-h-[600px] border border-surface-border group shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
               <Image src="/images/military_defense_faq_1781238662776.png" alt="Military Defense Supply" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </ScrollReveal>
          
        </div>
      </section>
    </div>
  );
}
