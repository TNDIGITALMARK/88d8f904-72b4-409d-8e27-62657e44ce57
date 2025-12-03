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
        {/* Hero Section - Enhanced Interactive */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div>
                <div className="inline-block bg-[hsl(var(--jwc-navy))]/10 px-4 py-2 rounded-full text-sm font-medium text-[hsl(var(--jwc-navy))] mb-4">
                  Windows › Hybrid Series › JWC8500
                </div>
                <h1 className="mb-4">JWC8500 Hybrid Windows</h1>
                <p className="text-xl text-gray-700 mb-6">
                  Vinyl interior with aluminum exterior cladding. Up to 22% better energy efficiency
                  with 26% more glass area.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8 bg-white p-6 rounded-lg shadow-md">
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--jwc-navy))] mb-1">0.20</div>
                    <div className="text-xs text-gray-600">U-Factor</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--jwc-navy))] mb-1">35dB</div>
                    <div className="text-xs text-gray-600">Noise Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--jwc-navy))] mb-1">+22%</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="bg-[hsl(var(--jwc-navy))] text-white px-8 py-4 rounded font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all hover:-translate-y-0.5 shadow-navy inline-flex items-center gap-2"
                  >
                    Request Quote
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/specifications"
                    className="bg-white text-[hsl(var(--jwc-navy))] px-8 py-4 rounded font-medium border-2 border-[hsl(var(--jwc-navy))] hover:bg-[hsl(var(--jwc-navy))] hover:text-white transition-all"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>

              {/* Hero Image with Hotspots */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-3">Why Choose JWC8500 Hybrid?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Combining the best of vinyl and aluminum technology for superior performance
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-100">
                <div className="w-14 h-14 bg-[hsl(var(--jwc-navy))] rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">26% More Glass</h3>
                <p className="text-gray-700 mb-4">
                  Lower profile aluminum frame increases visible glass area for maximum natural light
                  and unobstructed views.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Slimmer frame profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Enhanced curb appeal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Better views
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border border-green-100">
                <div className="w-14 h-14 bg-[hsl(var(--jwc-navy))] rounded-full flex items-center justify-center mb-4">
                  <Thermometer className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">22% Energy Savings</h3>
                <p className="text-gray-700 mb-4">
                  Advanced thermal break technology and premium glass packages exceed 2030 building
                  code targets.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Lower utility bills
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Rebate eligible
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Year-round comfort
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg border border-purple-100">
                <div className="w-14 h-14 bg-[hsl(var(--jwc-navy))] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Superior Durability</h3>
                <p className="text-gray-700 mb-4">
                  Aluminum exterior withstands harsh weather while vinyl interior never needs
                  painting or maintenance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Weather resistant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    Low maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[hsl(var(--jwc-navy))]" />
                    10-year warranty
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Window Styles Showcase */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <WindowStylesShowcase />
          </div>
        </section>

        {/* Interactive Customization Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="mb-3">Design Your Perfect Window</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Customize colors, grilles, and glass technology to match your project requirements
              </p>
            </div>

            {/* Tabs for Customization Options */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Color Customization */}
                <div className="mb-16">
                  <ColorSelector />
                </div>

                {/* Grille Pattern Selection */}
                <div className="mb-16 pt-16 border-t">
                  <GrillePatternSelector />
                </div>

                {/* Glass Technology Selection */}
                <div className="pt-16 border-t">
                  <GlassTypeSelector />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-3">Installation Gallery</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              See the JWC8500 in real-world applications across residential and commercial projects
            </p>
            <ProductGallery />
          </div>
        </section>

        {/* Technical Specifications Preview */}
        <section className="py-16 bg-[hsl(var(--jwc-navy))] text-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-2 text-white">Technical Performance</h2>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              Engineered to exceed Canadian building code requirements
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">0.20</div>
                <div className="text-sm text-white/80 mb-2">U-Factor Rating</div>
                <div className="text-xs text-white/60">Tri-pane configuration</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">35dB</div>
                <div className="text-sm text-white/80 mb-2">Sound Reduction</div>
                <div className="text-xs text-white/60">Tri-pane acoustic glass</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">Class 5</div>
                <div className="text-sm text-white/80 mb-2">Wind Resistance</div>
                <div className="text-xs text-white/60">Structural performance</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">ER 44</div>
                <div className="text-sm text-white/80 mb-2">Energy Rating</div>
                <div className="text-xs text-white/60">Exceeds 2030 targets</div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/specifications"
                className="inline-block bg-white text-[hsl(var(--jwc-navy))] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                View Complete Specifications
              </Link>
            </div>
          </div>
        </section>

        {/* Product Features Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Advanced Features</h2>
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
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="mb-4 text-white">Ready to Upgrade Your Building?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a detailed quote and discover how the JWC8500 Hybrid can enhance
              your project with superior performance and energy efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-block bg-white text-[hsl(var(--jwc-navy))] px-10 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all text-lg shadow-lg"
              >
                Request Your Quote Now
              </Link>
              <Link
                href="/specifications"
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-medium hover:bg-white/10 transition-all text-lg"
              >
                Download Specifications
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Questions? Call us at 1-800-JWC-8500 or email sales@jwc.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
