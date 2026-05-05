'use client';

import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E2DA] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-[#1B4332] w-10 h-10 rounded-sm flex items-center justify-center text-white font-bold text-xl">
                 R
              </div>
              <div className="leading-none">
                <span className="block text-lg font-bold tracking-tight text-[#1B4332]">
                  RJS FOUNDATION
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8C867A]">
                  Charitable Trust • Est. 2015
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-[#4A463F] text-sm font-medium hover:text-[#1B4332] transition-colors">About Us</Link>
            <Link href="#work" className="text-[#4A463F] text-sm font-medium hover:text-[#1B4332] transition-colors">Our Work</Link>
            <Link href="#impact" className="text-[#4A463F] text-sm font-medium hover:text-[#1B4332] transition-colors">Impact</Link>
            <Link href="#csr" className="text-[#4A463F] text-sm font-medium hover:text-[#1B4332] transition-colors">CSR Partners</Link>
            
            <div className="flex items-center gap-4 ml-4">
              <Link href="#contact" className="text-[#1B4332] border-2 border-[#1B4332] hover:bg-[#FAF9F6] px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-sm transition-all">
                Contact Us
              </Link>
              <Link href="#donate" className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm flex items-center gap-2">
                Donate Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1a3626] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-[#E5E2DA] shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-sm text-sm font-medium text-[#4A463F] hover:text-[#1B4332] hover:bg-[#FAF9F6]">About Us</Link>
            <Link href="#work" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-sm text-sm font-medium text-[#4A463F] hover:text-[#1B4332] hover:bg-[#FAF9F6]">Our Work</Link>
            <Link href="#impact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-sm text-sm font-medium text-[#4A463F] hover:text-[#1B4332] hover:bg-[#FAF9F6]">Impact</Link>
            <Link href="#csr" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-sm text-sm font-medium text-[#4A463F] hover:text-[#1B4332] hover:bg-[#FAF9F6]">CSR Partners</Link>
            
            <div className="mt-6 pt-4 border-t border-[#E5E2DA] flex flex-col gap-3 px-3">
               <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center text-[#1B4332] border-2 border-[#1B4332] px-5 py-3 rounded-sm text-sm font-bold uppercase tracking-wider">
                Contact Us
              </Link>
              <Link href="#donate" onClick={() => setIsOpen(false)} className="w-full text-center bg-[#D97706] text-white px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
