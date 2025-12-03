"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface GalleryImage {
  id: string
  title: string
  description: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'JWC8500 Casement Installation',
    description: 'Modern residential installation showcasing clean lines and maximum light',
    category: 'Installation'
  },
  {
    id: '2',
    title: 'Commercial Application',
    description: 'Large-scale commercial building featuring JWC8500 windows',
    category: 'Commercial'
  },
  {
    id: '3',
    title: 'Interior View',
    description: 'Contemporary nesting handle and interior finish detail',
    category: 'Details'
  },
  {
    id: '4',
    title: 'Exterior Slate Finish',
    description: 'JWC8500 with slate exterior color option',
    category: 'Colors'
  },
  {
    id: '5',
    title: 'Bay Window Configuration',
    description: 'Multi-unit bay window installation with JWC8500 hybrid technology',
    category: 'Installation'
  },
  {
    id: '6',
    title: 'Hardware Detail',
    description: 'Multi-point locking mechanism close-up',
    category: 'Details'
  },
  {
    id: '7',
    title: 'Energy Efficiency Testing',
    description: 'Thermal imaging demonstrating superior insulation performance',
    category: 'Performance'
  },
  {
    id: '8',
    title: 'Black FiniShield Interior',
    description: 'Premium black interior finish option',
    category: 'Colors'
  }
]

const categories = ['All', 'Installation', 'Commercial', 'Details', 'Colors', 'Performance']

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isFullscreen, setIsFullscreen] = useState(false)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const currentImage = filteredImages[currentIndex] || galleryImages[0]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentIndex(0)
            }}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-[hsl(var(--jwc-navy))] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Gallery Display */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main Image */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Image Placeholder with Pattern */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <svg viewBox="0 0 800 450" className="w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="800" height="450" fill="url(#grid)" />
              <rect x="100" y="75" width="600" height="300" fill="#f7fafc" stroke="#1a365d" strokeWidth="8" />
              <line x1="400" y1="75" x2="400" y2="375" stroke="#1a365d" strokeWidth="6" />
              <line x1="100" y1="225" x2="700" y2="225" stroke="#1a365d" strokeWidth="6" />
              <rect x="110" y="85" width="280" height="130" fill="#e3f2fd" opacity="0.6" />
              <rect x="410" y="85" width="280" height="130" fill="#e3f2fd" opacity="0.6" />
              <rect x="110" y="235" width="280" height="130" fill="#e3f2fd" opacity="0.6" />
              <rect x="410" y="235" width="280" height="130" fill="#e3f2fd" opacity="0.6" />
              <text
                x="400"
                y="230"
                textAnchor="middle"
                fill="#1a365d"
                fontSize="24"
                fontWeight="bold"
              >
                {currentImage.title}
              </text>
            </svg>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-lg flex items-center justify-center transition-all"
            aria-label="View fullscreen"
          >
            <Maximize2 size={18} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-full text-sm font-medium">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>

        {/* Image Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold">{currentImage.title}</h3>
            <span className="px-3 py-1 bg-[hsl(var(--jwc-gray-light))] text-[hsl(var(--jwc-navy))] text-sm rounded-full font-medium">
              {currentImage.category}
            </span>
          </div>
          <p className="text-gray-600">{currentImage.description}</p>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {filteredImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              currentIndex === index
                ? 'border-[hsl(var(--jwc-navy))] shadow-md scale-105'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg viewBox="0 0 100 60" className="w-full h-full p-2">
                <rect x="10" y="10" width="80" height="40" fill="none" stroke="#1a365d" strokeWidth="2" />
                <line x1="50" y1="10" x2="50" y2="50" stroke="#1a365d" strokeWidth="1.5" />
                <line x1="10" y1="30" x2="90" y2="30" stroke="#1a365d" strokeWidth="1.5" />
                <rect x="12" y="12" width="36" height="16" fill="#e3f2fd" opacity="0.6" />
                <rect x="52" y="12" width="36" height="16" fill="#e3f2fd" opacity="0.6" />
                <rect x="12" y="32" width="36" height="16" fill="#e3f2fd" opacity="0.6" />
                <rect x="52" y="32" width="36" height="16" fill="#e3f2fd" opacity="0.6" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Gallery Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-[hsl(var(--jwc-navy))] mb-1">
            {filteredImages.length}
          </div>
          <div className="text-sm text-gray-600">Images</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[hsl(var(--jwc-navy))] mb-1">
            {categories.length - 1}
          </div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[hsl(var(--jwc-navy))] mb-1">100+</div>
          <div className="text-sm text-gray-600">Installations</div>
        </div>
      </div>
    </div>
  )
}
