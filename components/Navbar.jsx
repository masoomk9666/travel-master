'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Icons list se User aur ShoppingBag hata diye
import Image from "next/image";
import { dmSans } from '../app/layout';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#concerts', label: 'Concerts' },
    { href: '#', label: 'Festivals' },
    { href: '#', label: 'Sports' },
    { href: '#pickupPoints', label: 'Pickup Points' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 px-4 sm:px-6 ${
      isScrolled 
        ? 'border-b border-white/10 bg-black/90 backdrop-blur-md' 
        : 'border-b border-white/10 bg-black/10 backdrop-blur-md'
    } ${dmSans.className}`}>
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <Image
              src="/travel-logo.png"
              alt="TravelMaster Logo"
              width={120}
              height={32}
              className="object-contain sm:w-[150px] sm:h-[40px] w-[100px] h-[28px]"
              priority
            />
          </Link>

          {/* Center Navigation (Tablet/Desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[12px] lg:text-[14px] font-medium tracking-widest hover:text-white/70 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Button (Tablet/Desktop) */}
          <div className="hidden md:flex items-center">
            <Link 
              href="#" 
              className="bg-[#006DF2] hover:bg-blue-700 rounded-[6px] text-white px-4 lg:px-6 py-2 lg:py-2.5 text-[12px] lg:text-[14px] font-medium tracking-widest transition-all duration-300 shadow-lg shadow-blue-500/30 active:scale-95 whitespace-nowrap"
            >
              Find Your Bus
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu Panel */}
            <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top-4">
              <div className="flex flex-col px-6 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-sm font-bold uppercase tracking-widest py-4 border-b border-white/10 hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Button */}
                <Link 
                  href="#" 
                  className="mt-6 bg-[#006DF2] hover:bg-blue-700 text-white text-center py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Find Your Bus
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}