"use client"

import { useState } from 'react'
import { Check, Sun, Shield, ThermometerSnowflake, Volume2 } from 'lucide-react'

interface GlassType {
  id: string
  name: string
  description: string
  features: string[]
  icon: any
  benefit: string
}

const glassTypes: GlassType[] = [
  {
    id: 'sunflow',
    name: 'SunFlow™',
    description: 'Standard dual-pane performance',
    features: ['Low-E coating', 'Argon gas fill', 'UV protection'],
    icon: Sun,
    benefit: 'Balanced energy efficiency for year-round comfort'
  },
  {
    id: 'sunstable',
    name: 'SunStable™',
    description: 'Enhanced solar control',
    features: ['Advanced Low-E coating', 'Enhanced UV blocking', 'Reduced solar heat gain'],
    icon: Shield,
    benefit: 'Protect interiors from fading while maintaining natural light'
  },
  {
    id: 'sunresist',
    name: 'SunResist™',
    description: 'Maximum solar rejection',
    features: ['Triple silver Low-E', 'Maximum heat rejection', 'Tinted glass option'],
    icon: ThermometerSnowflake,
    benefit: 'Superior cooling cost reduction in hot climates'
  },
  {
    id: 'heatresist',
    name: 'HeatResist™',
    description: 'Cold climate optimization',
    features: ['Triple-pane construction', 'Krypton gas fill', 'Maximum R-value'],
    icon: ThermometerSnowflake,
    benefit: 'Exceptional insulation for harsh winter conditions'
  },
  {
    id: 'tripane',
    name: 'Tri-Pane Acoustic',
    description: 'Premium sound reduction',
    features: ['Triple-pane design', 'Laminated glass layers', '35dB+ sound reduction'],
    icon: Volume2,
    benefit: 'Ultimate noise control for urban environments'
  }
]

const glassConfigurations = [
  { name: 'Dual-Pane', thickness: '1"', uFactor: '0.28', description: 'Standard energy efficiency' },
  {
    name: 'Tri-Pane',
    thickness: '1.5"',
    uFactor: '0.20',
    description: 'Enhanced insulation & sound control'
  }
]

export function GlassTypeSelector() {
  const [selectedGlass, setSelectedGlass] = useState(glassTypes[0])
  const [selectedConfig, setSelectedConfig] = useState(glassConfigurations[0])

  return (
    <div className="space-y-8">
      {/* Glass Type Selection */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Glass Technology</h3>
        <p className="text-gray-600 mb-6">
          Choose the glass package that best suits your climate and performance needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {glassTypes.map((glass) => {
            const Icon = glass.icon
            return (
              <button
                key={glass.id}
                onClick={() => setSelectedGlass(glass)}
                className={`text-left bg-white border-2 rounded-lg p-5 transition-all hover:shadow-md ${
                  selectedGlass.id === glass.id
                    ? 'border-[hsl(var(--jwc-navy))] shadow-lg'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[hsl(var(--jwc-navy))]" />
                  </div>
                  {selectedGlass.id === glass.id && (
                    <div className="w-6 h-6 bg-[hsl(var(--jwc-navy))] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>

                <h4 className="font-semibold text-base mb-1">{glass.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{glass.description}</p>

                <ul className="space-y-1 mb-3">
                  {glass.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start gap-1">
                      <span className="text-[hsl(var(--jwc-navy))] mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Glass Details */}
      <div className="bg-gradient-to-br from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] text-white p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            {(() => {
              const Icon = selectedGlass.icon
              return <Icon className="w-6 h-6 text-white" />
            })()}
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">{selectedGlass.name}</h4>
            <p className="text-white/90 mb-3">{selectedGlass.benefit}</p>
            <div className="flex flex-wrap gap-2">
              {selectedGlass.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Selection */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Glass Configuration</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {glassConfigurations.map((config) => (
            <button
              key={config.name}
              onClick={() => setSelectedConfig(config)}
              className={`text-left bg-white border-2 rounded-lg p-5 transition-all hover:shadow-md ${
                selectedConfig.name === config.name
                  ? 'border-[hsl(var(--jwc-navy))] shadow-lg'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg">{config.name}</h4>
                {selectedConfig.name === config.name && (
                  <div className="w-6 h-6 bg-[hsl(var(--jwc-navy))] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Thickness:</span>
                  <span className="font-medium">{config.thickness}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">U-Factor:</span>
                  <span className="font-medium">{config.uFactor}</span>
                </div>
                <p className="text-gray-500 text-xs pt-2">{config.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-4">Your Configuration Performance</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-2xl font-bold text-[hsl(var(--jwc-navy))] mb-1">
              {selectedConfig.uFactor}
            </div>
            <div className="text-sm text-gray-600">U-Factor</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[hsl(var(--jwc-navy))] mb-1">
              {selectedConfig.name === 'Tri-Pane' ? '35+' : '28'}dB
            </div>
            <div className="text-sm text-gray-600">Sound Reduction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[hsl(var(--jwc-navy))] mb-1">99%</div>
            <div className="text-sm text-gray-600">UV Blocked</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[hsl(var(--jwc-navy))] mb-1">
              {selectedConfig.name === 'Tri-Pane' ? '22%' : '15%'}
            </div>
            <div className="text-sm text-gray-600">Energy Savings</div>
          </div>
        </div>
      </div>
    </div>
  )
}
