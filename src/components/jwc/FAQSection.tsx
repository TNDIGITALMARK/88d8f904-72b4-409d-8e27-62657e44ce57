"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What makes the JWC8500 a "hybrid" window?',
    answer:
      'The JWC8500 combines a vinyl interior with an extruded aluminum exterior cladding. This hybrid construction provides the low-maintenance benefits of vinyl inside while offering superior durability and weatherproofing from the aluminum exterior. The aluminum also allows for a 26% lower profile frame, increasing your glass area and natural light.'
  },
  {
    question: 'How does the JWC8500 compare to standard vinyl windows?',
    answer:
      'The JWC8500 offers up to 22% better energy efficiency compared to standard vinyl windows. The aluminum exterior with thermal break technology prevents heat transfer more effectively than vinyl alone. Additionally, the narrower frame profile provides more glass area, and the multi-point locking system offers enhanced security that exceeds standard vinyl window hardware.'
  },
  {
    question: 'What are the available color options?',
    answer:
      'Exterior colors include DF White, Slate, Black, Commercial Brown, and Clear Anodized aluminum finish. Interior options include White and Black FiniShield™. All finishes are designed for durability and low maintenance, with fade-resistant properties that maintain their appearance over decades of use.'
  },
  {
    question: 'Can the JWC8500 be used in commercial applications?',
    answer:
      'Yes, the JWC8500 is engineered for both residential and commercial applications. It meets commercial building code requirements including Class 5 wind resistance and is rated to meet Canada\'s 2030 ER 44 building code targets. The robust construction and superior energy performance make it ideal for multi-family housing, office buildings, and institutional projects.'
  },
  {
    question: 'What glass options are available?',
    answer:
      'We offer multiple glass packages including SunFlow™ (standard performance), SunStable™ (enhanced solar control), SunResist™ (maximum heat rejection), HeatResist™ (cold climate optimization), and Tri-Pane Acoustic (premium sound reduction). All packages include Low-E coatings and gas fills (argon or krypton) for optimal energy efficiency.'
  },
  {
    question: 'How do I clean and maintain the JWC8500 windows?',
    answer:
      'The JWC8500 requires minimal maintenance. Clean the glass with standard glass cleaner. The aluminum exterior can be washed with mild soap and water. The vinyl interior wipes clean easily. Weather stripping should be inspected annually and hardware should be lubricated periodically. Grilles are installed between the glass panes, eliminating the need to clean around them.'
  },
  {
    question: 'What warranty coverage is included?',
    answer:
      'The JWC8500 includes a comprehensive 10-year manufacturer warranty covering materials and workmanship. Glass seal failures are covered separately. Installation warranties vary by installer - we recommend using our certified installer network who typically offer 2-5 year installation warranties. Specific warranty details are provided at time of purchase.'
  },
  {
    question: 'What is the typical installation timeline?',
    answer:
      'Standard window orders typically ship within 4-6 weeks. Custom sizes or colors may require 6-8 weeks. Installation time depends on the number of windows but averages 2-4 hours per window for experienced installers. We recommend using our certified installer network for optimal results and warranty compliance.'
  },
  {
    question: 'Are the windows energy efficient enough to qualify for rebates?',
    answer:
      'Yes, the JWC8500 is designed to meet and exceed energy efficiency requirements for most utility and government rebate programs. With U-factors as low as 0.20 (tri-pane configuration), they qualify for ENERGY STAR certification and many provincial/federal energy efficiency incentive programs. Check with your local utility provider for specific rebate eligibility in your area.'
  },
  {
    question: 'Can I get custom sizes?',
    answer:
      'Absolutely. The JWC8500 can be manufactured to custom dimensions up to 8 feet wide and with various height options to match your architectural requirements. Custom geometric shapes are also available for unique design needs. Contact us for a quote on your specific dimensions - custom sizes typically add 1-2 weeks to the standard production timeline.'
  }
]

export function FAQSection() {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Find answers to common questions about the JWC8500 Hybrid Window system
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-white border-2 border-gray-200 rounded-lg px-6 data-[state=open]:border-[hsl(var(--jwc-navy))] transition-all"
          >
            <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="bg-[hsl(var(--jwc-gray-light))] p-6 rounded-lg text-center mt-8">
        <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-4">
          Our product specialists are ready to help you find the perfect window solution
        </p>
        <button className="bg-[hsl(var(--jwc-navy))] text-white px-6 py-3 rounded font-medium hover:bg-[hsl(var(--jwc-navy-dark))] transition-all">
          Contact Technical Support
        </button>
      </div>
    </div>
  )
}
