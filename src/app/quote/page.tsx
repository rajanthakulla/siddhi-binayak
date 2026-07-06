"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, UploadCloud } from "lucide-react";
import { submitQuoteForm } from "../actions";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CATEGORIES = [
  "Military & Defense",
  "Safety & Security",
  "IT & Electronics",
  "Construction",
  "Medical",
  "Office",
  "Other"
];

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitQuoteForm(formData, selectedCategories);
    
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setSelectedCategories([]);
      setFileName(null);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-[calc(72px+6rem)] pb-12 md:pt-[calc(72px+8rem)] md:pb-16 text-center">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div className="container relative z-20 flex flex-col items-center">
          <ScrollReveal delay={0.05}>
            <Badge variant="default" className="mb-6">GET STARTED</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-sans font-medium tracking-tight text-5xl md:text-6xl lg:text-[72px] leading-[1.05] text-text-primary mb-6">
              Request a supply<br/>
              <span className="text-accent-primary">quotation.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-sans text-[18px] md:text-[20px] text-text-secondary max-w-2xl">
              Fill in your requirements. Our procurement team will review your specifications and respond with a custom quote within 24 business hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-[#FAFAFA] flex-1">
        <div className="container max-w-[760px]">
          
          {status === "success" ? (
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-surface-border shadow-sm rounded-2xl p-12 flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="w-20 h-20 text-success" />
                <h3 className="font-sans font-medium text-3xl tracking-tight">Your RFQ has been received.</h3>
                <p className="font-sans text-text-secondary text-[17px]">Our team will review your specifications and contact you within 24 business hours.</p>
                <Button variant="secondary" className="mt-4 rounded-full" onClick={() => setStatus("idle")}>Submit another request</Button>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-surface-border rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  
                  {/* Organization Details */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-sans font-medium text-2xl tracking-tight border-b border-surface-border pb-3">1. Organization Details</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="organization">Organization Name *</label>
                        <input required type="text" id="organization" name="organization" placeholder="e.g. Acme Corp" className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="contactPerson">Contact Person *</label>
                        <input required type="text" id="contactPerson" name="contactPerson" placeholder="Full Name" className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="email">Email Address *</label>
                        <input required type="email" id="email" name="email" placeholder="mail@organization.com" className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="phone">Phone Number *</label>
                        <input required type="tel" id="phone" name="phone" placeholder="+977 9855069501" className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                    </div>
                  </div>

                  {/* Supply Requirements */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-sans font-medium text-2xl tracking-tight border-b border-surface-border pb-3">2. Supply Requirements</h3>
                    
                    <div className="flex flex-col gap-3 mt-2">
                      <label className="font-sans text-[14px] font-medium text-text-secondary">Product Categories *</label>
                      <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map(cat => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => toggleCategory(cat)}
                            className={cn(
                              "px-4 py-2 rounded-full font-sans text-[14px] font-medium transition-all duration-300 border",
                              selectedCategories.includes(cat)
                                ? "bg-[#111111] text-white border-transparent shadow-[0_4px_14px_rgba(0,0,0,0.1)]" 
                                : "bg-white text-text-secondary border-surface-border hover:border-[#d1d1d1] hover:text-text-primary hover:bg-[#FAFAFA]"
                            )}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="categories" value={JSON.stringify(selectedCategories)} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="itemDescription">Item Description & Specifications *</label>
                      <textarea required id="itemDescription" name="itemDescription" rows={4} placeholder="Describe the items, quantities, and specifications..." className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary resize-y" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="deliveryLocation">Delivery Location (Nepal) *</label>
                        <input required type="text" id="deliveryLocation" name="deliveryLocation" placeholder="City or District" className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="requiredByDate">Required By Date</label>
                        <input type="date" id="requiredByDate" name="requiredByDate" className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white transition-all duration-300 font-sans placeholder:text-text-tertiary" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[14px] font-medium text-text-secondary ml-2" htmlFor="budgetRange">Estimated Budget Range (Optional)</label>
                      <select id="budgetRange" name="budgetRange" className="bg-[#FAFAFA] border border-surface-border text-text-primary rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-primary focus:bg-white appearance-none cursor-pointer transition-all duration-300 font-sans">
                        <option value="">Select a range...</option>
                        <option value="Under NPR 5L">Under NPR 5L</option>
                        <option value="5L - 25L">NPR 5L - 25L</option>
                        <option value="25L - 1Cr">NPR 25L - 1Cr</option>
                        <option value="1Cr+">NPR 1Cr+</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-[14px] font-medium text-text-secondary">Attach Tender Document (PDF/DOC)</label>
                      <div className="relative border-2 border-dashed border-surface-border rounded-xl p-8 text-center hover:bg-[#FAFAFA] hover:border-[#d1d1d1] transition-colors cursor-pointer group">
                        <input type="file" id="document" name="document" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                        <div className="flex flex-col items-center gap-3">
                          <UploadCloud className="w-10 h-10 text-[#d1d1d1] group-hover:text-accent-primary transition-colors" />
                          <span className="font-sans text-[15px] text-text-secondary">
                            {fileName ? <span className="text-accent-primary font-medium">{fileName}</span> : "Drag & drop your file here, or click to browse"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="text-warning text-[14px] font-sans font-medium bg-[#FFF0EB] p-4 rounded-xl">There was an error submitting your request. Please try again or contact us directly.</div>
                  )}

                  <Button variant="primary" size="lg" className="w-full h-14 text-[16px] font-medium rounded-full mt-4 bg-accent-primary hover:bg-[#E04B18] text-white shadow-[0_8px_20px_rgb(255,107,53,0.2)] hover:shadow-[0_8px_25px_rgb(255,107,53,0.4)] transition-all duration-300 transform hover:-translate-y-1" disabled={status === "submitting" || selectedCategories.length === 0}>
                    {status === "submitting" ? "Submitting Request..." : "Submit quotation request"}
                  </Button>
                  
                </form>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
