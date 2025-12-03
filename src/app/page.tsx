"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/jwc/Header'
import { Footer } from '@/components/jwc/Footer'
import { SpecCard } from '@/components/jwc/SpecCard'
import { InteractiveHotspot } from '@/components/jwc/InteractiveHotspot'
import { ColorSelector } from '@/components/jwc/ColorSelector'
import { GrillePatternSelector } from '@/components/jwc/GrillePatternSelector'
import { GlassTypeSelector } from '@/components/jwc/GlassTypeSelector'
import { WindowStylesShowcase } from '@/components/jwc/WindowStylesShowcase'
import { ProductGallery } from '@/components/jwc/ProductGallery'
import { FAQSection } from '@/components/jwc/FAQSection'
import {
  Thermometer,
  Volume2,
  Wind,
  Shield,
  Sparkles,
  Lock,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  TrendingUp
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero Section - Luxe and Elegant */}
        <section className="gradient-luxe py-20 md:py-32">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Hero Content */}
              <div className="animate-fadeInUp">
                <div className="inline-block bg-[hsl(var(--jwc-navy))]/10 px-5 py-2.5 rounded-full text-sm font-medium text-[hsl(var(--jwc-navy))] mb-6 backdrop-blur-sm">
                  Premium Hybrid Collection
                </div>
                <h1 className="mb-6">Elegance Meets Innovation</h1>
                <p className="text-xl text-gray-600 mb-8 text-elegant leading-relaxed">
                  Experience the perfect harmony of refined aesthetics and exceptional performance.
                  Our JWC8500 Hybrid Windows transform your living spaces with 26% more natural light
                  and 22% superior energy efficiency.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[hsl(var(--jwc-silver))]">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[hsl(var(--jwc-navy))] mb-2 text-luxe">0.20</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">U-Factor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[hsl(var(--jwc-navy))] mb-2 text-luxe">35dB</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Quiet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[hsl(var(--jwc-navy))] mb-2 text-luxe">+22%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Efficient</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-5">
                  <Link
                    href="/quote"
                    className="bg-[hsl(var(--jwc-navy))] text-white px-10 py-5 rounded-xl font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all hover:-translate-y-1 shadow-navy inline-flex items-center gap-3 text-lg"
                  >
                    Explore Your Options
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/specifications"
                    className="bg-white/90 backdrop-blur-sm text-[hsl(var(--jwc-navy))] px-10 py-5 rounded-xl font-medium border-2 border-[hsl(var(--jwc-navy))]/20 hover:border-[hsl(var(--jwc-navy))] hover:bg-white transition-all text-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Hero Image with Hotspots */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jwc-pearl))] to-gray-100 flex items-center justify-center p-8">
                  <svg viewBox="0 0 600 450" className="w-full h-full">
                    <defs>
                      <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e3f2fd" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#bbdefb" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="450" fill="#f8fafc" />
                    <rect
                      x="100"
                      y="75"
                      width="400"
                      height="300"
                      fill="none"
                      stroke="#1a365d"
                      strokeWidth="12"
                    />
                    <line x1="300" y1="75" x2="300" y2="375" stroke="#1a365d" strokeWidth="8" />
                    <line x1="100" y1="225" x2="500" y2="225" stroke="#1a365d" strokeWidth="8" />
                    <rect x="112" y="87" width="176" height="126" fill="url(#glassGradient)" />
                    <rect x="312" y="87" width="176" height="126" fill="url(#glassGradient)" />
                    <rect x="112" y="237" width="176" height="126" fill="url(#glassGradient)" />
                    <rect x="312" y="237" width="176" height="126" fill="url(#glassGradient)" />
                    <circle cx="485" cy="225" r="10" fill="#1a365d" />
                    <circle cx="485" cy="225" r="6" fill="#ffffff" />
                  </svg>
                </div>
                <InteractiveHotspot
                  x={20}
                  y={50}
                  title="Aluminum Exterior Cladding"
                  description="Extruded aluminum with thermal break provides superior weather protection and 26% lower profile for maximum glass area."
                />
                <InteractiveHotspot
                  x={50}
                  y={30}
                  title="Tri-Pane Glass Technology"
                  description="Triple-pane Low-E glass with krypton fill achieves 0.20 U-Factor for exceptional energy efficiency and 35dB sound reduction."
                />
                <InteractiveHotspot
                  x={82}
                  y={50}
                  title="Multi-Point Locking System"
                  description="Contemporary nesting handle with patent-pending hardware cover and multi-point lock exceeds security standards."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits - Visual Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-4">Designed for Your Lifestyle</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-elegant">
              Experience the perfect balance of beauty, comfort, and sustainability in every detail
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-blue-50/50 to-white p-10 rounded-2xl border border-blue-100/50 hover-lift">
                <div className="w-16 h-16 bg-[hsl(var(--jwc-navy))] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Expansive Views</h3>
                <p className="text-gray-600 mb-5 text-elegant leading-relaxed">
                  Embrace 26% more natural light with our refined frame design. Transform your spaces into bright, airy sanctuaries that connect you with the outdoors.
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Elegant slim profiles
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Stunning aesthetics
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Panoramic perspectives
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50/50 to-white p-10 rounded-2xl border border-green-100/50 hover-lift">
                <div className="w-16 h-16 bg-[hsl(var(--jwc-navy))] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Thermometer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Sustainable Comfort</h3>
                <p className="text-gray-600 mb-5 text-elegant leading-relaxed">
                  Enjoy 22% greater energy efficiency that keeps your home perfectly comfortable while reducing your environmental footprint and energy costs.
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Reduced energy costs
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Eco-conscious living
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Perfect year-round
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50/50 to-white p-10 rounded-2xl border border-purple-100/50 hover-lift">
                <div className="w-16 h-16 bg-[hsl(var(--jwc-navy))] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Lasting Beauty</h3>
                <p className="text-gray-600 mb-5 text-elegant leading-relaxed">
                  Premium materials and meticulous craftsmanship ensure your windows remain beautiful for decades with minimal care, protected by our comprehensive warranty.
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Weather resilient
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Effortless upkeep
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[hsl(var(--jwc-navy))]" />
                    Lifetime guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Window Styles Showcase */}
        <section className="py-20 bg-pearl">
          <div className="container mx-auto px-8">
            <WindowStylesShowcase />
          </div>
        </section>

        {/* Interactive Customization Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="mb-5">Create Your Vision</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-elegant text-lg leading-relaxed">
                Personalize every detail to reflect your unique style and complement your home's architecture
              </p>
            </div>

            {/* Tabs for Customization Options */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-white to-[hsl(var(--jwc-pearl))] rounded-2xl shadow-luxe p-12 border border-[hsl(var(--jwc-silver))]">
                {/* Color Customization */}
                <div className="mb-20">
                  <ColorSelector />
                </div>

                {/* Grille Pattern Selection */}
                <div className="mb-20 pt-20 border-t border-[hsl(var(--jwc-silver))]/30">
                  <GrillePatternSelector />
                </div>

                {/* Glass Technology Selection */}
                <div className="pt-20 border-t border-[hsl(var(--jwc-silver))]/30">
                  <GlassTypeSelector />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="py-24 bg-pearl">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-5">Inspired Living</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-elegant text-lg leading-relaxed">
              Discover how homeowners have transformed their spaces with the beauty and performance of JWC8500
            </p>
            <ProductGallery />
          </div>
        </section>

        {/* Technical Specifications Preview */}
        <section className="py-24 bg-[hsl(var(--jwc-navy))] text-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-5 text-white">Excellence in Every Detail</h2>
            <p className="text-center text-white/90 mb-16 max-w-2xl mx-auto text-elegant text-lg leading-relaxed">
              Precision engineering meets uncompromising quality standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4 text-luxe">0.20</div>
                <div className="text-sm text-white/90 mb-2 font-medium uppercase tracking-wider">U-Factor</div>
                <div className="text-xs text-white/70 text-elegant">Superior insulation</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold mb-4 text-luxe">35dB</div>
                <div className="text-sm text-white/90 mb-2 font-medium uppercase tracking-wider">Acoustics</div>
                <div className="text-xs text-white/70 text-elegant">Peaceful serenity</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold mb-4 text-luxe">Class 5</div>
                <div className="text-sm text-white/90 mb-2 font-medium uppercase tracking-wider">Protection</div>
                <div className="text-xs text-white/70 text-elegant">Ultimate strength</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold mb-4 text-luxe">ER 44</div>
                <div className="text-sm text-white/90 mb-2 font-medium uppercase tracking-wider">Efficiency</div>
                <div className="text-xs text-white/70 text-elegant">Future-ready</div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/specifications"
                className="inline-block bg-white text-[hsl(var(--jwc-navy))] px-12 py-5 rounded-xl font-medium hover:bg-white/95 transition-all hover:-translate-y-1 shadow-lg text-lg"
              >
                Explore Specifications
              </Link>
            </div>
          </div>
        </section>

        {/* Product Features Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-16">Sophisticated Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <SpecCard
                icon={Shield}
                title="Security"
                value="Multi-Point Lock"
                description="Contemporary nesting handle with patent-pending hardware cover and reinforced strike plates"
              />
              <SpecCard
                icon={Thermometer}
                title="Thermal Performance"
                value="0.20 U-Factor"
                description="Advanced Low-E glass with krypton gas fill and thermal break technology"
              />
              <SpecCard
                icon={Volume2}
                title="Acoustic Control"
                value="35 Decibels"
                description="Tri-pane laminated glass construction minimizes exterior noise pollution"
              />
              <SpecCard
                icon={Wind}
                title="Weather Sealing"
                value="Triple EPDM"
                description="Three-point weather stripping creates airtight barrier against drafts and moisture"
              />
              <SpecCard
                icon={Sparkles}
                title="Low Maintenance"
                value="Lifetime Finish"
                description="Aluminum exterior and vinyl interior never need painting or refinishing"
              />
              <SpecCard
                icon={Maximize2}
                title="Glass Area"
                value="+26% Larger"
                description="Lower profile frame maximizes visible glass for enhanced views and natural light"
              />
            </div>
          </div>
        </section>

        {/* Comparison Chart */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-3">Performance Comparison</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              See how the JWC8500 Hybrid outperforms standard window systems
            </p>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[hsl(var(--jwc-navy))] text-white">
                    <th className="py-4 px-6 text-left font-semibold">Feature</th>
                    <th className="py-4 px-6 text-left font-semibold">JWC8500 Hybrid</th>
                    <th className="py-4 px-6 text-left font-semibold">Standard Vinyl</th>
                    <th className="py-4 px-6 text-left font-semibold">Standard Aluminum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Frame Material</td>
                    <td className="py-4 px-6 text-[hsl(var(--jwc-navy))] font-semibold">
                      Hybrid (Vinyl + Aluminum)
                    </td>
                    <td className="py-4 px-6 text-gray-500">Vinyl Only</td>
                    <td className="py-4 px-6 text-gray-500">Aluminum Only</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">U-Factor (Best)</td>
                    <td className="py-4 px-6 text-[hsl(var(--jwc-navy))] font-semibold">0.20</td>
                    <td className="py-4 px-6 text-gray-500">0.28</td>
                    <td className="py-4 px-6 text-gray-500">0.35</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Frame Profile</td>
                    <td className="py-4 px-6 text-[hsl(var(--jwc-navy))] font-semibold">
                      26% Lower
                    </td>
                    <td className="py-4 px-6 text-gray-500">Standard</td>
                    <td className="py-4 px-6 text-gray-500">Standard</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Sound Reduction</td>
                    <td className="py-4 px-6 text-[hsl(var(--jwc-navy))] font-semibold">
                      Up to 35dB
                    </td>
                    <td className="py-4 px-6 text-gray-500">25dB</td>
                    <td className="py-4 px-6 text-gray-500">28dB</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Exterior Durability</td>
                    <td className="py-4 px-6 text-[hsl(var(--jwc-navy))] font-semibold">
                      Excellent
                    </td>
                    <td className="py-4 px-6 text-gray-500">Good</td>
                    <td className="py-4 px-6 text-gray-500">Very Good</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium">Energy Efficiency</td>
                    <td className="py-4 px-6 text-[hsl(var(--jwc-navy))] font-semibold">
                      22% Better
                    </td>
                    <td className="py-4 px-6 text-gray-500">Baseline</td>
                    <td className="py-4 px-6 text-gray-500">Poor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8 max-w-4xl">
            <FAQSection />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-28 bg-gradient-to-br from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="mb-6 text-white">Begin Your Transformation</h2>
            <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto text-elegant leading-relaxed">
              Let us help you bring your vision to life with windows that combine timeless elegance,
              exceptional comfort, and sustainable performance.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <Link
                href="/quote"
                className="inline-block bg-white text-[hsl(var(--jwc-navy))] px-12 py-5 rounded-xl font-medium hover:bg-white/95 transition-all hover:-translate-y-1 text-lg shadow-lg"
              >
                Get Your Personalized Quote
              </Link>
              <Link
                href="/specifications"
                className="inline-block bg-transparent border-2 border-white/80 text-white px-12 py-5 rounded-xl font-medium hover:bg-white/10 hover:border-white transition-all text-lg"
              >
                View Full Specifications
              </Link>
            </div>
            <p className="text-sm text-white/80 text-elegant">
              Questions? We're here to help at 1-800-JWC-8500 or sales@jwc.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
