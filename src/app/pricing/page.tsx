import Link from 'next/link'
import { SparklesIcon, CheckIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: "Pricing & Plans | ComicStripAI",
  description: "Find the perfect plan for your creative needs. Start free, upgrade as you grow."
}

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out AI comic generation',
    features: ['5 comics per month', 'Basic art styles', 'Standard resolution', 'Community support'],
    cta: 'Start Free',
    href: '/create'
  },
  {
    name: 'Creator',
    price: '$19',
    description: 'For content creators and professionals',
    features: ['Unlimited comics', 'All art styles', 'High resolution', 'Commercial license', 'Priority support'],
    cta: 'Get Started',
    href: '/create',
    popular: true
  },
  {
    name: 'Business',
    price: '$49',
    description: 'For teams and businesses',
    features: ['Everything in Creator', 'Team collaboration', 'Priority support', 'API access', 'Custom integrations'],
    cta: 'Contact Sales',
    href: '/contact'
  }
]

export default function PricingPage() {
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
              <Link href="/pricing" className="text-indigo-600 font-medium">Pricing</Link>
              <Link href="/create" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
                Start Creating
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Find the Perfect Plan for Your Creative Needs
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Start free, upgrade as you grow. All plans include our core AI comic generation features.
          </p>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-xl p-8 ${plan.popular ? 'ring-2 ring-indigo-500 shadow-lg' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Free' && <span className="text-gray-500 text-lg">/month</span>}
                </div>
                <p className="text-gray-600 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
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

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I try ComicStripAI for free?</h3>
              <p className="text-gray-600">Yes! Our Starter plan includes 5 free comics per month so you can test our AI comic generator.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What makes ComicStripAI different?</h3>
              <p className="text-gray-600">Our advanced AI ensures character consistency across panels and supports multiple professional art styles.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use the comics commercially?</h3>
              <p className="text-gray-600">Yes, Creator and Business plans include full commercial licenses for all generated comics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Creating?
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Join thousands of creators transforming their stories into stunning comics.
            </p>
            <Link
              href="/create"
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 transition-colors"
            >
              Start Creating Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 