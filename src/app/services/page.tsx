import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Globe2, ArrowLeftRight, Shield, PackageSearch, Truck, FileCheck2, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    title: "General Trading",
    icon: Globe2,
    img: "/images/generaltrading.jpeg",
    desc: "Multi-sector trading of certified products across industrial, safety, infrastructure, healthcare, and consumer categories through verified global suppliers.",
    sub: ["Industrial Equipment", "Automobiles and Accessories", "Healthcare Sectors", "Infrastructure Supplies"],
    clients: "B2B Enterprises, Public Organizations, Wholesale Chains"
  },
  {
    title: "Import & Export",
    icon: ArrowLeftRight,
    img: "/images/service_import_export_new.jpg",
    desc: "End-to-end import and export operations in Nepal, covering sourcing, customs coordination, regulatory compliance, and cross-border trade facilitation.",
    sub: ["Customs Clearance", "Regulatory Compliance", "Cross-Border Logistics", "Letter of Credit Handling"],
    clients: "Manufacturing Plants, Distributors, Large Scale Wholesalers"
  },
  {
    title: "Government Supply",
    icon: Shield,
    img: "/images/government.png",
    contain: true,
    desc: "Specialized supply solutions for government departments, defense, and public institutions, aligned with tender requirements and compliance standards.",
    sub: ["Defense & Security Gear", "Public Health Supplies", "Infrastructure Materials", "Tender-Specific Procurement"],
    clients: "Government of Nepal, Health Care Department, Department of Roads"
  },
  {
    title: "Product Sourcing",
    icon: PackageSearch,
    img: "/images/service_sourcing_new.jpg",
    desc: "Strategic sourcing from authorized OEMs and manufacturers, ensuring quality assurance, competitive pricing, and consistent supply.",
    sub: ["OEM Verification", "Quality Assurance", "Volume Procurement", "Supplier Audits"],
    clients: "Industrial Projects, Corporate Hubs, Medical Facilities"
  },
  {
    title: "Logistics & Distribution",
    icon: Truck,
    img: "/images/service_logistics_new.jpg",
    desc: "Efficient logistics management including freight coordination, warehousing, and last-mile distribution with reliable delivery timelines.",
    sub: ["Freight Forwarding", "Warehousing Solutions", "Pan-Nepal Distribution", "Cold Chain Logistics"],
    clients: "Wholesalers, E-commerce Platforms, Regional Distributors"
  },
  {
    title: "Compliance & Documentation",
    icon: FileCheck2,
    img: "/images/service_compliance_new.jpg",
    desc: "Complete trade documentation, certifications, and regulatory approvals for government and institutional procurement.",
    sub: ["ISO/CE Certification Handling", "Tax & Duty Clearance", "Audit-Ready Documentation", "Trade Approvals"],
    clients: "Government Contractors, B2B Importers, NGOs"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* HERO */}
      <section className="relative pt-[calc(72px+6rem)] pb-24 lg:pt-[calc(72px+8rem)] lg:pb-32 text-center overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5] to-[#FAFAFA]">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>
        
        <div className="container relative z-10">
          <h1 className="font-sans font-medium text-5xl md:text-6xl leading-[1.05] tracking-tight text-text-primary max-w-4xl mx-auto mb-6">
            End-to-end supply chain solutions <span className="text-accent-primary">for Nepal.</span>
          </h1>
          <p className="font-sans text-[18px] text-text-secondary leading-relaxed max-w-2xl mx-auto">
            One partner. Fifty product categories. Zero procurement headaches.
          </p>
        </div>
      </section>

      {/* SERVICES LISTING */}
      <section className="py-24 bg-[#FAFAFA] flex flex-col gap-24">
        {SERVICES.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ScrollReveal key={idx} delay={0.1}>
              <div className="container">
                <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* Text Content */}
                  <div className="w-full lg:w-[55%] flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-surface-border shadow-sm flex items-center justify-center text-accent-primary">
                        <srv.icon size={32} />
                      </div>
                      <h2 className="font-sans font-medium text-4xl md:text-5xl leading-tight tracking-tight text-text-primary">
                        {srv.title.split(' ').map((word, i, arr) => 
                          i === arr.length - 1 ? <span key={i} className="text-accent-primary">{word}</span> : word + ' '
                        )}
                      </h2>
                    </div>
                    <p className="font-sans text-[17px] text-text-secondary leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {srv.sub.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                          <span className="font-sans text-[15px] text-text-primary">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white border border-surface-border p-4 rounded-xl flex flex-col gap-1 mb-6 shadow-sm">
                      <span className="font-sans font-medium text-[13px] text-text-tertiary">Compatible Clients</span>
                      <span className="font-sans text-[15px] text-text-primary font-medium">{srv.clients}</span>
                    </div>

                    <Button variant="primary" className="self-start rounded-full" asChild>
                      <Link href="/quote">Request a quote</Link>
                    </Button>
                  </div>

                  {/* Actual Image */}
                  <div className={`w-full lg:w-[40%] relative group border border-surface-border rounded-[2rem] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] ${(srv as any).contain ? 'bg-transparent' : 'aspect-video lg:aspect-[4/3] bg-[#111111]'}`}>
                    <div className={`relative w-full rounded-[1rem] overflow-hidden ${(srv as any).contain ? '' : 'h-full'}`}>
                      {(srv as any).contain ? (
                        <Image src={srv.img} alt={srv.title} width={1200} height={800} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <>
                          <Image src={srv.img} alt={srv.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>
    </div>
  );
}
