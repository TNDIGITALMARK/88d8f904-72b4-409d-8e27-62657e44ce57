"use client"

import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200/60", className)}
      {...props}
    />
  )
}

// Pre-built skeleton components for common use cases
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-3xl border border-[hsl(var(--jwc-border-elegant))] bg-white p-8 shadow-lg", className)}>
      <Skeleton className="h-16 w-16 rounded-2xl mb-6" />
      <Skeleton className="h-7 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/5" />
      <div className="space-y-3 mt-6">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jwc-ivory))] via-white to-[hsl(var(--jwc-sand))]"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Skeleton className="h-12 w-64 rounded-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/5" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-14 w-56 rounded-2xl" />
              <Skeleton className="h-14 w-48 rounded-2xl" />
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductGallerySkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  )
}

export function SpecCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[hsl(var(--jwc-border-elegant))] p-8 shadow-lg space-y-4">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-8 w-40" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[hsl(var(--jwc-navy))] p-4">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: cols }).map((_, i) => (
            <Skeleton key={i} className="h-5 bg-white/20" />
          ))}
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="p-4">
            <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <Skeleton key={colIndex} className="h-4" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FAQSkeleton({ items = 5 }: { items?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-6">
          <Skeleton className="h-6 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <Skeleton className="h-10 w-96 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-8">
          <Skeleton className="h-10 w-72 mx-auto mb-12" />
          <ProductGallerySkeleton />
        </div>
      </section>
    </div>
  )
}
