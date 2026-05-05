'use client';

import Link from 'next/link';
import { Heart, MapPin, Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#FCFBFA] pt-16 md:pt-24 pb-12 border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-[#1B4332] p-2 rounded-sm text-white border border-[#E5E2DA] flex items-center justify-center w-8 h-8">
                 <span className="font-serif font-bold text-lg leading-none">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#1B4332] leading-none">
                  Foundation
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8C867A] font-bold">RJS Group</span>
              </div>
            </Link>
            <p className="text-[#5C574F] leading-relaxed text-sm">
              The philanthropic arm of the Rashtrasant Janardhan Swami Group of Institutes. Dedicated to driving sustainable change in healthcare, education, and the environment.
            </p>
            <div className="pt-4 flex gap-4">
               <a href="https://instagram.com/rjsinstitutes_official" target="_blank" rel="noreferrer" className="border border-[#E5E2DA] p-3 rounded-sm text-[#4A463F] hover:bg-[#1B4332] hover:text-white transition-all duration-300 hover:-translate-y-1 bg-white hover:shadow-md">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="border border-[#E5E2DA] p-3 rounded-sm text-[#4A463F] hover:bg-[#1B4332] hover:text-white transition-all duration-300 hover:-translate-y-1 bg-white hover:shadow-md">
                 <Linkedin className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="font-bold text-[#1B4332] uppercase tracking-widest text-[11px]">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="#work" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">Our Work</Link></li>
              <li><Link href="#impact" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">Impact Overview</Link></li>
              <li><Link href="#csr" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">CSR Partnership</Link></li>
            </ul>
          </div>

          {/* Legal / Trust Docs */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-[#1B4332] uppercase tracking-widest text-[11px]">Trust Docs</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">Annual Report 2024</Link></li>
              <li><Link href="#" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">80G Certificate</Link></li>
              <li><Link href="#" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">12A Registration</Link></li>
              <li><Link href="#" className="text-[#5C574F] hover:text-[#1B4332] transition-colors text-sm font-medium">FCRA Status</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-[#1B4332] uppercase tracking-widest text-[11px]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-[#8C867A] flex-shrink-0 mt-0.5" />
                 <span className="text-[#5C574F] text-sm leading-relaxed font-medium">
                   Kokamthan, Tal. Kopargaon, Dist. Ahmednagar, Maharashtra — 423601
                 </span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-[#8C867A] flex-shrink-0" />
                 <a href="tel:+919876543210" className="text-[#5C574F] text-sm hover:text-[#1B4332] transition-colors font-medium">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-[#8C867A] flex-shrink-0" />
                 <a href="mailto:csr@rjsfoundation.org" className="text-[#5C574F] text-sm hover:text-[#1B4332] transition-colors font-medium">csr@rjsfoundation.org</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#E5E2DA] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-[#8C867A] text-sm font-medium text-center md:text-left">
             © {new Date().getFullYear()} Rashtrasant Janardhan Swami Foundation. All rights reserved.
           </p>
           <div className="flex gap-6 text-sm">
              <Link href="#" className="text-[#8C867A] hover:text-[#1B4332] font-medium">Privacy Policy</Link>
              <Link href="#" className="text-[#8C867A] hover:text-[#1B4332] font-medium">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
