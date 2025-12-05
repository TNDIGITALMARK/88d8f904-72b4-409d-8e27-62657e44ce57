"use client"

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)

    this.setState({
      error,
      errorInfo
    })

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }

  public render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--jwc-ivory))] to-[hsl(var(--jwc-sand))] p-8">
          <div className="max-w-2xl w-full bg-white rounded-3xl shadow-luxury p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-4">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>

            <h1 className="text-4xl font-semibold text-[hsl(var(--jwc-navy))] mb-4">
              Something Went Wrong
            </h1>

            <p className="text-lg text-[hsl(var(--foreground))]/70 leading-relaxed max-w-lg mx-auto">
              We apologize for the inconvenience. An unexpected error occurred while displaying this content.
              Our team has been notified and we're working to fix it.
            </p>

            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left bg-gray-50 p-6 rounded-lg mt-6 border border-gray-200">
                <summary className="cursor-pointer font-semibold text-[hsl(var(--jwc-navy))] mb-3">
                  Error Details (Development Only)
                </summary>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-red-600 mb-2">Error Message:</p>
                    <code className="block bg-red-50 p-3 rounded text-sm text-red-800 overflow-x-auto">
                      {this.state.error.message}
                    </code>
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <p className="font-medium text-red-600 mb-2">Stack Trace:</p>
                      <pre className="bg-red-50 p-3 rounded text-xs text-red-800 overflow-x-auto max-h-60">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo && (
                    <div>
                      <p className="font-medium text-red-600 mb-2">Component Stack:</p>
                      <pre className="bg-red-50 p-3 rounded text-xs text-red-800 overflow-x-auto max-h-60">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--jwc-navy))] to-[hsl(var(--jwc-navy-dark))] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-navy transition-all duration-300 hover:-translate-y-1"
              >
                <RefreshCw size={18} />
                Try Again
              </button>

              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-[hsl(var(--jwc-navy))] px-8 py-3.5 rounded-xl font-semibold border-2 border-[hsl(var(--jwc-navy))] hover:bg-[hsl(var(--jwc-navy))] hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Home size={18} />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Functional wrapper for easier usage
export function ErrorBoundaryWrapper({
  children,
  fallback
}: {
  children: ReactNode
  fallback?: ReactNode
}) {
  return (
    <ErrorBoundary fallback={fallback}>
      {children}
    </ErrorBoundary>
  )
}
