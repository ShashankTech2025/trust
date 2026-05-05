'use client';

import { motion } from 'motion/react';
import {  HeartPulse, TreePine, Hospital, Droplet } from 'lucide-react';

export function Impact() {
  const stats = [
    {
      id: 1,
      number: "50,000+",
      label: "Patients Treated Free",
      description: "Providing critical cancer care, accommodations, and medicines at no cost.",
      icon: <HeartPulse className="w-8 h-8 text-[#1a3626]" />,
      delay: 0.1
    },
    {
      id: 2,
      number: "200+",
      label: "Health Camps Conducted",
      description: "Reaching remote villages across Maharashtra with mobile medical teams.",
      icon: <Hospital className="w-8 h-8 text-[#1a3626]" />,
      delay: 0.2
    },
    {
      id: 3,
      number: "10,000+",
      label: "Trees Planted",
      description: "Restoring the environment and creating a greener future for the next generation.",
      icon: <TreePine className="w-8 h-8 text-[#1a3626]" />,
      delay: 0.3
    },
    {
      id: 4,
      number: "5,000+",
      label: "Blood Units Collected",
      description: "Regular blood donation drives supporting major hospitals in the region.",
      icon: <Droplet className="w-8 h-8 text-[#1a3626]" />,
      delay: 0.4
    }
  ];

  return (
    <section id="impact" className="bg-white border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-serif text-[#1B4332] mb-6"
           >
              Measurable Impact. <br/><span className="italic font-light">Meaningful Change.</span>
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-[#5C574F]"
           >
             Every rupee donated and every hour volunteered translates directly into lives saved, families supported, and environments restored.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E2DA] bg-[#FCFBFA]">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="relative text-center group p-8 border-r border-b border-[#E5E2DA] bg-white hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300 z-10 hover:z-20"
            >
              {/* Number */}
              <h3 className="text-4xl font-serif font-bold text-[#1B4332] mb-2 tracking-tight">
                {stat.number}
              </h3>
              
              {/* Label */}
              <h4 className="text-xs uppercase tracking-widest text-[#8C867A] font-bold mb-4">{stat.label}</h4>
              
              {/* Description */}
              <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
