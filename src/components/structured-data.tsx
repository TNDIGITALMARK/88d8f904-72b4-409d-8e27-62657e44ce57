interface ProductStructuredDataProps {
  name: string
  description: string
  brand?: string
  image?: string
  offers?: {
    price: string
    priceCurrency: string
    availability: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}

export function ProductStructuredData({
  name,
  description,
  brand = "JWC Windows",
  image = "/generated/jwc-logo.png",
  offers,
  aggregateRating
}: ProductStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "image": image,
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.priceCurrency,
        "availability": `https://schema.org/${offers.availability}`,
        "seller": {
          "@type": "Organization",
          "name": brand
        }
      }
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface OrganizationStructuredDataProps {
  name: string
  description?: string
  url?: string
  logo?: string
  contactPoint?: {
    telephone: string
    contactType: string
    areaServed?: string
    availableLanguage?: string[]
  }
  sameAs?: string[]
}

export function OrganizationStructuredData({
  name,
  description = "Premium window manufacturer specializing in hybrid window systems for residential and commercial applications",
  url = "https://jwcwindows.com",
  logo = "/generated/jwc-logo.png",
  contactPoint,
  sameAs
}: OrganizationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": url,
    "logo": logo,
    ...(contactPoint && {
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": contactPoint.telephone,
        "contactType": contactPoint.contactType,
        "areaServed": contactPoint.areaServed || "US",
        "availableLanguage": contactPoint.availableLanguage || ["en"]
      }
    }),
    ...(sameAs && { "sameAs": sameAs })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface FAQStructuredDataProps {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function FAQStructuredData({ questions }: FAQStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Local Business structured data for service areas
interface LocalBusinessStructuredDataProps {
  name: string
  description: string
  image?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  telephone?: string
  openingHours?: string[]
  priceRange?: string
}

export function LocalBusinessStructuredData({
  name,
  description,
  image = "/generated/jwc-logo.png",
  address,
  geo,
  telephone = "1-800-JWC-8500",
  openingHours = ["Mo-Fr 08:00-18:00"],
  priceRange = "$$$"
}: LocalBusinessStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "image": image,
    "telephone": telephone,
    "openingHours": openingHours,
    "priceRange": priceRange,
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      }
    }),
    ...(geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
