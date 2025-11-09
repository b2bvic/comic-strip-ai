"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SparklesIcon, PhotoIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const artStyles = [
  { name: 'Manga', icon: BookOpenIcon },
  { name: 'Classic American', icon: BookOpenIcon },
  { name: 'Sci-Fi Noir', icon: BookOpenIcon },
  { name: 'Pixel Art', icon: BookOpenIcon },
]

export default function CreatePage() {
  const [story, setStory] = useState('')
  const [characters, setCharacters] = useState('')
  const [style, setStyle] = useState(artStyles[0].name)
  const [isLoading, setIsLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setGeneratedImage(null)

    setTimeout(() => {
      // In a real app, this would be the URL of the generated comic
      setGeneratedImage('https://upload.wikimedia.org/wikipedia/commons/6/6b/Little_nemo_the_walking_bed.jpg')
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
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

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Turn Your Story into a Comic in Seconds
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Provide your story, describe your characters, choose a style, and let our AI bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Panel */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <form onSubmit={handleGenerate}>
                <div className="space-y-8">
                  <div>
                    <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
                      Story or Script
                    </label>
                    <textarea
                      id="story"
                      rows={8}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="e.g., A brave knight travels to a mysterious castle to rescue a captured dragon..."
                      value={story}
                      onChange={(e) => setStory(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="characters" className="block text-sm font-medium text-gray-700 mb-2">
                      Character Sheet
                    </label>
                    <textarea
                      id="characters"
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="e.g., Sir Kael, the knight: brave, with shining silver armor and a red plume on his helmet. Sparky, the dragon: small, green, and mischievous, breathes sparks instead of fire."
                      value={characters}
                      onChange={(e) => setCharacters(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Art Style
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {artStyles.map((artStyle) => (
                        <button
                          key={artStyle.name}
                          type="button"
                          onClick={() => setStyle(artStyle.name)}
                          className={`flex items-center p-4 rounded-lg border transition-all duration-200 ${
                            style === artStyle.name ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500' : 'bg-gray-50 border-gray-200 hover:bg-indigo-50 hover:border-indigo-400'
                          }`}
                        >
                          <artStyle.icon className="h-6 w-6 mr-3 text-gray-500" />
                          <span className="font-medium text-gray-800">{artStyle.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 flex items-center justify-center"
                    disabled={isLoading}
                  >
                    <SparklesIcon className="h-6 w-6 mr-3" />
                    {isLoading ? 'Generating...' : 'Generate Comic'}
                  </button>
                </div>
              </form>
            </div>

            {/* Preview Panel */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex items-center justify-center">
              <div className="w-full h-full min-h-[400px] bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 relative">
                {isLoading ? (
                  <div className="text-center text-gray-500">
                    <SparklesIcon className="mx-auto h-12 w-12 mb-4 animate-pulse" />
                    <p className="font-medium">Generating your comic...</p>
                    <p className="text-sm">This may take a few seconds</p>
                  </div>
                ) : generatedImage ? (
                  <Image src={generatedImage} alt="Generated Comic" width={500} height={500} className="w-full h-full object-contain rounded-lg" />
                ) : (
                  <div className="text-center text-gray-500">
                    <PhotoIcon className="mx-auto h-12 w-12 mb-4" />
                    <p className="font-medium">Your generated comic will appear here</p>
                    <p className="text-sm">Fill out the details and click &quot;Generate Comic&quot;</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
} 