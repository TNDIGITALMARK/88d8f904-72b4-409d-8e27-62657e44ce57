"use client"

import { useState } from 'react'
import { Info, X } from 'lucide-react'

interface HotspotProps {
  x: number
  y: number
  title: string
  description: string
}

export function InteractiveHotspot({ x, y, title, description }: HotspotProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hotspot Indicator */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute w-8 h-8 bg-[hsl(var(--jwc-navy))] border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-300 shadow-navy z-10"
        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
        aria-label={`View details about ${title}`}
      >
        <Info size={16} className="text-white" />
      </button>

      {/* Callout Panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 max-w-md w-full z-50 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[hsl(var(--jwc-navy))]">{title}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        </>
      )}
    </>
  )
}
