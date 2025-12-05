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
import { ProductStructuredData, OrganizationStructuredData, FAQStructuredData } from '@/components/structured-data'
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
      {/* Structured Data for SEO */}
      <ProductStructuredData
        name="JWC8500 Hybrid Windows"
        description="Premium hybrid window system featuring aluminum exterior cladding, vinyl interior, and tri-pane glass technology for superior energy efficiency and comfort."
        offers={{
          price: "850.00",
          priceCurrency: "USD",
          availability: "InStock"
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 287
        }}
      />
      <OrganizationStructuredData
        name="JWC Windows"
        contactPoint={{
          telephone: "+1-800-592-8500",
          contactType: "sales",
          areaServed: "US"
        }}
      />

      <Header />
      <main className="pt-[72px]">
        {/* Hero Section - Modern Luxurious & Elegant */}
        <section className="relative overflow-hidden py-24 md:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jwc-ivory))] via-white to-[hsl(var(--jwc-sand))]"></div>
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[hsl(var(--jwc-gold))] blur-[140px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[hsl(var(--jwc-navy))] blur-[120px] rounded-full"></div>
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
                  Transform Your Living Space
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full"></div>
                <p className="text-xl leading-relaxed text-[hsl(var(--foreground))]/80">
                  Discover windows that elevate your everyday moments. The JWC8500 Hybrid seamlessly blends
                  timeless aesthetics with intelligent design, bringing 26% more natural light into your home
                  while reducing energy costs by 22%. Live better, naturally.
                </p>
                <div className="grid grid-cols-3 gap-6 p-10 bg-white/70 backdrop-blur-xl rounded-3xl border border-[hsl(var(--jwc-border-elegant))]/60 shadow-luxury">
                  <div className="text-center space-y-2">
                    <div className="text-5xl font-bold text-[hsl(var(--jwc-navy))] tracking-tight">0.20</div>
                    <div className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-semibold">
                      U-Factor
                    </div>
                  </div>
                  <div className="text-center space-y-2 border-x border-[hsl(var(--jwc-border-elegant))]/40">
                    <div className="text-5xl font-bold text-[hsl(var(--jwc-navy))] tracking-tight">35dB</div>
                    <div className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-semibold">
                      Noise Reduction
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-5xl font-bold text-[hsl(var(--jwc-gold))] tracking-tight">+22%</div>
                    <div className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-semibold">
                      Efficiency
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/quote"
                    className="no-underline group relative bg-gradient-to-r from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] text-white px-12 py-4.5 rounded-2xl font-semibold hover:shadow-gold transition-all duration-400 hover:-translate-y-1.5 inline-flex items-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Transformation</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  </Link>
                  <Link
                    href="/specifications"
                    className="no-underline bg-white/85 backdrop-blur-md text-[hsl(var(--jwc-navy))] px-12 py-4.5 rounded-2xl font-semibold border border-[hsl(var(--jwc-navy))]/15 hover:border-[hsl(var(--jwc-gold))] hover:bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg"
                  >
                    Technical Details
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

        {/* Key Benefits - Modern Luxury Visual Cards */}
        <section className="py-28 bg-gradient-to-b from-white via-[hsl(var(--jwc-ivory))] to-[hsl(var(--jwc-sand))]">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20 space-y-5">
              <div className="inline-block">
                <h2 className="mb-0">Elevate Your Everyday Living</h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mt-5"></div>
              </div>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
                Experience the perfect harmony of beauty and performance that transforms how you live in your home
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group bg-white/90 backdrop-blur-md p-12 rounded-3xl border border-[hsl(var(--jwc-border-elegant))]/50 shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--jwc-gold))]/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] rounded-2xl flex items-center justify-center mb-6 shadow-navy group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--jwc-navy))]">Brighter Mornings</h3>
                  <p className="text-[hsl(var(--foreground))]/75 mb-6 leading-relaxed">
                    Wake up to 26% more natural sunlight flooding your space. Slim frames create seamless
                    connections to the outdoors, transforming how you experience your home throughout the day.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-[hsl(var(--jwc-gold))] flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">More natural light, better mood</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-[hsl(var(--jwc-gold))] flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Panoramic views of your garden</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-[hsl(var(--jwc-gold))] flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Effortless indoor-outdoor flow</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-md p-12 rounded-3xl border border-[hsl(var(--jwc-border-elegant))]/50 shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-400">
                    <Thermometer className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--jwc-navy))]">Comfort in Every Season</h3>
                  <p className="text-[hsl(var(--foreground))]/75 mb-6 leading-relaxed">
                    Stay cozy in winter, cool in summer. Our advanced thermal technology creates the perfect
                    climate year-round while saving you 22% on energy costs. Comfort that feels effortless.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Consistent room temperatures</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">No more drafty corners</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Reduced heating & cooling costs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-md p-12 rounded-3xl border border-[hsl(var(--jwc-border-elegant))]/50 shadow-lg hover:shadow-luxury transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-400">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--jwc-navy))]">Peace of Mind, Always</h3>
                  <p className="text-[hsl(var(--foreground))]/75 mb-6 leading-relaxed">
                    Built to last through storms, seasons, and decades. Spend your weekends enjoying life,
                    not maintaining windows. Our hybrid design stays beautiful with virtually no effort.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Zero painting, ever</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Family-safe security locks</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0" />
                      <span className="text-[hsl(var(--foreground))]/70">Backed by 10-year warranty</span>
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

        {/* Lifestyle-Focused Section - How Windows Transform Your Home */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block">
                <h2 className="mb-0">More Than Windows. A Lifestyle Upgrade.</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mt-4"></div>
              </div>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
                Imagine starting every morning bathed in natural light, sipping coffee in perfect comfort,
                and enjoying crystal-clear views of your surroundings. This is life with JWC8500.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--jwc-gold))]/15 to-transparent px-4 py-2 rounded-full border border-[hsl(var(--jwc-gold))]/20">
                  <Sparkles className="w-4 h-4 text-[hsl(var(--jwc-gold))]" />
                  <span className="text-sm font-medium text-[hsl(var(--jwc-navy))]">Morning Ritual</span>
                </div>
                <h3 className="text-3xl font-semibold text-[hsl(var(--jwc-navy))]">
                  Natural Light That Changes Everything
                </h3>
                <p className="text-lg text-[hsl(var(--foreground))]/75 leading-relaxed">
                  Our clients tell us their mornings feel different now. The 26% increase in glass area means
                  rooms are flooded with gentle, natural sunlight that makes every space feel alive. Your home
                  office becomes more productive. Your kitchen becomes more inviting. Your living room becomes
                  the heart of your home.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(var(--jwc-gold))] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[hsl(var(--jwc-navy))]">Better sleep patterns</span>
                      <span className="text-[hsl(var(--foreground))]/70"> — Natural circadian rhythm support</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(var(--jwc-gold))] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[hsl(var(--jwc-navy))]">Elevated mood</span>
                      <span className="text-[hsl(var(--foreground))]/70"> — Natural light boosts serotonin</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(var(--jwc-gold))] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[hsl(var(--jwc-navy))]">Lower energy bills</span>
                      <span className="text-[hsl(var(--foreground))]/70"> — Less artificial lighting needed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                  <svg viewBox="0 0 600 450" className="w-full h-full">
                    <defs>
                      <linearGradient id="morningLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef3c7" />
                        <stop offset="100%" stopColor="#fed7aa" />
                      </linearGradient>
                      <radialGradient id="sunGlow">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="600" height="450" fill="url(#morningLight)" />
                    <circle cx="450" cy="100" r="80" fill="url(#sunGlow)" />
                    <circle cx="450" cy="100" r="40" fill="#fbbf24" />
                    <rect x="80" y="80" width="440" height="290" fill="none" stroke="#1a365d" strokeWidth="14" />
                    <line x1="300" y1="80" x2="300" y2="370" stroke="#1a365d" strokeWidth="10" />
                    <line x1="80" y1="225" x2="520" y2="225" stroke="#1a365d" strokeWidth="10" />
                    <rect x="92" y="92" width="196" height="121" fill="rgba(255, 255, 255, 0.4)" />
                    <rect x="312" y="92" width="196" height="121" fill="rgba(255, 255, 255, 0.4)" />
                    <rect x="92" y="237" width="196" height="121" fill="rgba(255, 255, 255, 0.4)" />
                    <rect x="312" y="237" width="196" height="121" fill="rgba(255, 255, 255, 0.4)" />
                    <text x="300" y="420" fontSize="24" fontWeight="600" fill="#1a365d" textAnchor="middle" fontFamily="Cormorant Garamond, serif">26% More Natural Light</text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
                  <svg viewBox="0 0 600 450" className="w-full h-full">
                    <defs>
                      <linearGradient id="quietSpace" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dbeafe" />
                        <stop offset="100%" stopColor="#cffafe" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="450" fill="url(#quietSpace)" />
                    <rect x="80" y="80" width="440" height="290" fill="none" stroke="#1a365d" strokeWidth="14" />
                    <line x1="300" y1="80" x2="300" y2="370" stroke="#1a365d" strokeWidth="10" />
                    <line x1="80" y1="225" x2="520" y2="225" stroke="#1a365d" strokeWidth="10" />
                    <rect x="92" y="92" width="196" height="121" fill="rgba(255, 255, 255, 0.5)" />
                    <rect x="312" y="92" width="196" height="121" fill="rgba(255, 255, 255, 0.5)" />
                    <rect x="92" y="237" width="196" height="121" fill="rgba(255, 255, 255, 0.5)" />
                    <rect x="312" y="237" width="196" height="121" fill="rgba(255, 255, 255, 0.5)" />
                    {/* Sound wave visualization */}
                    <path d="M 30 225 Q 40 200, 50 225 T 70 225" stroke="#94a3b8" strokeWidth="3" fill="none" opacity="0.3" />
                    <path d="M 30 225 Q 35 215, 40 225 T 50 225" stroke="#94a3b8" strokeWidth="2" fill="none" opacity="0.5" />
                    <line x1="60" y1="225" x2="75" y2="225" stroke="#ef4444" strokeWidth="4" opacity="0.6" />
                    <text x="300" y="420" fontSize="24" fontWeight="600" fill="#1a365d" textAnchor="middle" fontFamily="Cormorant Garamond, serif">35dB Noise Reduction</text>
                  </svg>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/15 to-transparent px-4 py-2 rounded-full border border-emerald-500/20">
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-[hsl(var(--jwc-navy))]">Peace & Quiet</span>
                </div>
                <h3 className="text-3xl font-semibold text-[hsl(var(--jwc-navy))]">
                  Your Sanctuary From the Outside World
                </h3>
                <p className="text-lg text-[hsl(var(--foreground))]/75 leading-relaxed">
                  Live on a busy street? Near a highway? With 35dB sound reduction, you'll finally experience
                  true tranquility at home. Read a book without distraction. Host dinner parties without
                  competing with traffic noise. Sleep peacefully through the night.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[hsl(var(--jwc-navy))]">Peaceful home office</span>
                      <span className="text-[hsl(var(--foreground))]/70"> — Focus without interruptions</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[hsl(var(--jwc-navy))]">Better sleep quality</span>
                      <span className="text-[hsl(var(--foreground))]/70"> — Wake up refreshed</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[hsl(var(--jwc-navy))]">Stress-free entertaining</span>
                      <span className="text-[hsl(var(--foreground))]/70"> — Enjoy conversations without shouting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Customization Section - Modern Luxury Edition */}
        <section className="py-28 bg-gradient-to-b from-[hsl(var(--jwc-sand))] via-[hsl(var(--jwc-ivory))] to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[hsl(var(--jwc-gold))] blur-[120px] rounded-full"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="text-center mb-20 space-y-5">
              <div className="inline-block">
                <h2 className="mb-0">Design Windows That Reflect Your Style</h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mt-5"></div>
              </div>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
                Create windows that harmonize with your home's personality. Choose from sophisticated colors,
                elegant grille patterns, and performance glass that suits your lifestyle.
              </p>
            </div>

            {/* Modern Luxury Customization Card */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-luxury border border-[hsl(var(--jwc-border-elegant))]/40 p-14">
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
            <h2 className="text-center mb-3">Real Homes, Real Transformations</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              See how homeowners like you have elevated their living spaces with the JWC8500.
              From cozy bungalows to modern estates, discover the possibilities.
            </p>
            <ProductGallery />
          </div>
        </section>

        {/* Technical Specifications Preview - Modern Luxury Dark Section */}
        <section className="py-28 bg-gradient-to-br from-[hsl(var(--jwc-navy))] via-[hsl(var(--jwc-navy-dark))] to-[hsl(var(--jwc-navy))] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--jwc-gold))] blur-[160px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white blur-[140px] rounded-full"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="text-center mb-20 space-y-5">
              <div className="inline-block">
                <h2 className="text-white mb-0">The Science Behind Your Comfort</h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mt-5"></div>
              </div>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Exceptional performance you can feel, backed by numbers that matter. Here's how we deliver
                on our promise of better living through better windows.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
              <div className="text-center group">
                <div className="mb-6 inline-block p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/60 transition-all duration-400 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-2 tracking-tight">0.20</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">U-Factor Rating</div>
                <div className="text-xs text-white/50">Tri-pane configuration</div>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/60 transition-all duration-400 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-2 tracking-tight">35dB</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">Sound Reduction</div>
                <div className="text-xs text-white/50">Tri-pane acoustic glass</div>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/60 transition-all duration-400 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] bg-clip-text text-transparent mb-2 tracking-tight">Class 5</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">Wind Resistance</div>
                <div className="text-xs text-white/50">Structural performance</div>
              </div>
              <div className="text-center group">
                <div className="mb-6 inline-block p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 group-hover:border-[hsl(var(--jwc-gold))]/60 transition-all duration-400 group-hover:scale-110">
                  <div className="text-6xl font-bold bg-gradient-to-br from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] bg-clip-text text-transparent mb-2 tracking-tight">ER 44</div>
                </div>
                <div className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">Energy Rating</div>
                <div className="text-xs text-white/50">Exceeds 2030 targets</div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/specifications"
                className="no-underline inline-block bg-white text-[hsl(var(--jwc-navy))] px-12 py-4.5 rounded-2xl font-semibold hover:bg-[hsl(var(--jwc-gold))] hover:text-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-gold"
              >
                Explore All Technical Details
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

        {/* Final CTA Section - Modern Luxury Conversion */}
        <section className="py-32 bg-gradient-to-br from-[hsl(var(--jwc-navy))] via-[hsl(var(--jwc-navy-dark))] to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[hsl(var(--jwc-gold))] blur-[220px] rounded-full animate-pulse"></div>
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
            <h2 className="mb-8 text-white max-w-3xl mx-auto">Ready to Transform Your Home?</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] rounded-full mx-auto mb-10"></div>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's start a conversation about bringing more light, comfort, and beauty into your space.
              Request your personalized quote and see how the JWC8500 can elevate your lifestyle.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-16">
              <Link
                href="/quote"
                className="no-underline group relative bg-gradient-to-r from-[hsl(var(--jwc-gold))] to-[hsl(var(--jwc-gold-light))] text-[hsl(var(--jwc-navy))] px-14 py-5 rounded-2xl font-bold text-lg hover:shadow-gold transition-all duration-400 hover:-translate-y-1.5 inline-flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Get Your Free Quote</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-400"></div>
              </Link>
              <Link
                href="/specifications"
                className="no-underline bg-white/10 backdrop-blur-md border border-white/30 text-white px-14 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-[hsl(var(--jwc-gold))] transition-all duration-400 hover:-translate-y-1.5"
              >
                View Product Details
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
