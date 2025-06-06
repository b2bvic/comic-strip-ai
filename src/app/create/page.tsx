import Link from 'next/link'
import { SparklesIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: "Create Your Comic | ComicStripAI",
  description: "Turn your story into a comic in seconds with our advanced AI comic generator."
}

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <SparklesIcon className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">ComicStripAI</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/learn" className="text-gray-600 hover:text-gray-900 transition-colors">Learn</Link>
              <Link href="/use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">Use Cases</Link>
              <Link href="/showcase" className="text-gray-600 hover:text-gray-900 transition-colors">Showcase</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Coming Soon */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <SparklesIcon className="mx-auto h-16 w-16 text-indigo-600 mb-8" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            AI Comic Generator
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Coming Soon! The most advanced AI comic generator that transforms your text into stunning comic strips.
          </p>
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 