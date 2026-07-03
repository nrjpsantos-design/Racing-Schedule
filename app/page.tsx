import { Suspense } from 'react'
import { RaceGrid } from '@/components/RaceGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ALL_CHAMPIONSHIPS } from '@/data/index'
import { RefreshCw } from 'lucide-react'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <ErrorBoundary>
          <Suspense fallback={
            <div className="flex items-center justify-center py-20 text-gray-400">
              <RefreshCw className="w-5 h-5 animate-spin mr-2" />
              Loading schedule…
            </div>
          }>
            <RaceGrid championships={ALL_CHAMPIONSHIPS} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  )
}
