'use client';

import { motion } from 'motion/react';
import { Send, FileText, CheckCircle2, Building2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function CSRSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section id="csr" className="bg-[#1B4332] relative overflow-hidden text-white border-y border-[#E5E2DA]">
      {/* Background decorations removed for geometric theme */}
      <div className="flex h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          
          {/* Content */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="p-12 md:p-24 lg:p-32 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/20"
          >
             <div className="inline-flex items-center gap-2 bg-transparent text-white font-bold mb-8 uppercase tracking-widest text-[11px]">
               <Building2 className="w-4 h-4" /> Partner for Purpose
             </div>
             
             <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-white">
               Fulfill Your CSR Mandate with Total Transparency.
             </h2>
             
             <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-xl">
               Strategic CSR alignment for high-impact social interventions. We provide detailed utilization certificates, impact reports, and media kits for your stakeholders.
             </p>

             <ul className="space-y-6 mb-12 max-w-xl">
                {[
                  { title: "80G & 12A Certified", desc: "Tax benefits assured with fully compliant trust documentation." },
                  { title: "Quarterly Impact Reports", desc: "Audited performance metrics and beneficiary stories." },
                  { title: "Dedicated Project Accounts", desc: "Your funds are ring-fenced for the specific cause you choose." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                     <div className="w-5 h-5 flex items-center justify-center rounded-none bg-white text-[#1B4332] text-[10px] flex-shrink-0 mt-1">
                        ✓
                     </div>
                     <div>
                        <h4 className="font-bold text-sm tracking-wide text-white mb-1 uppercase">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                  </li>
                ))}
             </ul>
             
             <div className="flex gap-4">
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="px-8 py-3 border-2 border-white/30 text-white font-bold tracking-widest text-[11px] uppercase hover:bg-white hover:text-[#1B4332] hover:-translate-y-0.5 transition-all duration-300 rounded-sm flex items-center gap-2 disabled:opacity-70 disabled:hover:bg-transparent disabled:hover:text-white hover:shadow-lg" 
                  suppressHydrationWarning
                >
                  {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                  {isDownloading ? 'Downloading...' : 'Download Profile'}
                </button>
             </div>
          </motion.div>

          {/* Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#FCFBFA] p-12 md:p-24 flex flex-col justify-center"
          >
             <h3 className="text-3xl font-serif text-[#1B4332] mb-2">Start a Conversation</h3>
             <p className="text-[#5C574F] mb-10 text-sm">Our partnership team will get back to you within 24 hours.</p>
             
             {isSubmitted ? (
               <div className="bg-[#FAF9F6] border border-[#E5E2DA] rounded-sm p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                 <div className="w-16 h-16 bg-[#1B4332]/10 flex items-center justify-center rounded-full mb-6">
                   <CheckCircle2 className="w-8 h-8 text-[#1B4332]" />
                 </div>
                 <h4 className="text-2xl font-serif text-[#1B4332] mb-3">Inquiry Submitted</h4>
                 <p className="text-[#5C574F] text-sm max-w-sm">Thank you for your interest. Our partnership team will review your details and contact you shortly.</p>
               </div>
             ) : (
             <form className="space-y-6" onSubmit={handleSubmit} suppressHydrationWarning>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-[#4A463F] mb-2">Full Name</label>
                   <input type="text" className="w-full bg-white border border-[#E5E2DA] rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1B4332] text-[#1B4332]" placeholder="John Doe" suppressHydrationWarning />
                 </div>
                 <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-[#4A463F] mb-2">Corporate Email</label>
                   <input type="email" className="w-full bg-white border border-[#E5E2DA] rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1B4332] text-[#1B4332]" placeholder="john@company.com" suppressHydrationWarning />
                 </div>
               </div>
               
               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-[#4A463F] mb-2">Company Name</label>
                 <input type="text" className="w-full bg-white border border-[#E5E2DA] rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1B4332] text-[#1B4332]" placeholder="Acme Corp Ltd." suppressHydrationWarning />
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-[#4A463F] mb-2">Area of Interest</label>
                 <select className="w-full bg-white border border-[#E5E2DA] rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1B4332] text-[#1B4332] appearance-none" suppressHydrationWarning>
                    <option>Healthcare & Medical Infrastructure</option>
                    <option>Environment & Tree Plantation</option>
                    <option>General CSR Donation</option>
                    <option>Employee Volunteering</option>
                 </select>
               </div>
               
               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-[#4A463F] mb-2">Message</label>
                 <textarea rows={4} className="w-full bg-white border border-[#E5E2DA] rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1B4332] text-[#1B4332] resize-none" placeholder="How can we partner with you?" suppressHydrationWarning></textarea>
               </div>
               
               <button type="submit" className="w-full bg-[#1B4332] text-white font-bold text-[11px] tracking-widest uppercase py-4 rounded-sm hover:bg-[#152c1e] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2" suppressHydrationWarning>
                 Submit Inquiry <Send className="w-4 h-4" />
               </button>
             </form>
             )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
