'use client';

import { motion } from 'motion/react';
import { CreditCard, Landmark, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<string>("₹ 5,000");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDonate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="donate" className="py-16 md:py-24 bg-[#FCFBFA] border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-4xl md:text-5xl font-serif text-[#1B4332] mb-6">
              Make A Difference Today
           </h2>
           <p className="text-lg text-[#5C574F]">
             Your contribution directly funds life-saving medical treatments, health camps, and environmental preservation efforts. We operate with zero administrative deduction on pubic donations.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Bank Details Card */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-white rounded-sm p-10 border border-[#E5E2DA] hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
             <div className="flex justify-between items-center mb-8 border-b border-[#E5E2DA] pb-6">
                <div>
                  <h3 className="text-2xl font-serif text-[#1B4332] mb-1">Direct Bank Transfer</h3>
                  <p className="text-xs uppercase tracking-widest text-[#8C867A] font-bold">For NEFT / RTGS / IMPS</p>
                </div>
                <div className="border border-[#E5E2DA] p-4 rounded-sm text-[#1B4332] bg-[#FCFBFA]">
                   <Landmark className="w-8 h-8" />
                </div>
             </div>
             
             <div className="space-y-6">
                <div>
                   <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C867A] mb-1 block">Account Name</label>
                   <div className="text-lg font-bold text-[#1B4332]">Rashtrasant Janardhan Swami Foundation</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C867A] mb-1 block">Bank Name</label>
                     <div className="text-lg font-medium text-[#4A463F]">HDFC Bank</div>
                   </div>
                   <div>
                     <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C867A] mb-1 block">Branch</label>
                     <div className="text-lg font-medium text-[#4A463F]">Kopargaon</div>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C867A] mb-1 block">Account Number</label>
                     <div className="text-xl font-mono font-bold text-[#1B4332]">01234567891011</div>
                   </div>
                   <div>
                     <label className="text-[10px] font-bold uppercase tracking-widest text-[#8C867A] mb-1 block">IFSC Code</label>
                     <div className="text-xl font-mono font-bold text-[#1B4332]">HDFC0001234</div>
                   </div>
                </div>
             </div>
             
             <div className="mt-8 bg-[#FAF9F6] text-[#4A463F] p-4 border border-[#E5E2DA] rounded-sm text-sm font-medium flex gap-3">
                <span className="text-2xl pt-1">💡</span>
                <p>Tax Exemption: All donations are eligible for a 50% tax deduction under Section 80G of the Income Tax Act.</p>
             </div>
          </motion.div>

          {/* Payment Gateway Mockup & Map */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="space-y-8"
          >
             <div className="bg-[#1B4332] rounded-sm p-10 border border-[#1B4332] text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-3xl font-serif mb-2">Donate Online</h3>
                <p className="text-white/70 mb-8 text-sm">Secure credit card and UPI payments.</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {["₹ 1,000", "₹ 5,000", "₹ 10,000"].map((amt, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedAmount(amt)}
                      className={`border rounded-sm py-3 text-center text-sm font-bold tracking-widest transition-colors ${
                        selectedAmount === amt 
                          ? 'border-white bg-white text-[#1B4332]' 
                          : 'border-white/20 hover:bg-white hover:text-[#1B4332] hover:border-white'
                      }`}
                      suppressHydrationWarning
                    >
                      {amt}
                    </button>
                  ))}
                </div>
                
                {isSuccess ? (
                  <div className="w-full bg-[#FCFBFA] text-[#1B4332] py-4 rounded-sm flex flex-col items-center justify-center gap-2 border border-[#E5E2DA]">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold text-[11px] tracking-widest uppercase">Thank You for Donating {selectedAmount}</span>
                  </div>
                ) : (
                <button 
                  onClick={handleDonate}
                  disabled={isProcessing}
                  className="w-full bg-[#D97706] text-white font-bold text-[11px] tracking-widest uppercase py-4 rounded-sm hover:bg-[#B45309] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:bg-[#D97706]" 
                  suppressHydrationWarning
                >
                  {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
                  {isProcessing ? 'Processing...' : `Proceed to Pay ${selectedAmount}`}
                </button>
                )}
             </div>

             {/* Location Widget */}
             <div className="bg-white rounded-sm p-6 border border-[#E5E2DA] flex items-start gap-4">
                <div className="bg-[#FCFBFA] border border-[#E5E2DA] p-3 rounded-sm flex-shrink-0">
                   <MapPin className="w-6 h-6 text-[#1B4332]" />
                </div>
                <div className="w-full">
                   <h4 className="font-bold text-[#1B4332] mb-1">Our Operating Headquarters</h4>
                   <p className="text-[#5C574F] text-sm leading-relaxed mb-4">
                     RJS Homoeopathic & Ayurved Medical College Campus, Kokamthan, Tal. Kopargaon, Dist. Ahmednagar.
                   </p>
                   {/* Static map placeholder */}
                   <a 
                     href="https://www.google.com/maps/search/?api=1&query=RJS+Homoeopathic+Medical+College+Kokamthan+Kopargaon" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block relative h-32 w-full border border-[#E5E2DA] rounded-sm overflow-hidden bg-gray-200 group"
                   >
                     <Image 
                       src="https://picsum.photos/seed/rjsmap/800/400"
                       alt="Map location"
                       fill
                       className="object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all cursor-pointer"
                       sizes="(max-width: 768px) 100vw, 400px"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:bg-[#1B4332]/10 transition-colors">
                        <div className="bg-white border border-[#E5E2DA] text-[#1B4332] px-4 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-bold shadow-sm">
                           View on Maps
                        </div>
                     </div>
                   </a>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
