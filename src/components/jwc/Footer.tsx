import Link from 'next/link'
import { Phone, Mail, MapPin, Twitter, Facebook, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--jwc-navy))] text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-white/90">1-800-JWC-8500</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="text-white/90">info@jwcwindows.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span className="text-white/90">Nationwide Distribution</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-white/90 hover:text-white transition-colors">
                JWC8500 Hybrid
              </Link>
              <Link href="/specifications" className="block text-white/90 hover:text-white transition-colors">
                Technical Specs
              </Link>
              <Link href="/quote" className="block text-white/90 hover:text-white transition-colors">
                Request Quote
              </Link>
              <Link href="#" className="block text-white/90 hover:text-white transition-colors">
                Vinyl Series
              </Link>
              <Link href="#" className="block text-white/90 hover:text-white transition-colors">
                Aluminum-Clad Series
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <p className="text-white/90 mb-4">
              JWC Premium Windows - Established 1987
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} JWC Premium Windows. All rights reserved. | Certified Installer Network Available</p>
        </div>
      </div>
    </footer>
  )
}
