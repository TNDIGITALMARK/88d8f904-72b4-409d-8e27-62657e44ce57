"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface WindowStyle {
  id: string
  name: string
  description: string
  features: string[]
  image: string
  funFact: string
}

const windowStyles: WindowStyle[] = [
  {
    id: 'casement',
    name: 'Casement',
    description:
      'Side-hinged windows that open outward, providing maximum ventilation and unobstructed views',
    features: [
      'Easy to operate with crank handle',
      'Excellent energy efficiency with compression seal',
      'Wide opening for emergency egress',
      'Superior ventilation control'
    ],
    image: '/windows/casement.jpg',
    funFact: 'Casement windows provide up to 100% ventilation area - perfect for catching breezes'
  },
  {
    id: 'awning',
    name: 'Awning',
    description:
      'Top-hinged windows that open outward from the bottom, ideal for ventilation even during rain',
    features: [
      'Ventilation during light rain',
      'Operates above furniture placement',
      'Excellent security when partially open',
      'Energy-efficient compression seal'
    ],
    image: '/windows/awning.jpg',
    funFact: 'Awning windows can remain open during rain without water entering your space'
  },
  {
    id: 'fixed',
    name: 'Fixed',
    description: 'Non-operating windows designed for maximum glass area and uninterrupted views',
    features: [
      'Maximum natural light',
      'Unobstructed views',
      'Superior energy efficiency',
      'Architectural flexibility'
    ],
    image: '/windows/fixed.jpg',
    funFact: 'Fixed windows offer the best thermal performance due to no moving parts or seals'
  },
  {
    id: 'geometric',
    name: 'Geometric',
    description: 'Custom-shaped windows including circles, triangles, and trapezoids for unique designs',
    features: [
      'Custom shapes available',
      'Architectural statement pieces',
      'Fixed or operable options',
      'Unlimited design possibilities'
    ],
    image: '/windows/geometric.jpg',
    funFact: 'Geometric windows can be manufactured in virtually any shape to match your vision'
  },
  {
    id: 'bay',
    name: 'Bay',
    description: 'Multi-window projection that extends outward, creating interior space and panoramic views',
    features: [
      'Creates additional interior space',
      'Panoramic viewing angle',
      'Built-in seating opportunity',
      'Enhances curb appeal'
    ],
    image: '/windows/bay.jpg',
    funFact: 'Bay windows can add up to 2 feet of usable interior space to your room'
  },
  {
    id: 'bow',
    name: 'Bow',
    description:
      'Curved multi-window design with four or more units creating an elegant rounded projection',
    features: [
      'Gentle curved design',
      'Maximum light and views',
      'Dramatic architectural impact',
      'Creates spacious interior feel'
    ],
    image: '/windows/bow.jpg',
    funFact: 'Bow windows typically use 4-6 individual window units to create their curved shape'
  }
]

