import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Eye, ShieldCheck, MapPin, Building2, CheckCircle2, Factory, Mountain, Settings, Plane, Shield, LifeBuoy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-[calc(72px+6rem)] pb-12 md:pt-[calc(72px+8rem)] md:pb-16 text-center">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>

        <div className="container relative z-10 flex flex-col items-center gap-6 max-w-4xl">
          <Badge variant="default" className="mb-2 shadow-sm font-semibold tracking-wider text-[11px] bg-white text-text-primary border-surface-border">
            GET TO KNOW US
          </Badge>
          <h1 className="font-sans font-medium text-5xl md:text-7xl leading-[1.05] tracking-tight text-text-primary">
            Nepal&apos;s leading supply <br />
            partner <span className="text-accent-primary">since 2012.</span>
          </h1>
          <p className="font-sans text-[18px] text-text-secondary leading-relaxed max-w-2xl mt-4 text-justify">
            Siddhi Binayak Overseas Pvt. Ltd. is a Nepal-based general trading company, registered in Lalitpur, specializing in the procurement and supply of high-quality products and integrated solutions for government institutions, defense organizations, educational institutions, healthcare providers, and private enterprises across Nepal.
          </p>
        </div>
        

        
        {/* Vanishing gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />
      </section>

      {/* OEM PARTNERSHIPS */}
      <section className="py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col mb-16 items-center text-center">
              <Badge variant="default" className="mb-4">Global Network</Badge>
              <h2 className="font-sans font-medium text-4xl md:text-[52px] leading-[1.1] tracking-tight text-text-primary">OEM Partnerships</h2>
              <p className="font-sans text-[18px] text-text-secondary leading-relaxed max-w-2xl mt-4">
                We are proud to collaborate with industry-leading manufacturers worldwide, bringing world-class equipment and solutions to Nepal.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto relative mt-16 before:content-[''] before:hidden md:before:block before:absolute before:left-1/2 before:top-4 before:bottom-4 before:w-[1px] before:bg-[#FFD5C2]/40 before:-translate-x-1/2">
            {[
              { 
                name: "Vertical Supply Group", 
                desc: "A leading manufacturer of premium height safety and arboriculture equipment, delivering cutting-edge solutions for professionals operating in challenging vertical environments.",
                highlights: ["Arboriculture Gear", "Rope Rescue Systems", "Fall Protection"],
                icon: Mountain 
              },
              { 
                name: "Prototypa", 
                desc: "Specialized in advanced ballistics and testing technology, providing precise measurement tools and developmental support for defense industries.",
                highlights: ["Ballistic Testing", "Weapon Development", "Measurement Systems"],
                icon: Settings 
              },
              { 
                name: "Onboard Systems Int.", 
                desc: "Pioneering developers of helicopter cargo hook equipment, innovating advanced external load systems for civilian and military aircraft worldwide.",
                highlights: ["Cargo Hook Equipment", "External Load Systems", "Helicopter Tech"],
                icon: Plane 
              },
              { 
                name: "ESS (Eye Safety)", 
                desc: "Creating advanced Eye Safety Systems for military and tactical use. Delivering top-tier eye protection for combat, law enforcement, and rescue personnel.",
                highlights: ["Tactical Goggles", "Ballistic Eyeshields", "Military Eyewear"],
                icon: Eye 
              },
              { 
                name: "Zennison", 
                desc: "Renowned for durable, high-performance tactical solutions and defense equipment, supporting military operations with robust and reliable gear.",
                highlights: ["Tactical Gear", "Defense Equipment", "Operational Solutions"],
                icon: Shield 
              },
              { 
                name: "Kaya Safety", 
                desc: "Focused on designing and manufacturing industrial fall protection solutions, advanced height safety systems, and specialized rescue equipment.",
                highlights: ["Fall Protection", "Height Safety", "Rescue Equipment"],
                icon: LifeBuoy 
              },
              { 
                name: "PETZL", 
                desc: "World-renowned experts in professional climbing and work-at-height gear, offering innovative headlamps, harnesses, and verticality equipment.",
                highlights: ["Professional Climbing", "Work-at-Height", "Tactical Headlamps"],
                icon: Mountain 
              },
              { 
                name: "BAR-1", 
                desc: "Delivering comprehensive tactical solutions, specialized defense systems, and state-of-the-art security technology for critical infrastructure.",
                highlights: ["Defense Systems", "Security Tech", "Tactical Solutions"],
                icon: Target 
              }
            ].map((partner, idx) => (
              <ScrollReveal key={idx} delay={0.1}>
                <div className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-12 last:mb-0 group/timeline`}>
                  
                  {/* Connector Icon (Center Axis) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-[3px] border-[#FAFAFA] shadow-[0_0_0_2px_#FFD5C2] z-10 items-center justify-center text-accent-primary group-hover/timeline:bg-accent-primary group-hover/timeline:text-white group-hover/timeline:shadow-[0_0_0_2px_#FF5E14] transition-all duration-500">
                    <partner.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  
                  {/* Empty space for one side of the timeline */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
                    <div className="group bg-white p-8 rounded-[2.5rem] border border-surface-border shadow-sm hover:shadow-[0_20px_40px_rgba(255,94,20,0.08)] hover:-translate-y-1 transition-all duration-500 w-full relative overflow-hidden flex flex-col md:text-left text-center">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl group-hover:bg-accent-primary/10 transition-colors duration-500 -mr-10 -mt-10 pointer-events-none" />
                      
                      {/* Mobile icon (hidden on desktop since it's on the timeline) */}
                      <div className="md:hidden w-14 h-14 rounded-2xl bg-[#FFF6F3] border border-[#FFD5C2]/50 flex items-center justify-center text-accent-primary mb-5 mx-auto group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300 shrink-0">
                        <partner.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="font-sans font-semibold text-2xl mb-3 text-text-primary">{partner.name}</h3>
                      <p className="font-sans text-text-secondary text-[15px] leading-relaxed mb-6">{partner.desc}</p>
                      
                      <div className={`flex flex-col gap-2 mt-auto ${idx % 2 === 0 ? 'md:items-start items-center' : 'md:items-start items-center'}`}>
                        {partner.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-3 text-[14px] text-text-secondary font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES - DARK FLOATING CAPSULES */}
      <section className="py-24 container max-w-6xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full bg-[#111111] p-10 rounded-[2.5rem] flex flex-col gap-6 relative overflow-hidden group shadow-xl border border-white/10 hover:border-accent-primary/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-accent-primary/20 transition-colors duration-700 pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-accent-primary/20 flex items-center justify-center relative z-10 text-accent-primary">
                <Target className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <h3 className="font-sans font-medium text-2xl text-white mb-3">Our Mission</h3>
                <p className="font-sans text-gray-400 text-[15px] leading-relaxed">To empower Nepal&apos;s institutions by providing reliable, high-quality, and compliant supply chain solutions.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full bg-[#111111] p-10 rounded-[2.5rem] flex flex-col gap-6 relative overflow-hidden group shadow-xl border border-white/10 hover:border-accent-primary/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-accent-primary/20 transition-colors duration-700 pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-accent-primary/20 flex items-center justify-center relative z-10 text-accent-primary">
                <Eye className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <h3 className="font-sans font-medium text-2xl text-white mb-3">Our Vision</h3>
                <p className="font-sans text-gray-400 text-[15px] leading-relaxed">To be recognized as Nepal&apos;s most trusted and efficient B2B trading house and government supply partner.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="h-full">
            <div className="h-full bg-[#111111] p-10 rounded-[2.5rem] flex flex-col gap-6 relative overflow-hidden group shadow-xl border border-white/10 hover:border-accent-primary/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-accent-primary/20 transition-colors duration-700 pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-accent-primary/20 flex items-center justify-center relative z-10 text-accent-primary">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <h3 className="font-sans font-medium text-2xl text-white mb-3">Our Values</h3>
                <p className="font-sans text-gray-400 text-[15px] leading-relaxed">Integrity in procurement, uncompromised quality, time-bound execution, and absolute compliance.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LEGAL & REGISTRATION SECTION - PREMIUM DATA GRID */}
      <section className="py-24 bg-[#FAFAFA] border-t border-surface-border overflow-hidden">
        <ScrollReveal delay={0.1}>
          <div className="container max-w-4xl">
            <div className="flex flex-col items-center text-center mb-12">
              <Badge variant="default" className="mb-4">Official Details</Badge>
              <h2 className="font-sans font-medium text-4xl md:text-5xl leading-[1.1] tracking-tight text-text-primary">Corporate Registration.</h2>
            </div>
            
            <div className="bg-white border border-surface-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {/* Entity */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-surface-border flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-text-secondary" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-sans font-medium text-[14px] text-text-tertiary">Registered Entity</span>
                      <span className="font-sans font-medium text-xl text-text-primary">Siddhi Binayak Overseas Pvt. Ltd. Nepal</span>
                    </div>
                  </div>

                  {/* VAT */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#FFF0EB] border border-accent-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-sans font-medium text-[14px] text-text-tertiary">VAT Number</span>
                      <span className="font-mono text-accent-primary bg-[#FFF0EB] px-3 py-1 rounded w-max text-[15px] font-semibold tracking-wide">619826868</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-surface-border flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-text-secondary" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-sans font-medium text-[14px] text-text-tertiary">Official Address</span>
                      <span className="font-sans text-[16px] text-text-primary leading-tight">Mahalaxmi Municipality- 02<br/>Lalitpur, Nepal</span>
                    </div>
                  </div>

                  {/* PPMO */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-success/10 border border-success/20 flex items-center justify-center shrink-0">
                      <Factory className="w-5 h-5 text-success" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-sans font-medium text-[14px] text-text-tertiary">PPMO Registration</span>
                      <span className="font-mono text-success bg-[rgba(34,197,94,0.1)] px-3 py-1 rounded w-max text-[13px] font-semibold tracking-wide">VERIFIED SUPPLIER</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
