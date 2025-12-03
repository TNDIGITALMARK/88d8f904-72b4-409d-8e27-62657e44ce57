"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'

interface ColorOption {
  name: string
  hex: string
  description: string
}

const exteriorColors: ColorOption[] = [
  { name: 'DF White', hex: '#FFFFFF', description: 'Classic white finish' },
  { name: 'Slate', hex: '#4A5568', description: 'Modern gray tone' },
  { name: 'Black', hex: '#000000', description: 'Bold contemporary look' },
  { name: 'Commercial Brown', hex: '#5D4037', description: 'Warm earthy tone' },
  { name: 'Clear Anodized', hex: '#C0C0C0', description: 'Natural aluminum finish' }
]

const interiorColors: ColorOption[] = [
  { name: 'White', hex: '#FFFFFF', description: 'Clean classic interior' },
  { name: 'Black FiniShield™', hex: '#000000', description: 'Premium dark finish' }
]

export function ColorSelector() {
  const [selectedExterior, setSelectedExterior] = useState(exteriorColors[0])
  const [selectedInterior, setSelectedInterior] = useState(interiorColors[0])

  return (
    <div className="space-y-8">
      {/* Exterior Colors */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Exterior Color</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {exteriorColors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedExterior(color)}
              className="group relative"
              aria-label={`Select ${color.name}`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 transition-all ${
                  selectedExterior.name === color.name
                    ? 'border-[hsl(var(--jwc-navy))] scale-110'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {selectedExterior.name === color.name && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check
                      className={`w-8 h-8 ${
                        color.hex === '#FFFFFF' ? 'text-[hsl(var(--jwc-navy))]' : 'text-white'
                      }`}
                      strokeWidth={3}
                    />
                  </div>
                )}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {color.name}
              </div>
            </button>
          ))}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium text-lg mb-1">{selectedExterior.name}</p>
          <p className="text-gray-600 text-sm">{selectedExterior.description}</p>
        </div>
      </div>

      {/* Interior Colors */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Interior Color</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {interiorColors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedInterior(color)}
              className="group relative"
              aria-label={`Select ${color.name}`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 transition-all ${
                  selectedInterior.name === color.name
                    ? 'border-[hsl(var(--jwc-navy))] scale-110'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {selectedInterior.name === color.name && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check
                      className={`w-8 h-8 ${
                        color.hex === '#FFFFFF' ? 'text-[hsl(var(--jwc-navy))]' : 'text-white'
                      }`}
                      strokeWidth={3}
                    />
                  </div>
                )}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {color.name}
              </div>
            </button>
          ))}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium text-lg mb-1">{selectedInterior.name}</p>
          <p className="text-gray-600 text-sm">{selectedInterior.description}</p>
        </div>
      </div>

      {/* Preview Summary */}
      <div className="bg-[hsl(var(--jwc-navy))] text-white p-6 rounded-lg">
        <h4 className="font-semibold mb-3">Your Selection</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-white/70">Exterior:</span>
            <p className="font-medium">{selectedExterior.name}</p>
          </div>
          <div>
            <span className="text-white/70">Interior:</span>
            <p className="font-medium">{selectedInterior.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
