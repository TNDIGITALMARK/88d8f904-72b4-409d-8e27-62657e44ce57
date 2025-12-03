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
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
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
import { useEffect } from 'react'

export default function HomePage() {
  useScrollAnimation()

  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero Section - Full Height with Stunning Imagery */}
        <section className="relative section-hero gradient-luxe overflow-hidden">
          {/* Parallax Background Layer */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jwc-navy))]/5 to-transparent"></div>
          </div>

          <div className="container mx-auto px-8 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              {/* Hero Content - More Generous Spacing */}
              <div data-animate className="space-y-10">
                <div className="inline-block bg-[hsl(var(--jwc-navy))]/10 px-6 py-3 rounded-full text-sm font-medium text-[hsl(var(--jwc-navy))] backdrop-blur-sm">
                  Premium Hybrid Collection
                </div>

                <h1 className="!mb-8">Elegance Meets Innovation</h1>

                <p className="text-2xl text-gray-600 text-elegant leading-relaxed max-w-xl">
                  Experience the perfect harmony of refined aesthetics and exceptional performance.
                  Transform your living spaces with 26% more natural light and 22% superior energy efficiency.
                </p>

                <div className="grid grid-cols-3 gap-8 bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-luxe border border-[hsl(var(--jwc-silver))]">
                  <div className="text-center" data-animate>
                    <div className="text-5xl font-bold text-[hsl(var(--jwc-navy))] mb-3 text-luxe">0.20</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">U-Factor</div>
                  </div>
                  <div className="text-center delay-100" data-animate>
                    <div className="text-5xl font-bold text-[hsl(var(--jwc-navy))] mb-3 text-luxe">35dB</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Quiet</div>
                  </div>
                  <div className="text-center delay-200" data-animate>
                    <div className="text-5xl font-bold text-[hsl(var(--jwc-navy))] mb-3 text-luxe">+22%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Efficient</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-6">
                  <Link
                    href="/quote"
                    className="bg-[hsl(var(--jwc-navy))] text-white px-12 py-6 rounded-xl font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all hover:-translate-y-1 shadow-navy inline-flex items-center gap-3 text-lg"
                  >
                    Explore Your Options
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/specifications"
                    className="bg-white/90 backdrop-blur-sm text-[hsl(var(--jwc-navy))] px-12 py-6 rounded-xl font-medium border-2 border-[hsl(var(--jwc-navy))]/20 hover:border-[hsl(var(--jwc-navy))] hover:bg-white transition-all text-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Hero Image - Stunning Real Photography */}
              <div data-animate className="delay-200">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-luxe interactive-image">
                  <Image
                    src="/generated/hero-luxury-living-room.png"
                    alt="Luxurious living room with floor-to-ceiling JWC8500 windows"
                    fill
                    className="object-cover image-reveal"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Immersive Image Section with Overlay Text */}
        <section className="relative section-spacious overflow-hidden">
          <div className="relative h-[70vh] md:h-[80vh]">
            <Image
              src="/generated/home-exterior-windows.png"
              alt="Modern home exterior showcasing premium JWC8500 windows"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 lg:px-16">
                <div className="max-w-2xl" data-animate>
                  <h2 className="text-white !mb-8">Where Architecture Meets Artistry</h2>
                  <p className="text-white/95 text-xl text-elegant leading-relaxed mb-10">
                    Every window is a masterpiece of engineering precision and aesthetic refinement.
                    Transform your home into a sanctuary of light, comfort, and timeless beauty.
                  </p>
                  <Link
                    href="/specifications"
                    className="inline-flex items-center gap-3 bg-white text-[hsl(var(--jwc-navy))] px-10 py-5 rounded-xl font-medium hover:bg-white/95 transition-all hover:-translate-y-1 shadow-lg text-lg"
                  >
                    Discover the Difference
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits - Visual Cards with Generous Spacing */}
        <section className="section-spacious bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="text-center mb-20" data-animate>
              <h2 className="!mb-6">Designed for Your Lifestyle</h2>
              <p className="text-center text-gray-600 text-xl max-w-3xl mx-auto text-elegant leading-relaxed">
                Experience the perfect balance of beauty, comfort, and sustainability in every detail
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div data-animate className="bg-gradient-to-br from-blue-50/50 to-white p-12 rounded-3xl border border-blue-100/50 interactive-card">
                <div className="w-20 h-20 bg-[hsl(var(--jwc-navy))] rounded-2xl flex items-center justify-center mb-8 shadow-md animate-float">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-semibold mb-6">Expansive Views</h3>
                <p className="text-gray-600 text-lg mb-6 text-elegant leading-relaxed">
                  Embrace 26% more natural light with our refined frame design. Transform your spaces into bright, airy sanctuaries that connect you with the outdoors.
                </p>
                <ul className="space-y-4 text-base text-gray-500">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Elegant slim profiles
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Stunning aesthetics
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Panoramic perspectives
                  </li>
                </ul>
              </div>

              <div data-animate className="delay-100 bg-gradient-to-br from-green-50/50 to-white p-12 rounded-3xl border border-green-100/50 interactive-card">
                <div className="w-20 h-20 bg-[hsl(var(--jwc-navy))] rounded-2xl flex items-center justify-center mb-8 shadow-md animate-float">
                  <Thermometer className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-semibold mb-6">Sustainable Comfort</h3>
                <p className="text-gray-600 text-lg mb-6 text-elegant leading-relaxed">
                  Enjoy 22% greater energy efficiency that keeps your home perfectly comfortable while reducing your environmental footprint and energy costs.
                </p>
                <ul className="space-y-4 text-base text-gray-500">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Reduced energy costs
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Eco-conscious living
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Perfect year-round
                  </li>
                </ul>
              </div>

              <div data-animate className="delay-200 bg-gradient-to-br from-purple-50/50 to-white p-12 rounded-3xl border border-purple-100/50 interactive-card">
                <div className="w-20 h-20 bg-[hsl(var(--jwc-navy))] rounded-2xl flex items-center justify-center mb-8 shadow-md animate-float">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-semibold mb-6">Lasting Beauty</h3>
                <p className="text-gray-600 text-lg mb-6 text-elegant leading-relaxed">
                  Premium materials and meticulous craftsmanship ensure your windows remain beautiful for decades with minimal care, protected by our comprehensive warranty.
                </p>
                <ul className="space-y-4 text-base text-gray-500">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Weather resilient
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Effortless upkeep
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[hsl(var(--jwc-navy))] flex-shrink-0" />
                    Lifetime guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Section - Hardware Close-up */}
        <section className="relative section-spacious overflow-hidden bg-[hsl(var(--jwc-pearl))]">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div data-animate className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-luxe interactive-image order-2 lg:order-1">
                <Image
                  src="/generated/window-detail-hardware.png"
                  alt="Premium window hardware detail - contemporary handle mechanism"
                  fill
                  className="object-cover"
                />
              </div>

              <div data-animate className="space-y-8 order-1 lg:order-2">
                <h2 className="!mb-8">Precision in Every Detail</h2>
                <p className="text-xl text-gray-600 text-elegant leading-relaxed">
                  Our contemporary nesting handle with patent-pending hardware cover represents the pinnacle of
                  design and functionality. Every element is meticulously crafted for effortless operation and
                  lasting beauty.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--jwc-navy))]/10 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-[hsl(var(--jwc-navy))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Multi-Point Security</h4>
                      <p className="text-gray-600 text-elegant">Advanced locking mechanism exceeds industry standards</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--jwc-navy))]/10 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-[hsl(var(--jwc-navy))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Elegant Finish</h4>
                      <p className="text-gray-600 text-elegant">Brushed metal hardware that complements any aesthetic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Window Styles Showcase */}
        <section className="section-spacious bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <div data-animate>
              <WindowStylesShowcase />
            </div>
          </div>
        </section>

        {/* Interactive Customization Section */}
        <section className="section-spacious bg-[hsl(var(--jwc-pearl))]">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="text-center mb-20" data-animate>
              <h2 className="!mb-8">Create Your Vision</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-elegant text-xl leading-relaxed">
                Personalize every detail to reflect your unique style and complement your home's architecture
              </p>
            </div>

            {/* Tabs for Customization Options */}
            <div className="max-w-7xl mx-auto">
              <div data-animate className="bg-gradient-to-br from-white to-[hsl(var(--jwc-pearl))] rounded-3xl shadow-luxe p-16 border border-[hsl(var(--jwc-silver))]">
                {/* Color Customization */}
                <div className="mb-24">
                  <ColorSelector />
                </div>

                {/* Grille Pattern Selection */}
                <div className="mb-24 pt-24 border-t border-[hsl(var(--jwc-silver))]/30">
                  <GrillePatternSelector />
                </div>

                {/* Glass Technology Selection */}
                <div className="pt-24 border-t border-[hsl(var(--jwc-silver))]/30">
                  <GlassTypeSelector />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="section-spacious bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="text-center mb-20" data-animate>
              <h2 className="!mb-8">Inspired Living</h2>
              <p className="text-center text-gray-600 text-xl max-w-3xl mx-auto text-elegant leading-relaxed">
                Discover how homeowners have transformed their spaces with the beauty and performance of JWC8500
              </p>
            </div>
            <div data-animate>
              <ProductGallery />
            </div>
          </div>
        </section>

        {/* Technical Specifications Preview */}
        <section className="section-spacious bg-[hsl(var(--jwc-navy))] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-8 lg:px-16 relative z-10">
            <div className="text-center mb-20" data-animate>
              <h2 className="text-white !mb-8">Excellence in Every Detail</h2>
              <p className="text-center text-white/95 text-xl max-w-3xl mx-auto text-elegant leading-relaxed">
                Precision engineering meets uncompromising quality standards
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-20">
              <div className="text-center" data-animate>
                <div className="text-7xl font-bold mb-6 text-luxe">0.20</div>
                <div className="text-base text-white/90 mb-3 font-medium uppercase tracking-wider">U-Factor</div>
                <div className="text-sm text-white/70 text-elegant">Superior insulation</div>
              </div>
              <div className="text-center delay-100" data-animate>
                <div className="text-7xl font-bold mb-6 text-luxe">35dB</div>
                <div className="text-base text-white/90 mb-3 font-medium uppercase tracking-wider">Acoustics</div>
                <div className="text-sm text-white/70 text-elegant">Peaceful serenity</div>
              </div>
              <div className="text-center delay-200" data-animate>
                <div className="text-7xl font-bold mb-6 text-luxe">Class 5</div>
                <div className="text-base text-white/90 mb-3 font-medium uppercase tracking-wider">Protection</div>
                <div className="text-sm text-white/70 text-elegant">Ultimate strength</div>
              </div>
              <div className="text-center delay-300" data-animate>
                <div className="text-7xl font-bold mb-6 text-luxe">ER 44</div>
                <div className="text-base text-white/90 mb-3 font-medium uppercase tracking-wider">Efficiency</div>
                <div className="text-sm text-white/70 text-elegant">Future-ready</div>
              </div>
            </div>

            <div className="text-center" data-animate>
              <Link
                href="/specifications"
                className="inline-block bg-white text-[hsl(var(--jwc-navy))] px-14 py-6 rounded-xl font-medium hover:bg-white/95 transition-all hover:-translate-y-1 shadow-lg text-lg"
              >
                Explore Specifications
              </Link>
            </div>
          </div>
        </section>

        {/* Product Features Grid */}
        <section className="section-spacious bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="text-center mb-20" data-animate>
              <h2 className="!mb-8">Sophisticated Features</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div data-animate>
                <SpecCard
                  icon={Shield}
                  title="Security"
                  value="Multi-Point Lock"
                  description="Contemporary nesting handle with patent-pending hardware cover and reinforced strike plates"
                />
              </div>
              <div data-animate className="delay-100">
                <SpecCard
                  icon={Thermometer}
                  title="Thermal Performance"
                  value="0.20 U-Factor"
                  description="Advanced Low-E glass with krypton gas fill and thermal break technology"
                />
              </div>
              <div data-animate className="delay-200">
                <SpecCard
                  icon={Volume2}
                  title="Acoustic Control"
                  value="35 Decibels"
                  description="Tri-pane laminated glass construction minimizes exterior noise pollution"
                />
              </div>
              <div data-animate className="delay-300">
                <SpecCard
                  icon={Wind}
                  title="Weather Sealing"
                  value="Triple EPDM"
                  description="Three-point weather stripping creates airtight barrier against drafts and moisture"
                />
              </div>
              <div data-animate className="delay-400">
                <SpecCard
                  icon={Sparkles}
                  title="Low Maintenance"
                  value="Lifetime Finish"
                  description="Aluminum exterior and vinyl interior never need painting or refinishing"
                />
              </div>
              <div data-animate className="delay-500">
                <SpecCard
                  icon={Maximize2}
                  title="Glass Area"
                  value="+26% Larger"
                  description="Lower profile frame maximizes visible glass for enhanced views and natural light"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Chart */}
        <section className="section-spacious bg-[hsl(var(--jwc-pearl))]">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="text-center mb-16" data-animate>
              <h2 className="!mb-6">Performance Comparison</h2>
              <p className="text-center text-gray-600 text-xl max-w-3xl mx-auto text-elegant leading-relaxed">
                See how the JWC8500 Hybrid outperforms standard window systems
              </p>
            </div>
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
        <section className="section-spacious bg-white">
          <div className="container mx-auto px-8 lg:px-16 max-w-5xl">
            <div className="text-center mb-20" data-animate>
              <h2 className="!mb-8">Common Questions</h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto text-elegant leading-relaxed">
                Everything you need to know about JWC8500 Hybrid Windows
              </p>
            </div>
            <div data-animate>
              <FAQSection />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-spacious bg-gradient-to-br from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-8 lg:px-16 text-center relative z-10">
            <div data-animate>
              <h2 className="mb-10 text-white !text-5xl md:!text-6xl">Begin Your Transformation</h2>
              <p className="text-2xl text-white/95 mb-16 max-w-3xl mx-auto text-elegant leading-relaxed">
                Let us help you bring your vision to life with windows that combine timeless elegance,
                exceptional comfort, and sustainable performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 justify-center mb-16" data-animate>
              <Link
                href="/quote"
                className="inline-block bg-white text-[hsl(var(--jwc-navy))] px-14 py-7 rounded-xl font-medium hover:bg-white/95 transition-all hover:-translate-y-2 text-xl shadow-luxe"
              >
                Get Your Personalized Quote
              </Link>
              <Link
                href="/specifications"
                className="inline-block bg-transparent border-2 border-white/80 text-white px-14 py-7 rounded-xl font-medium hover:bg-white/10 hover:border-white transition-all text-xl"
              >
                View Full Specifications
              </Link>
            </div>

            <p className="text-base text-white/80 text-elegant" data-animate>
              Questions? We're here to help at 1-800-JWC-8500 or sales@jwc.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
