"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/jwc/Header'
import { Footer } from '@/components/jwc/Footer'
import { SpecCard } from '@/components/jwc/SpecCard'
import {
  Thermometer,
  Volume2,
  Wind,
  Shield,
  Ruler,
  Package,
  FileText,
  Download,
  ArrowRight
} from 'lucide-react'

export default function SpecificationsPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Page Header */}
        <section className="bg-[hsl(var(--jwc-navy))] text-white py-16">
          <div className="container mx-auto px-8">
            <div className="text-sm font-medium text-white/80 mb-4">
              Windows › Hybrid Series › JWC8500 › Specifications
            </div>
            <h1 className="text-white mb-4">Technical Specifications</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Complete technical details for the JWC8500 Hybrid Series. Engineered to meet and exceed commercial building standards.
            </p>
          </div>
        </section>

        {/* Performance Ratings */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Performance Ratings</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <SpecCard
                icon={Thermometer}
                title="Thermal Rating"
                value="0.25 U-Factor"
                description="Exceptional insulation performance with Low-E glass and argon gas fill"
              />
              <SpecCard
                icon={Volume2}
                title="Sound Reduction"
                value="35 Decibels"
                description="Dual-pane construction with laminated glass option for maximum noise reduction"
              />
              <SpecCard
                icon={Wind}
                title="Wind Resistance"
                value="Class 5"
                description="Tested to withstand extreme weather conditions and high wind loads"
              />
              <SpecCard
                icon={Shield}
                title="Impact Resistance"
                value="Optional"
                description="Available with impact-resistant glass for high-wind zones"
              />
              <SpecCard
                icon={Ruler}
                title="Custom Sizing"
                value="Up to 8 feet"
                description="Custom widths and heights to meet your project specifications"
              />
              <SpecCard
                icon={Package}
                title="Energy Rating"
                value="A+"
                description="ENERGY STAR certified for superior energy efficiency"
              />
            </div>
          </div>
        </section>

        {/* Detailed Specifications Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Material Breakdown</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[hsl(var(--jwc-navy))] text-white">
                    <th className="py-4 px-6 text-left font-semibold">Component</th>
                    <th className="py-4 px-6 text-left font-semibold">Specification</th>
                    <th className="py-4 px-6 text-left font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Frame Material</td>
                    <td className="py-4 px-6">Reinforced Aluminum</td>
                    <td className="py-4 px-6 text-gray-600">Thermal break technology, extruded aluminum</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Glass Type</td>
                    <td className="py-4 px-6">Dual-Pane Insulated</td>
                    <td className="py-4 px-6 text-gray-600">Low-E coating, argon gas fill, 1" overall thickness</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Weather Seal</td>
                    <td className="py-4 px-6">Triple EPDM</td>
                    <td className="py-4 px-6 text-gray-600">Three-point weather stripping system</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Locking System</td>
                    <td className="py-4 px-6">Multi-Point</td>
                    <td className="py-4 px-6 text-gray-600">Reinforced hardware, tamper-resistant</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Spacer System</td>
                    <td className="py-4 px-6">Warm-Edge</td>
                    <td className="py-4 px-6 text-gray-600">Reduces heat transfer at glass edge</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Sill Extension</td>
                    <td className="py-4 px-6">Integrated</td>
                    <td className="py-4 px-6 text-gray-600">Built-in interior sill with drainage channel</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Finish Options</td>
                    <td className="py-4 px-6">Multiple Colors</td>
                    <td className="py-4 px-6 text-gray-600">Powder-coated in standard or custom colors</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-medium">Warranty</td>
                    <td className="py-4 px-6">10 Years</td>
                    <td className="py-4 px-6 text-gray-600">Comprehensive coverage on materials and workmanship</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cross-Section Diagram */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Cross-Section Details</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/generated/jwc8500-cross-section.png"
                  alt="JWC8500 Technical Cross-Section"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3">Frame Construction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The JWC8500 features a reinforced aluminum frame with thermal break technology. The multi-chamber design provides exceptional strength while minimizing heat transfer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Glass Assembly</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dual-pane insulated glass unit with Low-E coating on surface #2 and argon gas fill. Warm-edge spacer system reduces condensation and improves thermal performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Sealing System</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Triple EPDM weather stripping at head, jamb, and sill provides superior air and water infiltration resistance. Drainage channel ensures proper water management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Installation Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="font-semibold text-xl mb-6">Rough Opening Specifications</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      <span className="font-semibold">Width:</span> Add 1/2" to 3/4" for shimming and adjustment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      <span className="font-semibold">Height:</span> Add 1/2" to 3/4" for shimming and adjustment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      <span className="font-semibold">Depth:</span> Minimum 4-9/16" jamb depth required
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      <span className="font-semibold">Fasteners:</span> #10 screws through pre-drilled holes, 12" on center maximum
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="font-semibold text-xl mb-6">Installation Best Practices</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      Use shims at all attachment points for proper alignment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      Apply continuous bead of sealant around perimeter
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      Ensure proper flashing integration with building envelope
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      Verify square, level, and plumb before final fastening
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">•</span>
                    <div>
                      Follow local building codes and manufacturer guidelines
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Data */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Performance Data</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow">
                <h3 className="font-semibold text-xl mb-6">Thermal Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">U-Factor (Winter)</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">0.25</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Solar Heat Gain Coefficient</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">0.30</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Visible Transmittance</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">0.65</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Condensation Resistance</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">72</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow">
                <h3 className="font-semibold text-xl mb-6">Structural Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Air Infiltration</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">0.15 cfm/ft²</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Water Resistance</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">6.24 psf</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Design Pressure</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">±50 psf</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Acoustical Rating (STC)</span>
                    <span className="font-bold text-[hsl(var(--jwc-navy))]">35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Downloads */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Documentation & Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center mb-4">
                  <FileText size={24} className="text-[hsl(var(--jwc-navy))]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Technical Data Sheet</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete specifications, performance data, and product details
                </p>
                <button className="flex items-center gap-2 text-[hsl(var(--jwc-navy))] hover:underline font-medium">
                  <Download size={18} />
                  Download PDF
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center mb-4">
                  <FileText size={24} className="text-[hsl(var(--jwc-navy))]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Installation Guide</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step installation instructions with diagrams
                </p>
                <button className="flex items-center gap-2 text-[hsl(var(--jwc-navy))] hover:underline font-medium">
                  <Download size={18} />
                  Download PDF
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center mb-4">
                  <FileText size={24} className="text-[hsl(var(--jwc-navy))]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">CAD Drawings</h3>
                <p className="text-gray-600 text-sm mb-4">
                  AutoCAD files for architectural planning and specifications
                </p>
                <button className="flex items-center gap-2 text-[hsl(var(--jwc-navy))] hover:underline font-medium">
                  <Download size={18} />
                  Download DWG
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[hsl(var(--jwc-navy))] text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="mb-4 text-white">Need More Information?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our technical team is ready to answer your questions and help specify the perfect window solution for your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-[hsl(var(--jwc-navy))] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all text-lg inline-flex items-center gap-2"
              >
                Request Quote
                <ArrowRight size={20} />
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[hsl(var(--jwc-navy))] transition-all text-lg">
                Contact Technical Team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
