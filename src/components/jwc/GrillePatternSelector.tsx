"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'

interface GrillePattern {
  id: string
  name: string
  description: string
  image: string
}

const grillePatterns: GrillePattern[] = [
  {
    id: 'none',
    name: 'No Grille',
    description: 'Clean, unobstructed view',
    image: '/grilles/none.svg'
  },
  {
    id: 'rectangular',
    name: 'Rectangular',
    description: 'Classic grid pattern',
    image: '/grilles/rectangular.svg'
  },
  {
    id: 'partial',
    name: 'Partial',
    description: 'Subtle top accent',
    image: '/grilles/partial.svg'
  },
  {
    id: 'contour',
    name: 'Contour',
    description: 'Curved decorative pattern',
    image: '/grilles/contour.svg'
  },
  {
    id: 'diamond',
    name: 'Diamond',
    description: 'Traditional diamond grid',
    image: '/grilles/diamond.svg'
  }
]

export function GrillePatternSelector() {
  const [selectedPattern, setSelectedPattern] = useState(grillePatterns[0])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Grille Pattern</h3>
        <p className="text-gray-600 mb-6">
          Choose from our selection of grille patterns to match your architectural style
        </p>
      </div>

      {/* Pattern Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {grillePatterns.map((pattern) => (
          <button
            key={pattern.id}
            onClick={() => setSelectedPattern(pattern)}
            className={`group relative bg-white border-2 rounded-lg p-4 transition-all hover:shadow-md ${
              selectedPattern.id === pattern.id
                ? 'border-[hsl(var(--jwc-navy))] shadow-lg'
                : 'border-gray-200'
            }`}
          >
            {/* Pattern Visual */}
            <div className="aspect-square bg-gray-50 rounded mb-3 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full relative">
                {pattern.id === 'none' && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-50" />
                )}
                {pattern.id === 'rectangular' && (
                  <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-1 p-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="border-2 border-gray-400" />
                    ))}
                  </div>
                )}
                {pattern.id === 'partial' && (
                  <div className="w-full h-full flex flex-col">
                    <div className="h-1/3 grid grid-cols-3 gap-1 p-2 pb-0">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="border-2 border-gray-400" />
                      ))}
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-blue-50 to-gray-50" />
                  </div>
                )}
                {pattern.id === 'contour' && (
                  <div className="w-full h-full relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M10,30 Q50,10 90,30 L90,90 L10,90 Z"
                        fill="none"
                        stroke="#4A5568"
                        strokeWidth="3"
                      />
                      <line x1="30" y1="30" x2="30" y2="90" stroke="#4A5568" strokeWidth="3" />
                      <line x1="50" y1="20" x2="50" y2="90" stroke="#4A5568" strokeWidth="3" />
                      <line x1="70" y1="30" x2="70" y2="90" stroke="#4A5568" strokeWidth="3" />
                    </svg>
                  </div>
                )}
                {pattern.id === 'diamond' && (
                  <div className="w-full h-full relative p-2">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M50,10 L90,50 L50,90 L10,50 Z"
                        fill="none"
                        stroke="#4A5568"
                        strokeWidth="3"
                      />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="#4A5568" strokeWidth="3" />
                      <line x1="10" y1="50" x2="90" y2="50" stroke="#4A5568" strokeWidth="3" />
                    </svg>
                  </div>
                )}
              </div>
              {selectedPattern.id === pattern.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-[hsl(var(--jwc-navy))] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
            </div>

            {/* Pattern Info */}
            <div className="text-center">
              <p className="font-medium text-sm mb-1">{pattern.name}</p>
              <p className="text-xs text-gray-500">{pattern.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Pattern Details */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-2">Selected: {selectedPattern.name}</h4>
        <p className="text-gray-600">{selectedPattern.description}</p>
        <div className="mt-4 text-sm text-gray-500">
          <p>
            Grille patterns are available between the glass panes for easy cleaning and maintenance.
          </p>
        </div>
      </div>
    </div>
  )
}
