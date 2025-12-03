"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--jwc-navy))] text-white shadow-md">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/generated/jwc-logo.png"
              alt="JWC Windows"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Product
            </Link>
            <Link
              href="/specifications"
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Specifications
            </Link>
            <Link
              href="/quote"
              className="bg-white text-[hsl(var(--jwc-navy))] px-6 py-2.5 rounded font-medium hover:bg-white/90 transition-all"
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/specifications"
                className="text-white hover:text-white/80 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Specifications
              </Link>
              <Link
                href="/quote"
                className="bg-white text-[hsl(var(--jwc-navy))] px-6 py-2.5 rounded font-medium hover:bg-white/90 transition-all inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
