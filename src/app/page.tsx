import { SparklesIcon, BookOpenIcon, UserGroupIcon, AcademicCapIcon, PresentationChartBarIcon, PhotoIcon, ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import { StarIcon, PlayIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export const metadata = {
  title: "ComicStripAI | The Most Advanced AI Comic Generator",
  description: "Turn your story into a comic in seconds. Experience the future of storytelling with our AI Comic Generator that converts text into stunning comic strips with consistent characters and dynamic scenes."
}

const features = [
  {
    title: 'AI-Powered Generation',
    description: 'Advanced AI understands your story and creates visually stunning comic panels in seconds with consistent characters.',
    icon: SparklesIcon,
    href: '/create'
  },
  {
    title: 'Multiple Art Styles', 
    description: 'Choose from Manga, Classic American, Sci-Fi Noir, and more professional artistic styles.',
    icon: BookOpenIcon,
    href: '/learn/styles'
  },
  {
    title: 'Character Consistency',
    description: 'Keep your characters looking the same across all panels with our advanced seed technology.',
    icon: UserGroupIcon,
    href: '/learn/prompting/character-design-prompts'
  }
]

const learningSections = [
  {
    title: 'Prompting Guides',
    description: 'Master the art of AI comic prompts with our comprehensive guides and examples.',
    icon: AcademicCapIcon,
    href: '/learn/prompting',
    topics: ['Character Design', 'Scene Description', 'Advanced Techniques']
  },
  {
    title: 'Art Styles',
    description: 'Explore every AI comic art style from Manga to Classic American and beyond.',
    icon: PhotoIcon,
    href: '/learn/styles',
    topics: ['Manga & Anime', 'Classic American', 'Sci-Fi Noir']
  },
  {
    title: 'Storytelling',
    description: 'Learn the fundamentals of visual storytelling and narrative structure.',
    icon: BookOpenIcon,
    href: '/learn/storytelling',
    topics: ['Panel Composition', 'Story Structure', 'Character Development']
  }
]

const useCases = [
  {
    title: 'Marketing & Advertising',
    description: 'Create engaging comics for social media, ad campaigns, and viral content.',
    icon: PresentationChartBarIcon,
    href: '/use-cases/marketing-and-ads',
    examples: ['Social Media Posts', 'Product Explainers', 'Brand Storytelling']
  },
  {
    title: 'Education & Training',
    description: 'Transform lessons into visual stories that make learning memorable.',
    icon: AcademicCapIcon,
    href: '/use-cases/education-and-training',
    examples: ['Lesson Plans', 'Training Materials', 'Educational Content']
  },
  {
    title: 'Content Creation',
    description: 'Generate original comics for blogs, websites, and publications.',
    icon: PhotoIcon,
    href: '/use-cases/content-creation',
    examples: ['Blog Illustrations', 'Newsletter Content', 'Website Graphics']
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    content: 'ComicStripAI transformed how I create content. What used to take hours now takes minutes, and the quality is incredible.',
    rating: 5,
    avatar: '/avatars/sarah.jpg'
  },
  {
    name: 'Mike Rodriguez',
    role: 'Marketing Director', 
    content: 'Our social media engagement increased 300% after we started using AI-generated comics for our campaigns.',
    rating: 5,
    avatar: '/avatars/mike.jpg'
  },
  {
    name: 'Emma Thompson',
    role: 'Teacher',
    content: 'My students love the comics I create to explain complex topics. ComicStripAI makes learning visual and fun.',
    rating: 5,
    avatar: '/avatars/emma.jpg'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out AI comic generation',
    features: ['5 comics per month', 'Basic art styles', 'Standard resolution'],
    cta: 'Start Free',
    href: '/create'
  },
  {
    name: 'Creator',
    price: '$19',
    description: 'For content creators and professionals',
    features: ['Unlimited comics', 'All art styles', 'High resolution', 'Commercial license'],
    cta: 'Get Started',
    href: '/pricing',
    popular: true
  },
  {
    name: 'Business',
    price: '$49',
    description: 'For teams and businesses',
    features: ['Everything in Creator', 'Team collaboration', 'Priority support', 'API access'],
    cta: 'Contact Sales',
    href: '/pricing'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/create" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
                Start Creating
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Turn Your Story Into
              <span className="text-indigo-600"> Comics</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-600">in Seconds</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Experience the future of storytelling. Our AI Comic Generator converts your text into stunning comic strips with consistent characters and dynamic scenes. No design experience required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/create"
                className="rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Start Creating Free
              </Link>
              <button className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
                <PlayIcon className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Preview */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See ComicStripAI in Action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From text description to professional comic in seconds
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Input:</h3>
              <p className="text-gray-600 italic">
                &ldquo;A young detective discovers a mysterious glowing letter in an abandoned library. She opens it with trembling hands as magical energy swirls around her.&rdquo;
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <SparklesIcon className="h-5 w-5" />
              <span>AI Processing: Character consistency, scene composition, artistic style</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900">Style</div>
                <div className="text-gray-600">Manga</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900">Panels</div>
                <div className="text-gray-600">3</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900">Time</div>
                <div className="text-gray-600">~5 sec</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
            <div className="aspect-[4/3] bg-white rounded-lg shadow-xl flex items-center justify-center">
              <div className="text-center">
                <SparklesIcon className="mx-auto h-16 w-16 text-indigo-400 mb-4" />
                <p className="text-sm text-gray-500 mb-2">Your comic strip will appear here</p>
                <p className="text-xs text-gray-400">High-resolution, print-ready output</p>
                <Link href="/create" className="inline-block mt-4 text-indigo-600 hover:text-indigo-500 font-medium">
                  Try it now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Create Amazing Comics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional-grade tools powered by advanced AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link 
                key={feature.title} 
                href={feature.href}
                className="group text-center p-8 rounded-xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="mx-auto h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center justify-center text-indigo-600 font-medium group-hover:text-indigo-500">
                  Learn more
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Hub Preview */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Master AI Comic Creation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive guides to help you create stunning comics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningSections.map((section) => (
              <div key={section.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <div className="space-y-2 mb-6">
                  {section.topics.map((topic) => (
                    <div key={topic} className="flex items-center text-sm text-gray-500">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                      {topic}
                    </div>
                  ))}
                </div>
                <Link 
                  href={section.href}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Explore guides
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perfect for Every Use Case
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From marketing campaigns to educational content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2 mb-6">
                  {useCase.examples.map((example) => (
                    <div key={example} className="flex items-center text-sm text-gray-500">
                      <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full mr-3"></div>
                      {example}
                    </div>
                  ))}
                </div>
                <Link 
                  href={useCase.href}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Learn more
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by Creators Worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of content creators, marketers, and storytellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find the Perfect Plan for Your Creative Needs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start free, upgrade as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-xl p-8 ${plan.popular ? 'ring-2 ring-indigo-500 shadow-lg' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Free' && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={plan.href}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Bring Your Stories to Life?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already transforming their ideas into stunning visual stories. Start creating professional comics today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/create"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Start Creating Free
              </Link>
              <Link
                href="/showcase"
                className="rounded-lg border border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Showcase
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold text-white">ComicStripAI</span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                The most advanced AI comic generator. Transform your stories into stunning visual narratives with professional quality and consistent characters.
              </p>
              <div className="flex space-x-4">
                {/* Social links would go here */}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link href="/create" className="text-gray-400 hover:text-white transition-colors">Comic Generator</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/showcase" className="text-gray-400 hover:text-white transition-colors">Showcase</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Learn</h3>
              <ul className="space-y-3">
                <li><Link href="/learn/prompting" className="text-gray-400 hover:text-white transition-colors">Prompting Guides</Link></li>
                <li><Link href="/learn/styles" className="text-gray-400 hover:text-white transition-colors">Art Styles</Link></li>
                <li><Link href="/learn/storytelling" className="text-gray-400 hover:text-white transition-colors">Storytelling</Link></li>
                <li><Link href="/use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">&copy; 2024 ComicStripAI. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
