import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-8 md:py-12">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Card: Brand */}
        <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] border border-surface-border flex flex-col justify-between items-start shadow-sm hover:shadow-md transition-shadow h-full">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Siddhi Binayak Logo" className="h-[50px] w-auto object-contain mix-blend-multiply" />
            </Link>
            <p className="text-text-secondary font-sans text-[14px] leading-relaxed max-w-[280px]">
              Nepal's premier general trading company. Your Gateway to Modern Sourcing Solutions and Procurement Excellence.
            </p>
          </div>
          
          <Link href="/contact" className="w-full mt-8">
            <button className="w-full bg-[#111111] text-white rounded-full py-3.5 font-sans text-[14px] font-medium hover:bg-black transition-colors shadow-md">
              Get started — for free
            </button>
          </Link>
        </div>

        {/* Right Card: Links & Info */}
        <div className="lg:col-span-8 bg-white p-8 rounded-[2rem] border border-surface-border flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.6fr] gap-6 lg:gap-8">
            {/* Menu */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-semibold text-[15px] text-text-primary">Menu</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { name: 'About', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Coverage', href: '/coverage' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-text-secondary hover:text-accent-primary transition-colors font-sans text-[14px]">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Utility Pages */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-semibold text-[15px] text-text-primary">Utility Pages</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { name: 'FAQs', href: '/faqs' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Login', href: '#' },
                  { name: 'Register', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-text-secondary hover:text-accent-primary transition-colors font-sans text-[14px]">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-semibold text-[15px] text-text-primary">Contact Us</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 text-text-secondary text-[14px] font-sans items-center">
                  <span className="text-text-tertiary shrink-0"><Phone className="w-[16px] h-[16px]"/></span>
                  <div className="flex flex-col gap-1">
                    <span>+977 9855069501</span>
                    <span>+977 9851407711</span>
                  </div>
                </li>
                <li className="flex gap-3 text-text-secondary text-[14px] font-sans items-start">
                  <span className="text-text-tertiary shrink-0 mt-0.5"><MapPin className="w-[16px] h-[16px]"/></span>
                  Mahalaxmi Municipality- 02 Lalitpur, Nepal
                </li>
                <li className="flex gap-3 text-text-secondary text-[14px] font-sans items-center">
                  <span className="text-text-tertiary shrink-0"><Mail className="w-[16px] h-[16px]"/></span>
                  <span className="break-all md:break-words">siddhibinayakoverseas@gmail.com</span>
                </li>
                <li className="flex gap-3 text-text-secondary text-[14px] font-sans items-center mt-2">
                  <span className="text-text-primary font-medium">VAT No:</span>
                  619826868
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#6B7280] text-[13px] font-sans">
              &copy;2026 Siddhi Binayak Overseas Pvt. Ltd. Nepal. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-[#9CA3AF]">
              {/* Twitter SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="hover:text-text-primary transition-colors cursor-pointer">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.728 8.088 4.1 6.128 1.671 3.149c-.982 1.687-.417 3.947 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.759.207-1.581.246-2.224.084.586 1.945 2.43 3.361 4.6 3.419-2.07 1.623-4.678 2.348-7.548 2.212 2.155 1.381 4.712 2.188 7.452 2.188 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              {/* Globe SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-text-primary transition-colors cursor-pointer">
                <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              {/* LinkedIn SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="hover:text-text-primary transition-colors cursor-pointer">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
