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
        {/* Hero Section - Luxurious & Elegant */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jwc-ivory))] via-[hsl(var(--jwc-sand))] to-white"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[hsl(var(--jwc-gold))] blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[hsl(var(--jwc-navy))] blur-[100px] rounded-full"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Hero Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--jwc-gold))]/15 to-transparent px-6 py-3 rounded-full border border-[hsl(var(--jwc-gold))]/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--jwc-gold))] animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wide text-[hsl(var(--jwc-navy))]">
                    Premium Collection
                  </span>
                  <span className="text-[hsl(var(--jwc-gold))]">•</span>
                  <span className="text-sm font-medium text-[hsl(var(--jwc-charcoal))]">
                    JWC8500 Hybrid Series
                  </span>
                </div>
                <h1 className="mb-0">
                  JWC8500 Hybrid Windows
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full"></div>
                <p className="text-xl leading-relaxed text-[hsl(var(--foreground))]/80">
                  Experience the pinnacle of window engineering. Vinyl interior elegance meets aluminum
                  exterior resilience, delivering 22% superior energy efficiency with 26% expanded glass area.
                </p>
                <div className="grid grid-cols-3 gap-6 p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-[hsl(var(--jwc-border-elegant))] shadow-luxury">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-[hsl(var(--jwc-navy))]">0.20</div>
                    <div className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-medium">
                      U-Factor
                    </div>
                  </div>
                  <div className="text-center space-y-2 border-x border-[hsl(var(--jwc-border-elegant))]">
                    <div className="text-4xl font-bold text-[hsl(var(--jwc-navy))]">35dB</div>
                    <div className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-medium">
                      Noise Reduction
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-[hsl(var(--jwc-gold))]">+22%</div>
                    <div className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-medium">
                      Efficiency
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/quote"
                    className="no-underline group relative bg-gradient-to-r from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] text-white px-10 py-4 rounded-xl font-semibold hover:shadow-gold transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">Request Quote</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link
                    href="/specifications"
                    className="no-underline bg-white/80 backdrop-blur-sm text-[hsl(var(--jwc-navy))] px-10 py-4 rounded-xl font-semibold border-2 border-[hsl(var(--jwc-navy))]/20 hover:border-[hsl(var(--jwc-gold))] hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>

              {/* Hero Image with Hotspots */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury luxury-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jwc-sand))] to-[hsl(var(--jwc-ivory))] flex items-center justify-center p-8 border border-[hsl(var(--jwc-border-elegant))]">
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

        {/* Key Benefits - Luxury Visual Cards */}
        <section className="py-24 bg-gradient-to-b from-white to-[hsl(var(--jwc-sand))]">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block">
                <h2 className="mb-0">Why Choose JWC8500 Hybrid?</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mt-4"></div>
              </div>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
                Combining the finest vinyl and aluminum technology for unparalleled performance
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-[hsl(var(--jwc-border-elegant))] shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--jwc-gold))]/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] rounded-2xl flex items-center justify-center mb-6 shadow-navy group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--jwc-navy))]">26% More Glass</h3>
                  <p className="text-[hsl(var(--foreground))]/75 mb-6 leading-relaxed">
                    Lower profile aluminum frame increases visible glass area for maximum natural light
                    and unobstructed views.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-[hsl(var(--jwc-gold))] flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Slimmer frame profiles</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-[hsl(var(--jwc-gold))] flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Enhanced curb appeal</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-[hsl(var(--jwc-gold))] flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Better views</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-[hsl(var(--jwc-border-elegant))] shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Thermometer className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--jwc-navy))]">22% Energy Savings</h3>
                  <p className="text-[hsl(var(--foreground))]/75 mb-6 leading-relaxed">
                    Advanced thermal break technology and premium glass packages exceed 2030 building
                    code targets.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Lower utility bills</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Rebate eligible</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Year-round comfort</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-[hsl(var(--jwc-border-elegant))] shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--jwc-navy))]">Superior Durability</h3>
                  <p className="text-[hsl(var(--foreground))]/75 mb-6 leading-relaxed">
                    Aluminum exterior withstands harsh weather while vinyl interior never needs
                    painting or maintenance.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Weather resistant</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Low maintenance</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">10-year warranty</span>
                    </li>
                  </ul>
                </div>
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

        {/* Interactive Customization Section - Luxury Edition */}
        <section className="py-24 bg-gradient-to-b from-[hsl(var(--jwc-sand))] to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--jwc-gold))] blur-[100px] rounded-full"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block">
                <h2 className="mb-0">Design Your Perfect Window</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mt-4"></div>
              </div>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
                Customize colors, grilles, and glass technology to match your project requirements
              </p>
            </div>

            {/* Luxury Customization Card */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-luxury border border-[hsl(var(--jwc-border-elegant))] p-12">
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

        {/* Technical Specifications Preview - Luxury Dark Section */}
        <section className="py-24 bg-gradient-to-br from-[hsl(var(--jwc-navy))] via-[hsl(var(--jwc-navy-dark))] to-[hsl(var(--jwc-navy))] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--jwc-gold))] blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white blur-[120px] rounded-full"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block">
                <h2 className="text-white mb-0">Technical Performance</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mt-4"></div>
              </div>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Engineered to exceed Canadian building code requirements
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center group">
                <div className="mb-6 inline-block p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/50 transition-all duration-300 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-2">0.20</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">U-Factor Rating</div>
                <div className="text-xs text-white/50">Tri-pane configuration</div>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/50 transition-all duration-300 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-2">35dB</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">Sound Reduction</div>
                <div className="text-xs text-white/50">Tri-pane acoustic glass</div>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/50 transition-all duration-300 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] bg-clip-text text-transparent mb-2">Class 5</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">Wind Resistance</div>
                <div className="text-xs text-white/50">Structural performance</div>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/50 transition-all duration-300 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] bg-clip-text text-transparent mb-2">ER 44</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">Energy Rating</div>
                <div className="text-xs text-white/50">Exceeds 2030 targets</div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/specifications"
                className="no-underline inline-block bg-white text-[hsl(var(--jwc-navy))] px-10 py-4 rounded-xl font-semibold hover:bg-[hsl(var(--jwc-gold))] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
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

        {/* Final CTA Section - Luxury Conversion */}
        <section className="py-28 bg-gradient-to-br from-[hsl(var(--jwc-navy))] via-[hsl(var(--jwc-navy-dark))] to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--jwc-gold))] blur-[200px] rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          </div>
          <div className="container mx-auto px-8 text-center relative z-10">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 bg-[hsl(var(--jwc-gold))]/20 backdrop-blur-sm px-6 py-2 rounded-full border border-[hsl(var(--jwc-gold))]/30 mb-8">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--jwc-gold))] animate-pulse"></div>
                <span className="text-sm font-medium text-[hsl(var(--jwc-gold-light))] uppercase tracking-wider">
                  Premium Windows Solution
                </span>
              </div>
            </div>
            <h2 className="mb-6 text-white max-w-3xl mx-auto">Ready to Elevate Your Building?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a detailed quote and discover how the JWC8500 Hybrid can enhance
              your project with superior performance and energy efficiency.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <Link
                href="/quote"
                className="no-underline group relative bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] text-[hsl(var(--jwc-navy))] px-12 py-5 rounded-xl font-bold text-lg hover:shadow-gold transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Request Your Quote Now</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/specifications"
                className="no-underline bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-[hsl(var(--jwc-gold))] transition-all duration-300 hover:-translate-y-1"
              >
                Download Specifications
              </Link>
            </div>
            <div className="inline-block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-sm text-white/60 mb-2 uppercase tracking-wider font-medium">
                Questions? We're here to help
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-white/80">
                <a href="tel:1-800-JWC-8500" className="no-underline hover:text-[hsl(var(--jwc-gold))] transition-colors font-medium">
                  📞 1-800-JWC-8500
                </a>
                <span className="text-white/30">•</span>
                <a href="mailto:sales@jwc.com" className="no-underline hover:text-[hsl(var(--jwc-gold))] transition-colors font-medium">
                  ✉️ sales@jwc.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
