"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/jwc/Header'
import { Footer } from '@/components/jwc/Footer'
import { SpecCard } from '@/components/jwc/SpecCard'
import { InteractiveHotspot } from '@/components/jwc/InteractiveHotspot'
import {
  Thermometer,
  Volume2,
  Wind,
  Shield,
  Sparkles,
  Lock,
  ArrowRight
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div>
                <div className="text-sm font-medium text-[hsl(var(--jwc-navy))] mb-4">
                  Windows › Hybrid Series › JWC8500
                </div>
                <h1 className="mb-4">JWC8500 Hybrid Windows</h1>
                <p className="text-xl text-gray-700 mb-8">
                  Engineered for superior performance & efficiency
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="bg-[hsl(var(--jwc-navy))] text-white px-8 py-3 rounded font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all hover:-translate-y-0.5 shadow-navy inline-flex items-center gap-2"
                  >
                    Request Quote
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/specifications"
                    className="bg-white text-[hsl(var(--jwc-navy))] px-8 py-3 rounded font-medium border-2 border-[hsl(var(--jwc-navy))] hover:bg-[hsl(var(--jwc-navy))] hover:text-white transition-all"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>

              {/* Hero Image with Hotspots */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/generated/jwc8500-hero.png"
                  alt="JWC8500 Hybrid Window"
                  fill
                  className="object-cover"
                  priority
                />
                <InteractiveHotspot
                  x={25}
                  y={50}
                  title="Advanced Locking Mechanism"
                  description="Multi-point locking system provides superior security with reinforced hardware. Tested to exceed industry standards for forced entry resistance."
                />
                <InteractiveHotspot
                  x={50}
                  y={30}
                  title="Dual-Pane Insulated Glass"
                  description="Premium Low-E glass with argon gas fill. Reduces heat transfer by 45% compared to standard windows, lowering energy costs year-round."
                />
                <InteractiveHotspot
                  x={75}
                  y={60}
                  title="Triple Weather Stripping"
                  description="EPDM weather seals at three critical points create an airtight barrier against drafts, moisture, and noise infiltration."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Preview */}
        <section className="py-16 bg-[hsl(var(--jwc-navy))] text-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-2 text-white">Technical Specifications</h2>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              Industry-leading performance ratings
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0.25</div>
                <div className="text-sm text-white/80">U-Factor Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">35dB</div>
                <div className="text-sm text-white/80">Sound Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Class 5</div>
                <div className="text-sm text-white/80">Wind Resistance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">A+</div>
                <div className="text-sm text-white/80">Energy Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Product Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <SpecCard
                icon={Shield}
                title="Security"
                value="Enhanced"
                description="Multi-point locking system with reinforced hardware"
              />
              <SpecCard
                icon={Thermometer}
                title="Energy Efficiency"
                value="Superior"
                description="0.25 U-Factor with Low-E glass and argon fill"
              />
              <SpecCard
                icon={Volume2}
                title="Sound Reduction"
                value="35 Decibels"
                description="Dual-pane construction minimizes outside noise"
              />
            </div>
          </div>
        </section>

        {/* Comparison Chart */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Comparison Chart</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[hsl(var(--jwc-navy))] text-white">
                    <th className="py-4 px-6 text-left font-semibold">Feature</th>
                    <th className="py-4 px-6 text-left font-semibold">JWC8500 Hybrid</th>
                    <th className="py-4 px-6 text-left font-semibold">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Material</td>
                    <td className="py-4 px-6">Aluminum</td>
                    <td className="py-4 px-6 text-gray-500">Vinyl</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Glass</td>
                    <td className="py-4 px-6">Dual-Pane</td>
                    <td className="py-4 px-6 text-gray-500">Single-Pane</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Seal</td>
                    <td className="py-4 px-6">Triple</td>
                    <td className="py-4 px-6 text-gray-500">Single</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium">Customization</td>
                    <td className="py-4 px-6">
                      <Link
                        href="/quote"
                        className="text-[hsl(var(--jwc-navy))] hover:underline font-medium"
                      >
                        Custom Sizes
                      </Link>
                    </td>
                    <td className="py-4 px-6 text-gray-500">Standard Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hybrid Technology Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Hybrid Technology</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/generated/jwc8500-cross-section.png"
                  alt="JWC8500 Cross Section"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center flex-shrink-0">
                    <Sparkles size={24} className="text-[hsl(var(--jwc-navy))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Aluminum Frame with Thermal Break</h3>
                    <p className="text-gray-700">
                      Reinforced aluminum construction prevents heat transfer while maintaining structural integrity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center flex-shrink-0">
                    <Wind size={24} className="text-[hsl(var(--jwc-navy))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Triple Weather Sealing</h3>
                    <p className="text-gray-700">
                      Multi-layered EPDM seals at critical junctions provide maximum protection against air and water infiltration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center flex-shrink-0">
                    <Lock size={24} className="text-[hsl(var(--jwc-navy))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Security Hardware</h3>
                    <p className="text-gray-700">
                      Multi-point locking mechanism with reinforced strike plates and tamper-resistant hardware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Installation Details</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="font-semibold text-xl mb-4">Professional Installation</h3>
                <Image
                  src="/generated/jwc8500-installation.png"
                  alt="JWC8500 Installation"
                  width={600}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Certified installer network available nationwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Typical installation time: 2-4 hours per window</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Comprehensive 10-year warranty included</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="font-semibold text-xl mb-4">Custom Sizing Available</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The JWC8500 Hybrid can be manufactured to your exact specifications:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                      <span>Widths up to 8 feet available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                      <span>Custom heights for any architectural requirement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                      <span>Multiple color options for frame finish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                      <span>Impact-resistant glass upgrade available</span>
                    </li>
                  </ul>
                  <Link
                    href="/quote"
                    className="inline-block mt-6 bg-[hsl(var(--jwc-navy))] text-white px-6 py-3 rounded font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[hsl(var(--jwc-navy))] text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="mb-4 text-white">Ready to Upgrade Your Building?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a detailed quote and discover how the JWC8500 Hybrid can enhance your project.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-white text-[hsl(var(--jwc-navy))] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all text-lg"
            >
              Request Your Quote Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
