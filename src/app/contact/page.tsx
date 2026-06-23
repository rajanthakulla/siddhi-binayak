"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { submitContactForm } from "../actions";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      
      {/* HERO */}
      <section className="relative overflow-hidden pt-[calc(72px+6rem)] pb-12 md:pt-[calc(72px+8rem)] md:pb-16 text-center">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
        </div>

        <div className="container relative z-10 flex flex-col items-center">
          <ScrollReveal delay={0.05}>
            <Badge variant="default" className="mb-6">CONTACT US</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-sans font-medium tracking-tight text-5xl md:text-6xl lg:text-[72px] leading-[1.05] text-text-primary mb-6">
              Get in touch with<br/>
              <span className="text-accent-primary">Siddhi Binayak Overseas Pvt. Ltd. Nepal</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-sans text-[18px] md:text-[20px] text-text-secondary max-w-2xl">
              Whether you are looking for a supply partnership, have a tender inquiry, or need support with an ongoing order, our team is here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="pb-32 relative z-10">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            
            {/* LEFT COLUMN - CONTACT INFO */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <ScrollReveal delay={0.1}>
                <div className="bg-[#111111] text-white p-10 rounded-[2rem] shadow-xl">
                  <h3 className="font-sans font-medium text-2xl mb-8">Contact Information</h3>
                  
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-primary transition-colors duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        <h4 className="font-sans font-medium text-[16px] text-white">Direct Line</h4>
                        <p className="font-sans text-[15px] text-gray-400">
                          +977 1-4XXXXXX
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-primary transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        <h4 className="font-sans font-medium text-[16px] text-white">Email Address</h4>
                        <p className="font-sans text-[15px] text-gray-400">
                          siddhibinayakoverseas@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-primary transition-colors duration-300">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1 mt-1">
                        <h4 className="font-sans font-medium text-[16px] text-white">Business Information</h4>
                        <p className="font-sans text-[15px] text-gray-400">
                          Mahalaxmi Municipality- 02 Lalitpur, Nepal<br/>
                          VAT No: 619826868
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* LOCATION MAP */}
              <ScrollReveal delay={0.2}>
                <a 
                  href="https://maps.google.com/?q=Mahalaxmi+Municipality-02,Lalitpur,Nepal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative block w-full h-[280px] rounded-[2rem] overflow-hidden shadow-lg border border-surface-border transition-transform hover:-translate-y-1"
                >
                  <iframe 
                    src="https://maps.google.com/maps?q=Mahalaxmi+Municipality-02,Lalitpur,Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-5 py-4 rounded-xl flex items-center justify-between border border-surface-border shadow-sm transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-sans font-medium text-[15px] text-text-primary">Head Office</h4>
                      <p className="font-sans text-[13px] text-text-secondary">Lalitpur, Nepal</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-[0_4px_12px_rgb(255,107,53,0.3)]">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.15}>
                <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-border">
                  <h3 className="font-sans font-medium text-3xl text-text-primary mb-8 tracking-tight">Send a Message</h3>
                  
                  {status === "success" ? (
                    <div className="bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)] rounded-[24px] p-10 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in duration-300">
                      <CheckCircle2 className="w-16 h-16 text-success" />
                      <h3 className="font-sans font-medium text-2xl text-text-primary">Message Received</h3>
                      <p className="font-sans text-[16px] text-text-secondary leading-relaxed">Thank you for reaching out. A representative from our team will contact you within 1 business day.</p>
                      <Button variant="secondary" className="mt-6 rounded-full px-8 bg-white border border-surface-border shadow-sm" onClick={() => setStatus("idle")}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="firstName" className="font-sans text-[14px] font-medium text-text-secondary ml-2">First Name</label>
                          <input required type="text" id="firstName" name="firstName" placeholder="John" className="w-full bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="lastName" className="font-sans text-[14px] font-medium text-text-secondary ml-2">Last Name</label>
                          <input required type="text" id="lastName" name="lastName" placeholder="Doe" className="w-full bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-sans text-[14px] font-medium text-text-secondary ml-2">Email Address</label>
                        <input required type="email" id="email" name="email" placeholder="john@company.com" className="w-full bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-sans text-[14px] font-medium text-text-secondary ml-2">Phone Number</label>
                        <input required type="tel" id="phone" name="phone" placeholder="+977 98XXXXXXXX" className="w-full bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-sans text-[14px] font-medium text-text-secondary ml-2">Your Message</label>
                        <textarea required id="message" name="message" placeholder="How can we help you?" rows={5} className="w-full bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary resize-none" />
                      </div>

                      {status === "error" && (
                        <div className="text-warning text-[14px] font-sans font-medium bg-[#FFF0EB] p-4 rounded-xl">There was an error submitting your message. Please try again.</div>
                      )}

                      <Button variant="primary" className="w-full h-14 text-[16px] font-medium rounded-full mt-4 bg-accent-primary hover:bg-[#E04B18] text-white shadow-[0_8px_20px_rgb(255,107,53,0.2)] hover:shadow-[0_8px_25px_rgb(255,107,53,0.4)] transition-all duration-300 transform hover:-translate-y-1 group" disabled={status === "submitting"}>
                        <span className="flex items-center justify-center gap-2">
                          {status === "submitting" ? "Sending..." : "Send Message"}
                          {status !== "submitting" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </span>
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
