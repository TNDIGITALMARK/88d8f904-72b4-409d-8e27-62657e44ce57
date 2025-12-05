"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/jwc/Header'
import { Footer } from '@/components/jwc/Footer'
import { Phone, Mail, MapPin, CheckCircle2, ArrowLeft, Loader2, AlertCircle } from 'lucide-react'

interface FormErrors {
  [key: string]: string
}

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    projectType: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    quantity: '',
    timeline: '',
    budget: '',
    customSizing: false,
    width: '',
    height: '',
    additionalNotes: ''
  })

  // Comprehensive form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }

    // Company name validation
    if (!formData.companyName || formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters'
    }

    // Contact name validation
    if (!formData.contactName || formData.contactName.trim().length < 2) {
      newErrors.contactName = 'Contact name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    const phoneRegex = /^[0-9()\s+-]{10,}$/
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)'
    }

    // Quantity validation
    const quantity = parseInt(formData.quantity)
    if (!formData.quantity || isNaN(quantity) || quantity < 1) {
      newErrors.quantity = 'Please enter a valid quantity (at least 1)'
    } else if (quantity > 10000) {
      newErrors.quantity = 'For orders over 10,000 units, please contact us directly'
    }

    // Timeline validation
    if (!formData.timeline) {
      newErrors.timeline = 'Please select an installation timeline'
    }

    // Budget validation
    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range'
    }

    // Custom sizing validation
    if (formData.customSizing) {
      const width = parseFloat(formData.width)
      const height = parseFloat(formData.height)

      if (!formData.width || isNaN(width) || width <= 0) {
        newErrors.width = 'Please enter a valid width'
      } else if (width > 8) {
        newErrors.width = 'Width cannot exceed 8 feet'
      }

      if (!formData.height || isNaN(height) || height <= 0) {
        newErrors.height = 'Please enter a valid height'
      } else if (height > 12) {
        newErrors.height = 'Height cannot exceed 12 feet'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Clear previous errors
    setErrors({})

    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element.focus()
      }
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 1500))

      // In production, send to actual backend
      console.log('Quote request submitted:', formData)

      setSubmitted(true)

      // Reset form after successful submission
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)

    } catch (error) {
      console.error('Submission error:', error)
      setErrors({
        submit: 'There was an error submitting your request. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="pt-[72px] min-h-screen flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-8 py-16">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-green-600" />
              </div>
              <h1 className="mb-4">Quote Request Received!</h1>
              <p className="text-xl text-gray-700 mb-8">
                Thank you for your interest in the JWC8500 Hybrid Series. A member of our sales team will contact you within 24 hours.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-lg mb-4">What happens next?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">1.</span>
                    <span>Our team will review your project requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">2.</span>
                    <span>We'll prepare a detailed quote with pricing and availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">3.</span>
                    <span>A sales representative will contact you to discuss your project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(var(--jwc-navy))] font-bold mt-1">4.</span>
                    <span>We'll connect you with our certified installer network if needed</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-[hsl(var(--jwc-navy))] text-white px-8 py-3 rounded font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all inline-flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Return to Product Page
                </Link>
                <Link
                  href="/specifications"
                  className="bg-white text-[hsl(var(--jwc-navy))] px-8 py-3 rounded font-medium border-2 border-[hsl(var(--jwc-navy))] hover:bg-[hsl(var(--jwc-navy))] hover:text-white transition-all"
                >
                  View Specifications
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Page Header */}
        <section className="bg-[hsl(var(--jwc-navy))] text-white py-16">
          <div className="container mx-auto px-8">
            <div className="text-sm font-medium text-white/80 mb-4">
              Windows › Hybrid Series › JWC8500 › Request Quote
            </div>
            <h1 className="text-white mb-4">Request a Quote</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Get pricing and availability for the JWC8500 Hybrid Series. Our team will prepare a customized quote based on your project requirements.
            </p>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-lg mb-3">Starting Price</h3>
                <div className="text-4xl font-bold text-[hsl(var(--jwc-navy))] mb-2">$850</div>
                <p className="text-gray-600 text-sm mb-4">per unit (standard size)</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Includes standard frame and dual-pane glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>10-year comprehensive warranty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Standard color options</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-lg mb-3">Volume Discounts</h3>
                <div className="text-4xl font-bold text-[hsl(var(--jwc-navy))] mb-2">Available</div>
                <p className="text-gray-600 text-sm mb-4">for orders over 50 units</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Tiered pricing for large projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Flexible payment terms available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--jwc-navy))] mt-1">•</span>
                    <span>Dedicated project manager assigned</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Request Form */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-12">Project Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Global Error Message */}
                {errors.submit && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3" role="alert">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900">Submission Error</p>
                      <p className="text-red-700 text-sm mt-1">{errors.submit}</p>
                    </div>
                  </div>
                )}

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20 transition-colors ${
                      errors.projectType ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-invalid={errors.projectType ? 'true' : 'false'}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                  >
                    <option value="">Select project type</option>
                    <option value="new-construction">New Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="replacement">Window Replacement</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="residential">Residential</option>
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.projectType}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                    placeholder="Your company name"
                  />
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity Needed *
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                      placeholder="Number of windows"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Installation Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="1-month">1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-plus-months">6+ Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-plus">$250,000+</option>
                  </select>
                </div>

                {/* Custom Sizing */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="checkbox"
                      id="customSizing"
                      name="customSizing"
                      checked={formData.customSizing}
                      onChange={handleChange}
                      className="w-5 h-5 text-[hsl(var(--jwc-navy))] border-gray-300 rounded focus:ring-[hsl(var(--jwc-navy))]"
                    />
                    <label htmlFor="customSizing" className="text-sm font-medium text-gray-700">
                      I need custom sizing
                    </label>
                  </div>
                  {formData.customSizing && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-2">
                          Width (feet)
                        </label>
                        <input
                          type="number"
                          id="width"
                          name="width"
                          value={formData.width}
                          onChange={handleChange}
                          step="0.5"
                          max="8"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                          placeholder="Max 8 feet"
                        />
                      </div>
                      <div>
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                          Height (feet)
                        </label>
                        <input
                          type="number"
                          id="height"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          step="0.5"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                          placeholder="Custom height"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[hsl(var(--jwc-navy))] focus:ring-2 focus:ring-[hsl(var(--jwc-navy))]/20"
                    placeholder="Any additional requirements, questions, or special considerations..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[hsl(var(--jwc-navy))] text-white px-8 py-4 rounded-lg font-medium transition-all text-lg shadow-navy inline-flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[hsl(var(--jwc-navy-dark))] hover:-translate-y-0.5'
                  }`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={22} className="animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <span>Submit Quote Request</span>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by JWC Premium Windows regarding your project.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center mb-12">Or Contact Us Directly</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-[hsl(var(--jwc-navy))]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-700">1-800-JWC-8500</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8am-6pm EST</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-[hsl(var(--jwc-navy))]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-700">sales@jwcwindows.com</p>
                <p className="text-sm text-gray-500 mt-1">24-hour response time</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-[hsl(var(--jwc-navy))]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Service Area</h3>
                <p className="text-gray-700">Nationwide</p>
                <p className="text-sm text-gray-500 mt-1">Certified installers available</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
