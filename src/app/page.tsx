"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroAbstractUI } from "@/components/ui/HeroAbstractUI";
import { PartnersMarquee } from "@/components/ui/PartnersMarquee";
import { CheckCircle2, Shield, Target, Clock, ArrowRight, Building, Globe2, FileCheck2, ArrowLeftRight, Truck, PackageSearch, MessageSquare, FileText, LifeBuoy, Wrench, Cpu, Plane, Zap, Hammer, ShoppingCart, ChevronDown, Hash, Square, Sun, Command, Asterisk, Snowflake, Search } from "lucide-react";

// Helper for count up animation
const useCountUp = (end: number, duration: number = 1500) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
};

const StatItem = ({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) => {
  const { count, setIsVisible } = useCountUp(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="flex flex-col items-center text-center gap-2 relative z-10"
    >
      <div className="font-sans font-medium text-4xl md:text-[40px] text-text-primary tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-sans font-medium text-[13px] text-text-secondary">
        {label}
      </div>
    </motion.div>
  );
};

const StatsCapsule = () => {
  return (
    <div className="relative w-full mx-auto">
      <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#FFD5C2] via-[#FF8A65] to-[#FFD5C2] rounded-[2.5rem] md:rounded-full blur-2xl opacity-20 pointer-events-none" />
      <div className="relative bg-white border border-surface-border rounded-[2.5rem] md:rounded-full shadow-sm py-8 px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        <StatItem label="Government Tenders Fulfilled" value={500} suffix="+" />
        <StatItem label="Years of Experience" value={12} suffix="+" />
        <StatItem label="Product Categories" value={50} suffix="+" />
        <StatItem label="On-Time Delivery" value={100} suffix="%" />
      </div>
    </div>
  );
};

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#FAFAFA] border border-surface-border rounded-2xl overflow-hidden transition-colors hover:border-[#FFD5C2]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-sans font-semibold text-[16px] text-text-primary pr-4">{q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-accent-primary text-white rotate-180' : 'bg-white border border-surface-border text-text-secondary'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 font-sans text-[15px] text-text-secondary leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
};

const InteractiveCTABanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="py-24 container">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="group relative rounded-[2rem] overflow-hidden bg-[#FF6A28] px-6 py-24 md:py-28 text-center flex flex-col items-center shadow-[0_20px_40px_-15px_rgba(255,106,40,0.3)]"
      >
        {/* Magic Mouse Glow Effect */}
        <div 
          className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
          style={{
            background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4), transparent 40%)"
          }}
        />
        
        {/* Base gradient layers for soft edge glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9663] via-transparent to-[#FF9663] opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF4500] to-transparent opacity-30 pointer-events-none"></div>

        {/* Vertical Aurora Streaks */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[15%] w-[10%] h-full bg-white blur-3xl transform skew-x-12 opacity-[0.35]"></div>
          <div className="absolute top-0 left-[40%] w-[8%] h-full bg-white blur-3xl transform -skew-x-6 opacity-25"></div>
          <div className="absolute top-0 right-[35%] w-[6%] h-full bg-white blur-3xl transform skew-x-6 opacity-[0.35]"></div>
          <div className="absolute top-0 right-[15%] w-[12%] h-full bg-white blur-3xl transform -skew-x-12 opacity-[0.25]"></div>
        </div>
        
        {/* Subtle noise/stars */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-[25%] w-1 h-1 bg-white rounded-full opacity-80 shadow-[0_0_8px_white]"></div>
          <div className="absolute top-16 left-[35%] w-[2px] h-[2px] bg-white rounded-full opacity-60"></div>
          <div className="absolute top-8 right-[30%] w-1 h-1 bg-white rounded-full opacity-90 shadow-[0_0_8px_white]"></div>
          <div className="absolute top-20 right-[15%] w-[2px] h-[2px] bg-white rounded-full opacity-50"></div>
          <div className="absolute top-28 left-[18%] w-[2px] h-[2px] bg-white rounded-full opacity-70"></div>
          <div className="absolute top-14 right-[40%] w-1 h-1 bg-white rounded-full opacity-60"></div>
        </div>
        
        {/* Glassy Corner Shapes */}
        <div className="absolute -top-16 -left-16 w-56 h-56 bg-gradient-to-br from-white/30 to-white/0 rounded-[3rem] backdrop-blur-sm rotate-12 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-16 w-64 h-64 bg-gradient-to-tr from-white/30 to-white/0 rounded-[4rem] backdrop-blur-sm -rotate-12 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-bl from-white/30 to-white/0 rounded-[4rem] backdrop-blur-sm -rotate-12 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-tl from-white/30 to-white/0 rounded-[3.5rem] backdrop-blur-sm rotate-12 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto pointer-events-none">
          <h2 className="font-sans font-medium text-4xl md:text-[56px] text-white leading-[1.1] tracking-tight mb-5">
            Ready to secure your<br/>supply chain?
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-white/90 mb-10 tracking-wide font-light">
            Get a comprehensive quote today — full compliance, nationwide delivery.
          </p>
          
          <Link href="/contact" className="pointer-events-auto">
            <Button size="lg" className="h-[52px] px-8 text-[15px] font-medium rounded-full bg-white text-[#111111] hover:bg-gray-50 hover:shadow-lg transition-all duration-300">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 2: HERO */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-[100px] overflow-hidden">
        {/* Qupe Gradient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#FFF8F5]">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
          <HeroAbstractUI />
          
          {/* Seamless vanishing gradient to white */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#FFF8F5]/50 to-white" />
        </div>
        
        <div className="container relative z-10 flex flex-col items-center text-center h-full max-w-4xl pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0, duration: 0.8, type: "spring", bounce: 0.3, damping: 20, stiffness: 100 }}
          >
            <Badge variant="default" className="mb-8 border border-[#FFD5C2]">SIDDHI BINAYAK OVERSEAS PVT. LTD. NEPAL</Badge>
          </motion.div>
          
          <h1 className="font-sans font-medium text-5xl md:text-6xl leading-[1.05] tracking-tight text-text-primary mb-6">
            <motion.span className="block" initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 }} animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }} transition={{ delay: 0.12, duration: 0.8, type: "spring", bounce: 0.3, damping: 20, stiffness: 100 }}>Empowering Global Trade</motion.span>
            <motion.span className="block" initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 }} animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }} transition={{ delay: 0.24, duration: 0.8, type: "spring", bounce: 0.3, damping: 20, stiffness: 100 }}>with <span className="text-accent-primary">Trusted Supply.</span></motion.span>
          </h1>
          
          <motion.p 
            className="font-sans text-[18px] text-text-secondary leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 }} animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }} transition={{ delay: 0.48, duration: 0.8, type: "spring", bounce: 0.3, damping: 20, stiffness: 100 }}
          >
            Streamlining your business by securing world-class suppliers, executing trade reliably, and providing cost-effective, high-quality sourcing solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 }} animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }} transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.3, damping: 20, stiffness: 100 }}
          >
            <Button variant="primary" size="lg" asChild><Link href="/quote">Request a quote</Link></Button>
            <Button variant="secondary" size="lg" asChild><Link href="/services">See how it works</Link></Button>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-12 mb-16"
            initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 }} animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }} transition={{ delay: 0.72, duration: 0.8, type: "spring", bounce: 0.3, damping: 20, stiffness: 100 }}
          >
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-secondary"><CheckCircle2 className="text-accent-primary w-4 h-4"/> Strategic Global Sourcing</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-secondary"><CheckCircle2 className="text-accent-primary w-4 h-4"/> Certified Quality Products</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-secondary"><CheckCircle2 className="text-accent-primary w-4 h-4"/> Industry-Tailored Supply</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-secondary"><CheckCircle2 className="text-accent-primary w-4 h-4"/> Trusted by Gov &amp; B2B</span>
          </motion.div>


        </div>
      </section>

      {/* SECTION 2: MARQUEE PARTNERS */}
      <PartnersMarquee />

      {/* SECTION 3: INTRODUCTION */}
      <section className="pt-24 pb-12 bg-white overflow-hidden">
        <div className="container flex flex-col items-center">
          <ScrollReveal delay={0.1} className="w-full flex flex-col items-center text-center mb-16">
            <h2 className="font-sans font-medium text-4xl md:text-5xl leading-[1.1] tracking-tight text-text-primary max-w-4xl">
              Welcome to <span className="text-accent-primary">Siddhi Binayak Overseas Pvt. Ltd. Nepal.</span>
            </h2>
          </ScrollReveal>
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 font-sans text-[17px] text-text-secondary leading-relaxed">
                  <p>
                    Siddhi Binayak Overseas Pvt. Ltd. Nepal is a premier Nepal-based trading and import/export company. We specialize in supplying the public sector, sourcing for B2B operations, and delivering multi-sector trade solutions. Driven by a commitment to quality, full compliance, and on-time delivery, we provide government agencies, public institutions, and businesses across Nepal with supply chains they can trust.
                  </p>
                  <p>
                    Our success is built on direct partnerships with verified manufacturers, transparent sourcing, and delivery processes that are always audit-ready. From the initial order to final handover, we ensure every step is smooth and fully documented. Our dedicated team works closely with you to understand your exact requirements and provide tailored solutions that drive operational excellence.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-surface-border text-accent-primary shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-sans font-medium text-[16px] text-text-primary">Public Sector &amp; Institutional Expertise</h3>
                    <p className="font-sans text-[14px] text-text-secondary leading-relaxed">We specialize in serving government bodies, defense sectors, and large institutions.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-surface-border text-accent-primary shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-sans font-medium text-[16px] text-text-primary">Certified &amp; Quality-Assured Supplies</h3>
                    <p className="font-sans text-[14px] text-text-secondary leading-relaxed">Every product we import meets strict international standards and local certifications.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-surface-border text-accent-primary shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-sans font-medium text-[16px] text-text-primary">Direct Manufacturer Alliances</h3>
                    <p className="font-sans text-[14px] text-text-secondary leading-relaxed">We source directly from original equipment manufacturers (OEMs) worldwide to guarantee authenticity.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-surface-border text-accent-primary shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <h3 className="font-sans font-medium text-[16px] text-text-primary">Complete Documentation &amp; Timely Delivery</h3>
                    <p className="font-sans text-[14px] text-text-secondary leading-relaxed">We handle end-to-end customs clearance and ensure your projects are delivered strictly on time.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="pt-16 pb-32 container overflow-hidden">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl leading-tight text-text-primary max-w-3xl mb-6">
              Our Core <span className="text-accent-primary">Services Include</span>
            </h2>
            <p className="font-sans text-[18px] text-text-secondary max-w-3xl">
              Our service model is designed to ensure compliance, reliability, and operational efficiency across every stage of the supply chain.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              icon: Globe2, 
              title: "General Trading", 
              desc: "Multi-sector trading of certified products across industrial, safety, infrastructure, healthcare, and consumer categories through verified global suppliers.",
              link: "/services"
            },
            { 
              icon: ArrowLeftRight, 
              title: "Import & Export", 
              desc: "End-to-end import and export operations in Nepal, covering sourcing, customs coordination, regulatory compliance, and cross-border trade facilitation.",
              link: "/services"
            },
            { 
              icon: Shield, 
              title: "Government Supply", 
              desc: "Specialized supply solutions for government departments, defense, and public institutions, aligned with tender requirements and compliance standards.",
              link: "/services"
            },
          ].map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <Card className="h-full flex flex-col group border-surface-border p-6 md:p-8">
                <div className="w-12 h-12 rounded-full border border-surface-border flex items-center justify-center text-accent-primary mb-6">
                  <srv.icon className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-medium text-xl text-text-primary mb-3">{srv.title}</h3>
                <p className="font-sans text-[16px] text-text-secondary leading-relaxed mb-6">{srv.desc}</p>
                
                <div className="mt-auto pt-4">
                  <Link href={srv.link} className="inline-flex items-center font-sans font-medium text-[15px] text-accent-primary hover:text-[#E04B18] transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-32 flex flex-col items-center text-center mb-12">
            <Badge variant="default" className="mb-6">What We Do</Badge>
            <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl leading-tight text-text-primary mb-6">
              What we <span className="text-accent-primary">do ?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: PackageSearch,
              title: "Product Sourcing",
              desc: "Strategic sourcing from authorized OEMs and manufacturers, ensuring quality assurance, competitive pricing, and consistent supply.",
              link: "/services"
            },
            {
              icon: Truck,
              title: "Logistics and Distribution",
              desc: "Efficient logistics management including freight coordination, warehousing, and last-mile distribution with reliable delivery timelines.",
              link: "/services"
            },
            {
              icon: FileCheck2,
              title: "Compliance & Documentation",
              desc: "Complete trade documentation, certifications, and regulatory approvals for government and institutional procurement.",
              link: "/services"
            }
          ].map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <Card className="h-full flex flex-col group border-surface-border p-6 md:p-8 bg-[#FAFAFA] hover:border-[#FFD5C2] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF6F3] to-[#FFE8DE] border border-[#FFD5C2]/50 flex items-center justify-center text-accent-primary mb-6 group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300">
                  <srv.icon className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-medium text-xl text-text-primary mb-3">{srv.title}</h3>
                <p className="font-sans text-[16px] text-text-secondary leading-relaxed mb-6">
                  {srv.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-border">
                  <Link href={srv.link} className="inline-flex items-center font-sans font-medium text-[15px] text-accent-primary hover:text-[#E04B18] transition-colors pt-4">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: STATS BAR */}
      <section className="py-4 md:py-6 container relative z-20">
        <StatsCapsule />
      </section>

      {/* SECTION 5.5: OUR PROCESS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center text-center gap-4 mb-20">
              <Badge variant="default" className="w-fit">OUR PROCESS</Badge>
              <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl leading-tight text-text-primary max-w-2xl mb-2">
                How Our <span className="text-accent-primary">Supply Process Works</span>
              </h2>
              <p className="font-sans text-[18px] text-text-secondary max-w-3xl">
                From initial inquiry to final delivery, we ensure a seamless procurement experience with transparent communication, compliant sourcing, and reliable logistics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {[
              { step: "01", icon: MessageSquare, title: "Share Requirements", desc: "Submit your specifications, quantities, and delivery timelines through our RFQ form." },
              { step: "02", icon: Search, title: "Check Availability", desc: "We evaluate the compatibility and availability of the required products across our network." },
              { step: "03", icon: FileText, title: "Submit Quotation", desc: "Provide a detailed product catalogue, necessary certifications, and a tailored quotation." },
              { step: "04", icon: Shield, title: "Compliant Sourcing", desc: "We source from verified OEMs ensuring all products meet required standards." },
              { step: "05", icon: Truck, title: "Delivery & Support", desc: "Scheduled delivery with complete documentation and after-sales support." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={0.1 * i} className="h-full">
                <div className="relative group cursor-pointer h-full">
                  {/* Connecting Line (Desktop Only) */}
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-[4.5rem] -right-8 w-8 h-[2px] bg-[#E5E5E5] group-hover:bg-[#FFD5C2] transition-colors duration-300 z-0" />
                  )}
                  
                  <div className="flex flex-col text-left p-8 bg-white border border-surface-border rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(255,90,31,0.08)] transition-all duration-500 h-full relative z-10 group-hover:border-[#FFD5C2]">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFF6F3] to-[#FFE8DE] text-accent-primary flex items-center justify-center border border-[#FFD5C2]/50">
                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div className="text-6xl font-bold text-[#F5EFEA] tracking-tighter group-hover:text-[#FFE8DE] transition-colors duration-500">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-sans font-semibold text-[20px] text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">{item.title}</h3>
                    <p className="font-sans text-[15px] text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/quote">
              <Button variant="primary" className="bg-[#111111] hover:bg-accent-primary text-white rounded-full px-8 h-14 text-[16px] transition-colors duration-300">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5.6: GOVERNMENT & INSTITUTIONAL SUPPLY */}
      <section className="py-24 bg-[#FAFAFA] border-y border-surface-border overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <Badge variant="default" className="w-fit mb-2">PUBLIC PROCUREMENT</Badge>
              <h2 className="font-sans font-medium text-4xl md:text-5xl text-text-primary leading-tight tracking-tight">
                National Public <span className="text-accent-primary">Procurement Solutions</span>
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
                Navigating international trade regulations can be challenging. Siddhi Binayak Overseas Pvt. Ltd. Nepal streamlines the entire acquisition lifecycle for Nepal's state institutions, delivering an end-to-end framework that bridges global manufacturers with local requirements.
              </p>
              <p className="font-sans text-[16px] text-text-secondary leading-relaxed">
                By collaborating directly with ministerial departments and public agencies, we decode complex technical specifications and match them with top-tier international suppliers, guaranteeing that critical milestones and rigorous quality thresholds are met without delay.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                {[
                  { title: "End-to-End Global Sourcing", desc: "Comprehensive assessment and multi-vendor coordination." },
                  { title: "Expedited Customs Clearance", desc: "Seamless border logistics and localized distribution." },
                  { title: "Transparent Lifecycle Reporting", desc: "Real-time milestone tracking and quality assurance." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFF6F3] text-accent-primary flex items-center justify-center mt-0.5 group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-[16px] text-text-primary mb-1">{item.title}</h4>
                      <p className="font-sans text-[14px] text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-3xl border border-surface-border shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-sans font-semibold text-2xl text-text-primary">Strategic Sectors</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "Defense & National Security", desc: "Equipping Nepal Army and Armed Police with tactical resources.", icon: Shield },
                { title: "Disaster Management", desc: "Rapid-deployment provisions for rescue operations.", icon: Globe2 },
                { title: "Infrastructure & Power", desc: "Core equipment for state-sponsored construction.", icon: Building },
                { title: "Health & Civil Aviation", desc: "Advanced medical and civil aviation technologies.", icon: Truck }
              ].map((sector, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 bg-[#FAFAFA] rounded-2xl border border-surface-border hover:border-[#FFD5C2] transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF6F3] to-[#FFE8DE] text-accent-primary flex items-center justify-center border border-[#FFD5C2]/50 group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300">
                    <sector.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[15px] text-text-primary mb-0.5">{sector.title}</h4>
                    <p className="font-sans text-[13px] text-text-secondary leading-relaxed">{sector.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-1 p-4 bg-gradient-to-br from-[#FFF6F3] to-[#FFE8DE] rounded-2xl border border-[#FFD5C2]/50 flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 rounded-full bg-white text-accent-primary flex items-center justify-center shadow-sm">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[15px] text-accent-primary mb-0.5">Regulatory Integrity</h4>
                <p className="font-sans text-[13px] text-accent-primary/80 leading-relaxed">
                  Strict adherence to Public Procurement Monitoring Office (PPMO) mandates with exhaustive compliance documentation.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

      {/* SECTION 5.7: PRODUCT CATEGORIES */}
      <section className="py-24 bg-white overflow-hidden">
        <ScrollReveal delay={0.1}>
          <div className="container flex flex-col items-center text-center gap-4 mb-16">
            <Badge variant="default" className="w-fit">OUR PRODUCTS</Badge>
            <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl leading-tight text-text-primary max-w-2xl mb-2">
              Product <span className="text-accent-primary">Categories</span>
            </h2>
            <p className="font-sans text-[18px] text-text-secondary max-w-3xl">
              Comprehensive range of certified products across multiple categories, sourced from verified OEMs and trusted manufacturers.
            </p>
          </div>
        </ScrollReveal>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Safety & Rescue Equipment", desc: "PPE, firefighting equipment, emergency response gear", icon: Shield },
            { title: "Marine & Outdoor Gear", desc: "Navigation equipment, marine hardware, outdoor supplies", icon: LifeBuoy },
            { title: "Industrial Tools & Machinery", desc: "Power tools, industrial equipment, manufacturing machinery", icon: Wrench },
            { title: "Electronics & IT Equipment", desc: "Computing hardware, networking equipment, office electronics", icon: Cpu },
            { title: "Aviation Equipment & Ground Support", desc: "Aircraft parts, ground handling equipment, aviation supplies", icon: Plane },
            { title: "Heavy-Duty & Utility Vehicles", desc: "Commercial vehicles, utility trucks, fleet equipment", icon: Truck },
            { title: "Energy & Power Infrastructure", desc: "Power generation, electrical systems, renewable energy components", icon: Zap },
            { title: "Construction Materials", desc: "Building materials, structural components, finishing supplies", icon: Hammer },
            { title: "Consumer & Commercial Goods", desc: "FMCG, commercial supplies, retail inventory", icon: ShoppingCart },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.05 * i} className="h-full">
              <div className="flex flex-col h-full gap-3 p-6 bg-[#FAFAFA] rounded-3xl border border-surface-border hover:border-[#FFD5C2] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#FFF6F3] to-[#FFE8DE] text-accent-primary flex items-center justify-center border border-[#FFD5C2]/50 group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans font-semibold text-[17px] text-text-primary group-hover:text-accent-primary transition-colors leading-tight">{item.title}</h3>
                </div>
                <p className="font-sans text-[14px] text-text-secondary leading-relaxed mt-1">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SECTION 5.8: TESTIMONIALS */}
      <section className="py-24 bg-[#FAFAFA] border-t border-surface-border overflow-hidden">
        <ScrollReveal delay={0.1}>
          <div className="container flex flex-col items-center text-center gap-4 mb-16">
            <Badge variant="default" className="w-fit">TESTIMONIALS</Badge>
            <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl leading-tight text-text-primary max-w-2xl mb-2">
              What Our <span className="text-accent-primary">Clients Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              text: "ALIVZON demonstrated strong professionalism throughout our procurement process. Their documentation accuracy, product compliance, and delivery coordination met our institutional standards without delay.",
              name: "Suresh Adhikari",
              role: "Procurement Officer",
              company: "@Public Sector Organization, Nepal",
              image: "https://i.pravatar.cc/150?u=suresh"
            },
            {
              text: "The supply chain reliability provided by Siddhi Binayak Overseas Pvt. Ltd. Nepal has been crucial for our infrastructure projects. They consistently ensure seamless customs clearance and on-time delivery across borders.",
              name: "Ramesh Thapa",
              role: "Logistics Director",
              company: "@National Construction Dept",
              image: "https://i.pravatar.cc/150?u=ramesh"
            },
            {
              text: "Their ability to coordinate multi-vendor shipments for our facilities was outstanding. We received all specialized equipment perfectly documented and fully compliant with all local regulations.",
              name: "Dr. Sunita Sharma",
              role: "Medical Superintendent",
              company: "@City General Hospital",
              image: "https://i.pravatar.cc/150?u=sunita"
            },
            {
              text: "Exceptional service for our energy sector initiatives. The parts sourced from international OEMs were authentic, and their absolute transparency in the procurement process is highly commendable.",
              name: "Bikash Shrestha",
              role: "Chief Engineer",
              company: "@Hydropower Development",
              image: "https://i.pravatar.cc/150?u=bikash"
            },
            {
              text: "From initial feasibility analysis to final inland distribution, the team managed every aspect of our heavy machinery import flawlessly. A truly reliable partner for complex global sourcing.",
              name: "Anita Gurung",
              role: "Operations Manager",
              company: "@Civil Aviation Authority",
              image: "https://i.pravatar.cc/150?u=anita"
            },
            {
              text: "We highly value their strict adherence to PPMO regulations. It makes our institutional auditing processes completely stress-free, knowing every document is meticulously prepared and verified.",
              name: "Prakash Koirala",
              role: "Financial Controller",
              company: "@Ministry of Infrastructure",
              image: "https://i.pravatar.cc/150?u=prakash"
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i} className="h-full">
              <div className="flex flex-col h-full bg-white p-8 rounded-[2rem] border border-surface-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="font-sans text-[16px] text-text-primary leading-relaxed mb-8 flex-grow">
                  {item.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover bg-gray-100 shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-[16px] text-text-primary">{item.name}</h4>
                    <p className="font-sans text-[14px] text-text-secondary mt-0.5">
                      {item.role} <span className="text-accent-primary">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SECTION 5.9: GLOBAL CONNECTIVITY VIDEO */}
      <section className="py-16 bg-white border-t border-surface-border flex justify-center">
        <div className="w-[calc(100%-2rem)] max-w-[1200px]">
          <div className="relative w-full bg-[#0a0f1a] rounded-[2rem] md:rounded-[3rem] px-6 py-6 md:px-8 md:py-6 flex flex-col items-center border border-[#222] shadow-2xl overflow-hidden">
            
            <div className="relative z-20 flex flex-col items-center text-center mb-5">
              <Badge variant="default" className="mb-2 bg-accent-primary/20 text-accent-primary border border-accent-primary/30 text-[10px] font-semibold tracking-wider">GLOBAL CONNECTIVITY</Badge>
              <h2 className="font-sans font-medium text-3xl md:text-4xl leading-[1.1] tracking-tight text-white mb-2">
                Seamless <span className="text-accent-primary">Global Sourcing.</span>
              </h2>
              <p className="font-sans text-[14px] md:text-[15px] text-gray-400 max-w-xl">
                Importing high-quality materials and machinery from the world's most trusted manufacturing hubs directly into Nepal.
              </p>
            </div>

            <div className="w-full relative aspect-[16/9] md:aspect-[2.4/1] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 bg-black">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
              >
                <source src="/videos/world-nepal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/40 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5.10: FAQ */}
      <section className="py-24 bg-white border-t border-surface-border overflow-hidden">
        <div className="container max-w-4xl">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <Badge variant="default" className="w-fit">FAQ</Badge>
              <h2 className="font-sans font-medium tracking-tight text-4xl md:text-5xl leading-tight text-text-primary mb-2">
                Frequently Asked <span className="text-accent-primary">Questions</span>
              </h2>
              <p className="font-sans text-[18px] text-text-secondary">
                Find answers to common questions about our services, capabilities, and procurement process.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "Do you support public sector procurement?",
                a: "Yes, we are fully equipped to support public sector procurement. We comply with all Public Procurement Monitoring Office (PPMO) guidelines and handle the entire documentation and bidding process for government entities."
              },
              {
                q: "Do you source products directly from OEMs?",
                a: "Absolutely. We have established direct relationships with global Original Equipment Manufacturers (OEMs), ensuring that you receive authentic products with full warranties and comprehensive after-sales support."
              },
              {
                q: "What types of products do you supply?",
                a: "We supply a diverse range of products including defense and security gear, aviation equipment, heavy machinery, medical infrastructure, and custom IT equipment tailored to institutional requirements."
              },
              {
                q: "How can we submit an RFQ or tender inquiry?",
                a: "You can submit your Request for Quotation (RFQ) directly through our Contact page, or email our procurement team with your specifications. We will review your requirements and provide a detailed sourcing strategy."
              },
              {
                q: "Do you manage international shipping and trade documentation?",
                a: "Yes, we provide end-to-end logistics solutions. This includes international freight forwarding, customs clearance, transit insurance, and final inland delivery directly to your facility in Nepal."
              },
              {
                q: "What quality and compliance standards do your supplies meet?",
                a: "All our imported products meet strict international quality certifications (such as ISO, CE, FDA where applicable) and fully adhere to Nepal's national import compliance and quality control standards."
              }
            ].map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 12: INTERACTIVE CTA BANNER */}
      <InteractiveCTABanner />
    </div>
  );
}
