import { BookOpenIcon, LightBulbIcon, PaintBrushIcon, PencilIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata = {
  title: "Learn AI Comic Creation - Tutorials & Guides | ComicStripAI",
  description: "Master the art of AI comic generation. Explore our in-depth guides on prompt writing, character design, panel layouts, and more."
}

const categories = [
  {
    title: 'Prompting Guides',
    description: 'Master the art of writing effective prompts for AI comic generation',
    icon: PencilIcon,
    href: '/learn/prompting',
    articles: [
      { title: '15 Essential Prompts for Consistent AI Character Design', href: '/learn/prompting/character-design-prompts' },
      { title: 'Scene Description Prompts That Create Dynamic Action', href: '/learn/prompting/scene-description-prompts' },
      { title: 'Advanced Prompt Engineering for Comic Dialogue', href: '/learn/prompting/dialogue-prompts' }
    ]
  },
  {
    title: 'Comic Art Styles',
    description: 'Explore different artistic styles and learn when to use each one',
    icon: PaintBrushIcon,
    href: '/learn/styles',
    articles: [
      { title: 'How to Generate Perfect Manga & Anime Style Comics with AI', href: '/learn/styles/manga-and-anime' },
      { title: 'Creating Classic American Comic Book Art with AI', href: '/learn/styles/classic-american' },
      { title: 'Mastering Sci-Fi Noir Style for Futuristic Comics', href: '/learn/styles/sci-fi-noir' }
    ]
  },
  {
    title: 'Storytelling Techniques',
    description: 'Learn the fundamentals of visual storytelling for comics',
    icon: BookOpenIcon,
    href: '/learn/storytelling',
    articles: [
      { title: 'Panel Composition and Layout Design Fundamentals', href: '/learn/storytelling/panel-composition' },
      { title: 'Creating Compelling Character Arcs in Comics', href: '/learn/storytelling/character-arcs' },
      { title: 'Visual Pacing and Rhythm in Comic Storytelling', href: '/learn/storytelling/visual-pacing' }
    ]
  },
  {
    title: 'Advanced Techniques',
    description: 'Pro tips and advanced methods for creating professional comics',
    icon: LightBulbIcon,
    href: '/learn/advanced',
    articles: [
      { title: 'Character Consistency Across Multiple Panels', href: '/learn/advanced/character-consistency' },
      { title: 'Creating Complex Backgrounds and Environments', href: '/learn/advanced/backgrounds' },
      { title: 'Color Theory and Mood Setting in AI Comics', href: '/learn/advanced/color-theory' }
    ]
  }
]

const featuredArticles = [
  {
    title: 'The Complete Guide to AI Comic Generation',
    description: 'Everything you need to know to get started with AI comic creation',
    category: 'Getting Started',
    readTime: '15 min read',
    href: '/learn/complete-guide'
  },
  {
    title: 'Character Design Best Practices for AI Comics',
    description: 'Learn how to create memorable, consistent characters using AI',
    category: 'Character Design',
    readTime: '12 min read',
    href: '/learn/character-design-best-practices'
  },
  {
    title: 'From Script to Comic: A Step-by-Step Workflow',
    description: 'Turn your story ideas into professional comic strips',
    category: 'Workflow',
    readTime: '18 min read',
    href: '/learn/script-to-comic-workflow'
  }
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Learn AI Comic Creation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Master the art of AI comic generation with comprehensive guides, tutorials, and best practices from our community of creators.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredArticles.map((article) => (
            <Link key={article.title} href={article.href} className="group">
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Learning Categories */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Explore Learning Topics
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            From beginner basics to advanced techniques, find the perfect guide for your skill level.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-3 mb-6">
                  {category.articles.map((article) => (
                    <Link 
                      key={article.title} 
                      href={article.href}
                      className="block text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
                
                <Link 
                  href={category.href}
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all articles
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-indigo-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Creator Community
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Connect with other comic creators, share your work, and learn from the best in the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-50">
              Browse Showcase
            </button>
            <button className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
              Start Creating
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 