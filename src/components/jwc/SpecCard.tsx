import { LucideIcon } from 'lucide-react'

interface SpecCardProps {
  icon: LucideIcon
  title: string
  value: string
  description?: string
}

export function SpecCard({ icon: Icon, title, value, description }: SpecCardProps) {
  return (
    <div className="bg-white border border-[hsl(var(--jwc-gray-border))] rounded-lg p-6 shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[hsl(var(--jwc-gray-light))] flex items-center justify-center">
          <Icon size={24} className="text-[hsl(var(--jwc-navy))]" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-2xl font-bold text-[hsl(var(--jwc-navy))]">{value}</p>
          {description && (
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}
