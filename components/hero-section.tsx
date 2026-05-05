'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, HeartHandshake } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden bg-[#F7F6F2] border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center px-4 py-1.5 bg-white border border-[#1B4332]/20 rounded-full text-[11px] font-bold text-[#1B4332] tracking-wide uppercase">
              Institutional Integrity • Social Welfare
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1B4332] leading-tight mb-6">
              Empowering <span className="italic font-light">Communities</span> Through Sustainable Care
            </h1>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-[#5C574F] mb-10 max-w-2xl mx-auto">
              RJS Foundation brings hope, healthcare, and opportunity to those who need it most. Rooted in the educational legacy of Rashtrasant Janardhan Swami Group, we empower communities across Maharashtra.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#donate" className="w-full sm:w-auto bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#work" className="w-full sm:w-auto border-2 border-[#1B4332] text-[#1B4332] hover:bg-white hover:-translate-y-0.5 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300 text-center hover:shadow-sm">
              See Our Work
            </Link>
          </motion.div>
        </div>

        {/* Image / Card Layout similar to the reference */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-5xl mx-auto mt-16"
        >
          <div className="relative h-[400px] md:h-[500px] overflow-hidden border border-[#E5E2DA] bg-white rounded-sm">
            <Image 
              src="https://picsum.photos/seed/rjshero/1600/800"
              alt="Community health care volunteers giving food and supplies"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/50 via-transparent to-transparent" />
          </div>

          {/* Floating Card - Left overlay */}
          <div className="absolute -bottom-10 md:-left-12 left-4 right-4 md:right-auto bg-white p-6 md:p-8 border border-[#E5E2DA] max-w-sm rounded-sm z-20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
            <h3 className="font-serif text-2xl font-bold text-[#1B4332] mb-3 leading-tight">Join The Caring Movement For A Better Future</h3>
            <p className="text-sm text-[#5C574F] mb-6">Let&apos;s Unite in a Caring Movement to Create a Brighter and More Meaningful Future.</p>
            
            <div className="relative h-40 overflow-hidden mb-4 border border-[#E5E2DA] rounded-sm">
              <Image 
                src="https://picsum.photos/seed/rjschildren/600/400"
                alt="Happy children receiving help"
                fill
                className="object-cover"
                sizes="384px"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white border border-[#E5E2DA] text-[#1B4332] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                Healthcare First
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-[#FAF9F6] border border-[#E5E2DA] p-3 rounded-sm mt-4">
               <div className="flex -space-x-2">
                 {[1,2,3].map((i) => (
                    <div key={i} className={`w-8 h-8 border-2 border-white bg-gray-200 overflow-hidden relative rounded-sm z-[${4-i}]`}>
                        <Image src={`https://picsum.photos/seed/avatar${i}/64/64`} fill alt="Donor" className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                 ))}
               </div>
               <span className="text-xs font-bold uppercase tracking-widest text-[#4A463F]">50,000+ Touched</span>
            </div>
          </div>

          {/* Floating Card - Right stat box */}
          <div className="hidden lg:flex absolute bottom-12 -right-8 bg-white p-6 border border-[#E5E2DA] rounded-sm flex-col min-w-[280px] z-20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
             <div className="flex items-center gap-3 mb-2">
                <HeartHandshake className="text-[#1B4332] w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#8C867A]">Total CSR Impact</span>
             </div>
             <div className="text-3xl font-serif font-bold text-[#1B4332] mb-4">₹2.4Cr+</div>
             
             {/* Progress Bar Mockup */}
             <div className="w-full bg-[#E5E2DA] h-1.5 mb-2 overflow-hidden rounded-sm">
               <div className="bg-[#1B4332] h-1.5" style={{ width: '75%' }}></div>
             </div>
             <div className="flex justify-between text-xs text-[#8C867A] mb-4 font-bold uppercase tracking-wider">
                <span>12 Partners</span>
                <span>75% Funded</span>
             </div>
             
             <Link href="#csr" className="w-full block text-center border border-[#1B4332] text-[#1B4332] py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-[#1B4332] hover:text-white transition-all duration-300 rounded-sm">
               Become a Partner
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
