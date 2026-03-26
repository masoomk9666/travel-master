'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Icons list se User aur ShoppingBag hata diye
import Image from "next/image";
import { dmSans } from '../app/layout';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Concerts' },
    { href: '/news', label: 'Festivals' },
    { href: '/pages', label: 'Sports' },
  ]

  return (
    <nav className={`fixed top-0 z-50 w-full border-b border-white/10 bg-black/10 backdrop-blur-md ${dmSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <Image
              src="/travel-logo.png"
              alt="TravelMaster Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Center Navigation (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[14px] font-medium  tracking-widest hover:text-white/70 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/find-bus" 
              className="bg-[#006DF2] hover:bg-blue-700 rounded-[6px] text-white px-6 py-2.5 text-[14px] font-medium  tracking-widest transition-all duration-300 shadow-lg shadow-blue-500/30 active:scale-95"
            >
              Find Your Bus
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 pb-8 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4 px-6 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-bold uppercase tracking-widest py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Button */}
              <Link 
                href="/find-bus" 
                className="mt-4 bg-[#006DF2] text-white text-center py-3 text-sm font-bold uppercase tracking-widest active:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Find Your Bus
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}