export function WindowStylesShowcase() {
  const [selectedStyle, setSelectedStyle] = useState(windowStyles[0])
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null)
  const [isWindowOpen, setIsWindowOpen] = useState(false)

  return (
    <div className="space-y-12">
      {/* Style Selection Grid */}
      <div>
        <h2 className="text-center mb-4">Available Window Styles</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Each style is engineered with the JWC8500 hybrid technology for superior performance
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {windowStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style)}
              className={`group relative bg-white border-2 rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${
                selectedStyle.id === style.id
                  ? 'border-[hsl(var(--jwc-navy))] shadow-lg scale-105'
                  : 'border-gray-200'
              }`}
            >
              {/* Style Icon/Visual */}
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full relative">
                  {/* Simple geometric representations */}
                  {style.id === 'casement' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full p-3">
                      <rect x="10" y="10" width="35" height="80" fill="none" stroke="#1a365d" strokeWidth="3" />
                      <rect x="55" y="10" width="35" height="80" fill="none" stroke="#1a365d" strokeWidth="3" />
                      <circle cx="52" cy="50" r="3" fill="#1a365d" />
                    </svg>
                  )}
                  {style.id === 'awning' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full p-3">
                      <polygon points="10,10 90,10 90,50 10,50" fill="none" stroke="#1a365d" strokeWidth="3" />
                      <polygon points="10,60 90,60 90,90 10,90" fill="none" stroke="#1a365d" strokeWidth="3" />
                      <line x1="50" y1="60" x2="50" y2="80" stroke="#1a365d" strokeWidth="2" />
                    </svg>
                  )}
                  {style.id === 'fixed' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full p-3">
                      <rect x="10" y="10" width="80" height="80" fill="none" stroke="#1a365d" strokeWidth="3" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="#1a365d" strokeWidth="2" />
                      <line x1="10" y1="50" x2="90" y2="50" stroke="#1a365d" strokeWidth="2" />
                    </svg>
                  )}
                  {style.id === 'geometric' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full p-3">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#1a365d" strokeWidth="3" />
                      <line x1="50" y1="15" x2="50" y2="85" stroke="#1a365d" strokeWidth="2" />
                      <line x1="15" y1="50" x2="85" y2="50" stroke="#1a365d" strokeWidth="2" />
                    </svg>
                  )}
                  {style.id === 'bay' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full p-3">
                      <polygon points="30,20 50,10 70,20 70,90 30,90" fill="none" stroke="#1a365d" strokeWidth="3" />
                      <line x1="40" y1="20" x2="40" y2="90" stroke="#1a365d" strokeWidth="2" />
                      <line x1="60" y1="20" x2="60" y2="90" stroke="#1a365d" strokeWidth="2" />
                    </svg>
                  )}
                  {style.id === 'bow' && (
                    <svg viewBox="0 0 100 100" className="w-full h-full p-3">
                      <path
                        d="M20,20 Q50,10 80,20 L80,90 L20,90 Z"
                        fill="none"
                        stroke="#1a365d"
                        strokeWidth="3"
                      />
                      <line x1="35" y1="20" x2="35" y2="90" stroke="#1a365d" strokeWidth="2" />
                      <line x1="50" y1="15" x2="50" y2="90" stroke="#1a365d" strokeWidth="2" />
                      <line x1="65" y1="20" x2="65" y2="90" stroke="#1a365d" strokeWidth="2" />
                    </svg>
                  )}
                </div>
              </div>

              <p className="font-medium text-base text-center">{style.name}</p>

              {selectedStyle.id === style.id && (
                <div className="absolute inset-0 border-2 border-[hsl(var(--jwc-navy))] rounded-xl pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Style Details */}
      <div className="bg-white rounded-2xl shadow-luxe overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Interactive Window Render */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <svg viewBox="0 0 400 300" className="w-full h-full cursor-pointer transition-transform hover:scale-105">
                <rect x="0" y="0" width="400" height="300" fill="#f7fafc" />
                {selectedStyle.id === 'casement' && (
                  <>
                    {/* Outer Frame */}
                    <rect x="50" y="50" width="130" height="200" fill="none" stroke="#1a365d" strokeWidth="8" />
                    <rect x="220" y="50" width="130" height="200" fill="none" stroke="#1a365d" strokeWidth="8" />

                    {/* Glass Panes with gradient */}
                    <rect x="60" y="60" width="110" height="180" fill="url(#glassGradient)" opacity="0.6" />
                    <rect x="230" y="60" width="110" height="180" fill="url(#glassGradient)" opacity="0.6" />

                    {/* Interactive Handle - Clickable */}
                    <g
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsWindowOpen(!isWindowOpen)
                      }}
                      onMouseEnter={() => setHoveredHotspot('handle')}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <circle cx="210" cy="150" r="10" fill="#1a365d" />
                      <circle cx="210" cy="150" r="15" fill="none" stroke="#1a365d" strokeWidth="2" opacity="0.3" />
                    </g>

                    {/* Glass Dividers */}
                    <line x1="115" y1="60" x2="115" y2="240" stroke="#1a365d" strokeWidth="2" opacity="0.3" />
                    <line x1="285" y1="60" x2="285" y2="240" stroke="#1a365d" strokeWidth="2" opacity="0.3" />

                    {/* Interactive Frame Hotspot */}
                    <g
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onMouseEnter={() => setHoveredHotspot('frame')}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <circle cx="115" cy="80" r="8" fill="#1a365d" opacity="0.4" />
                    </g>

                    {/* Interactive Glass Hotspot */}
                    <g
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onMouseEnter={() => setHoveredHotspot('glass')}
                      onMouseLeave={() => setHoveredHotspot(null)}
                    >
                      <circle cx="285" cy="150" r="8" fill="#4299e1" opacity="0.6" />
                    </g>

                    {/* Glass gradient definition */}
                    <defs>
                      <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e3f2fd" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#90caf9" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </>
                )}
                {selectedStyle.id === 'awning' && (
                  <>
                    <rect x="50" y="50" width="300" height="100" fill="none" stroke="#1a365d" strokeWidth="8" />
                    <rect x="50" y="170" width="300" height="80" fill="none" stroke="#1a365d" strokeWidth="8" />
                    <rect x="60" y="60" width="280" height="80" fill="#e3f2fd" opacity="0.5" />
                    <rect x="60" y="180" width="280" height="60" fill="#e3f2fd" opacity="0.5" />
                    <line x1="200" y1="170" x2="200" y2="230" stroke="#1a365d" strokeWidth="6" />
                  </>
                )}
                {selectedStyle.id === 'fixed' && (
                  <>
                    <rect x="50" y="50" width="300" height="200" fill="none" stroke="#1a365d" strokeWidth="8" />
                    <line x1="200" y1="50" x2="200" y2="250" stroke="#1a365d" strokeWidth="6" />
                    <line x1="50" y1="150" x2="350" y2="150" stroke="#1a365d" strokeWidth="6" />
                    <rect x="60" y="60" width="280" height="180" fill="#e3f2fd" opacity="0.5" />
                  </>
                )}
                {selectedStyle.id === 'geometric' && (
                  <>
                    <circle cx="200" cy="150" r="100" fill="none" stroke="#1a365d" strokeWidth="8" />
                    <line x1="200" y1="50" x2="200" y2="250" stroke="#1a365d" strokeWidth="6" />
                    <line x1="100" y1="150" x2="300" y2="150" stroke="#1a365d" strokeWidth="6" />
                    <circle cx="200" cy="150" r="92" fill="#e3f2fd" opacity="0.5" />
                  </>
                )}
                {selectedStyle.id === 'bay' && (
                  <>
                    <polygon
                      points="120,100 200,50 280,100 280,250 120,250"
                      fill="none"
                      stroke="#1a365d"
                      strokeWidth="8"
                    />
                    <line x1="160" y1="100" x2="160" y2="250" stroke="#1a365d" strokeWidth="6" />
                    <line x1="240" y1="100" x2="240" y2="250" stroke="#1a365d" strokeWidth="6" />
                    <polygon points="130,110 200,65 270,110 270,240 130,240" fill="#e3f2fd" opacity="0.5" />
                  </>
                )}
                {selectedStyle.id === 'bow' && (
                  <>
                    <path
                      d="M100,100 Q200,50 300,100 L300,250 L100,250 Z"
                      fill="none"
                      stroke="#1a365d"
                      strokeWidth="8"
                    />
                    <line x1="150" y1="80" x2="150" y2="250" stroke="#1a365d" strokeWidth="6" />
                    <line x1="200" y1="65" x2="200" y2="250" stroke="#1a365d" strokeWidth="6" />
                    <line x1="250" y1="80" x2="250" y2="250" stroke="#1a365d" strokeWidth="6" />
                    <path
                      d="M110,110 Q200,65 290,110 L290,240 L110,240 Z"
                      fill="#e3f2fd"
                      opacity="0.5"
                    />
                  </>
                )}
              </svg>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-10">
            <h3 className="text-3xl font-bold mb-4">{selectedStyle.name} Windows</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">{selectedStyle.description}</p>

            <h4 className="font-semibold mb-4 text-lg">Key Features:</h4>
            <ul className="space-y-3 mb-8">
              {selectedStyle.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[hsl(var(--jwc-navy))] text-xl mt-0.5">•</span>
                  <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl mb-8">
              <p className="text-sm font-semibold text-[hsl(var(--jwc-navy))] mb-2 uppercase tracking-wider">Fun Fact</p>
              <p className="text-base text-gray-700 leading-relaxed">{selectedStyle.funFact}</p>
            </div>

            {/* Interactive Status */}
            {hoveredHotspot && (
              <div className="bg-[hsl(var(--jwc-navy))]/5 border border-[hsl(var(--jwc-navy))]/20 p-4 rounded-xl mb-6 transition-all">
                <p className="text-sm font-medium text-[hsl(var(--jwc-navy))]">
                  {hoveredHotspot === 'handle' && '🔧 Click to open/close window'}
                  {hoveredHotspot === 'frame' && '🏗️ Hybrid aluminum-vinyl frame construction'}
                  {hoveredHotspot === 'glass' && '💎 Triple-pane insulated glass technology'}
                </p>
              </div>
            )}

            {isWindowOpen && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-xl mb-6">
                <p className="text-sm font-medium text-green-800">✓ Window is now open - Maximum ventilation</p>
              </div>
            )}

            <button className="w-full bg-[hsl(var(--jwc-navy))] text-white px-8 py-4 rounded-xl font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all hover:-translate-y-1 shadow-md flex items-center justify-center gap-3 text-lg">
              Get Quote for {selectedStyle.name}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Hotspot Legend */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-[hsl(var(--jwc-navy))] transition-all">
          <div className="w-12 h-12 bg-[hsl(var(--jwc-navy))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔧</span>
          </div>
          <h5 className="font-semibold mb-2 text-lg">Interactive Handle</h5>
          <p className="text-sm text-gray-600">Click the handle to open/close the window</p>
        </div>

        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-[hsl(var(--jwc-navy))] transition-all">
          <div className="w-12 h-12 bg-[hsl(var(--jwc-navy))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🏗️</span>
          </div>
          <h5 className="font-semibold mb-2 text-lg">Frame Detail</h5>
          <p className="text-sm text-gray-600">Hover to learn about frame construction</p>
        </div>

        <div className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-[hsl(var(--jwc-navy))] transition-all">
          <div className="w-12 h-12 bg-[hsl(var(--jwc-navy))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💎</span>
          </div>
          <h5 className="font-semibold mb-2 text-lg">Glass Technology</h5>
          <p className="text-sm text-gray-600">Hover to discover glass specifications</p>
        </div>
      </div>
    </div>
  )
}
