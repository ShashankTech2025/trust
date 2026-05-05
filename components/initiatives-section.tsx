'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, HeartPulse, Stethoscope, Droplets, Leaf } from 'lucide-react';
import Link from 'next/link';

export function Initiatives() {
  const campaigns = [
    {
      id: 1,
      title: "Free Healthcare & Cancer Support",
      shortDesc: "Complete treatment, food, and accommodation for cancer patients.",
      image: "https://picsum.photos/seed/rjscore1/800/600",
      category: "Healthcare",
      icon: <Stethoscope className="w-5 h-5" />,
      colSpan: "lg:col-span-2",
      funds: { raised: 80, goal: 100 }
    },
    {
      id: 2,
      title: "Rural Health Camps",
      shortDesc: "Diagnostic screening and free medicines in remote villages.",
      image: "https://picsum.photos/seed/rjscore2/800/600",
      category: "Medical",
      icon: <HeartPulse className="w-5 h-5" />,
      colSpan: "lg:col-span-1",
      funds: { raised: 45, goal: 100 }
    },
    {
      id: 3,
      title: "Mega Tree Plantation",
      shortDesc: "Creating green zones and fighting climate change.",
      image: "https://picsum.photos/seed/rjscore3/800/600",
      category: "Environment",
      icon: <Leaf className="w-5 h-5" />,
      colSpan: "lg:col-span-1",
      funds: { raised: 60, goal: 100 }
    },
    {
      id: 4,
      title: "Charitable Hospital Subsidies",
      shortDesc: "Ensuring no patient is turned away due to financial constraints.",
      image: "https://picsum.photos/seed/rjscore4/800/600",
      category: "Infrastructure",
      icon: <Stethoscope className="w-5 h-5" />,
      colSpan: "lg:col-span-2",
      funds: { raised: 30, goal: 100 }
    }
  ];

  return (
    <section id="work" className="py-16 md:py-24 bg-white border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <div className="inline-block bg-white border border-[#E5E2DA] text-[#1B4332] font-bold px-4 py-1.5 rounded-sm text-[11px] mb-4 uppercase tracking-widest">
                Current Programs
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1B4332] leading-tight">
                 We Act Where The Need Is Greatest.
              </h2>
           </div>
           
           <Link href="#donate" className="flex-shrink-0 bg-white border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#FAF9F6] px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 group">
             Support a Program
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 bg-[#FCFBFA]">
          {campaigns.map((camp, i) => (
            <motion.div
              key={camp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group flex flex-col bg-white border border-[#E5E2DA] rounded-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(27,67,50,0.08)] transition-all duration-300`}
            >
              <div className="relative h-56 w-full overflow-hidden border-b border-[#E5E2DA]">
                <Image 
                  src={camp.image}
                  alt={camp.title}
                  fill
                  loading="lazy"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-[#1B4332]/10 flex items-center justify-center text-[#1B4332] mb-6 rounded-none">
                  {camp.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B4332] mb-3">
                  {camp.title}
                </h3>
                <p className="text-[#6B7280] mb-8 flex-grow text-sm leading-relaxed">
                  {camp.shortDesc}
                </p>
                
                {/* Progress */}
                <div className="mt-auto pt-6 border-t border-[#E5E2DA]">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest mb-2">
                    <span className="text-[#8C867A]">Campaign Funding</span>
                    <span className="text-[#1B4332]">{camp.funds.raised}%</span>
                  </div>
                  <div className="w-full bg-[#E5E2DA] h-1.5 mb-6 overflow-hidden rounded-sm">
                    <div 
                      className="bg-[#1B4332] h-1.5 transition-all duration-1000" 
                      style={{ width: `${camp.funds.raised}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                     <Link href="#donate" className="text-[#D97706] text-xs font-bold uppercase tracking-widest hover:text-[#B45309] transition-colors flex items-center gap-1 group-hover:gap-2">
                        Contribute Now <ArrowRight className="w-4 h-4 ml-1 transition-all" />
                     </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
