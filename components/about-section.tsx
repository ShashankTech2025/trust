'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function About() {
  const points = [
    "Registered Charitable Trust with 80G & 12A Certification",
    "Supported by the educational legacy of RJS Group of Institutes",
    "Zero administrative overhead on CSR donations (100% hits the ground)",
    "Operating a fully functional Charitable Hospital at minimal cost"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FCFBFA] border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative h-64 border border-[#E5E2DA] overflow-hidden rounded-sm bg-white">
                  <Image 
                    src="https://picsum.photos/seed/rjsmed/800/800"
                    alt="Medical professional with patient"
                    fill
                    loading="lazy"
                    className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, 300px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative h-48 border border-[#E5E2DA] overflow-hidden rounded-sm bg-white">
                  <Image 
                    src="https://picsum.photos/seed/rjstree/800/600"
                    alt="Tree plantation"
                    fill
                    loading="lazy"
                    className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, 300px"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-56 border border-[#E5E2DA] overflow-hidden rounded-sm bg-white">
                  <Image 
                    ref={null}
                    src="https://picsum.photos/seed/rjscommunity/800/1000"
                    alt="Community support"
                    fill
                    loading="lazy"
                    className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, 300px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#1B4332] rounded-sm p-8 border border-[#E5E2DA] flex flex-col justify-center text-white h-auto sm:aspect-square">
                  <div className="text-4xl font-serif font-bold mb-2">10+</div>
                  <div className="text-white/80 font-bold text-sm tracking-widest uppercase mb-4">Years of Service</div>
                  <div className="text-sm text-white/60 leading-relaxed">Originating from the renowned Rashtrasant Janardhan Swami Colleges.</div>
                </div>
              </div>
            </div>
            
            {/* Trust badge */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white px-6 py-4 border border-[#E5E2DA] flex items-center gap-4 hidden md:flex rounded-sm">
               <div className="w-10 h-10 border border-[#E5E2DA] bg-[#FAF9F6] flex items-center justify-center rounded-sm flex-shrink-0">
                 <span className="text-[#1B4332] text-[10px] font-bold">✓</span>
               </div>
               <div>
                 <div className="font-bold text-[#1B4332] leading-tight text-sm uppercase tracking-wider">ISO 9001:2015</div>
                 <div className="text-[10px] text-[#8C867A] uppercase tracking-widest">Certified Foundation</div>
               </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:pl-8"
          >
            <div className="inline-block bg-white border border-[#E5E2DA] text-[#1B4332] font-bold px-4 py-1.5 rounded-sm text-[11px] mb-6 uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B4332] mb-6 leading-tight">
              A Legacy of Education.<br/><span className="italic font-light">A Mission of Healing.</span>
            </h2>
            <p className="text-[#5C574F] mb-6 text-lg leading-relaxed">
              Serving the Ahmednagar region and beyond, the RJS Foundation operates as the independent philanthropic arm of the Rashtrasant Janardhan Swami Group of Institutes. Over the years, the group has established esteemed institutions including Ayurvedic and Homoeopathic Medical Colleges.
            </p>
            <p className="text-[#5C574F] mb-8 text-lg leading-relaxed">
              We leverage this medical infrastructure, expertise, and immense student volunteer base to run large-scale community welfare operations—bridging the gap between specialized healthcare and rural populations.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center rounded-none bg-[#1B4332] text-white text-[10px] flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-[#4A463F] font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="#work" className="inline-flex items-center gap-2 group text-[#1B4332] font-bold text-sm uppercase tracking-wider hover:text-[#D97706] transition-colors">
              Explore our core initiatives
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
