'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PageLayout } from '@/components/layout/PageLayout';
import { 
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-8 animate-pulse">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] hover:animate-gradient-hover transition-all duration-300">
                The Future of Creator Partnerships
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Transform{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] animate-gradient-shift">
                Your Brand
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              AI-powered creator partnerships that drive real business results. Discover, analyze, and collaborate with the perfect creators to amplify your brand's reach and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/discover">
                <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 backdrop-blur-sm">
                  Explore Creators
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                label: 'Launch Date', 
                value: 'Coming Soon',
                description: 'Early access',
                href: '/auth/register',
              },
              { 
                label: 'AI Features', 
                value: '10+',
                description: 'Smart tools',
                href: '/features/ai-matching',
              },
              { 
                label: 'Beta Program', 
                value: 'Open',
                description: 'Limited spots',
                href: '/auth/register',
              },
              { 
                label: 'Platform Fee', 
                value: '0%',
                description: 'During beta',
                href: '/pricing',
              },
            ].map((stat) => (
              <Link 
                key={stat.label} 
                href={stat.href}
                className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-all">{stat.value}</div>
                <div className="text-gray-400 mb-1 group-hover:text-white transition-colors">{stat.label}</div>
                <div className="text-sm text-purple-400">{stat.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Platform
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive creator intelligence for global brands
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: SparklesIcon,
                title: 'Advanced AI Analysis',
                description: 'Real-time analysis of creator content, audience data, and performance metrics across all major platforms.'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Brand Safety & Compliance',
                description: 'Enterprise-grade tools for fraud detection, content analysis, and regulatory compliance.'
              },
              {
                icon: ChartBarIcon,
                title: 'Performance Intelligence',
                description: 'Comprehensive analytics, competitor insights, and ROI prediction powered by AI.'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-400/20">
                  <feature.icon className="h-6 w-6 text-white group-hover:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Three simple steps to transform your influencer marketing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MagnifyingGlassIcon,
                title: 'Find Creators',
                description: 'Search through our curated database of influencers and find the perfect match for your brand.'
              },
              {
                icon: CurrencyDollarIcon,
                title: 'Connect & Collaborate',
                description: 'Reach out to creators, negotiate terms, and start collaborating on your campaign.'
              },
              {
                icon: ChartBarIcon,
                title: 'Track & Optimize',
                description: 'Monitor campaign performance and optimize your strategy in real-time.'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1 min-h-[280px] flex flex-col cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-400/20">
                    <step.icon className="h-6 w-6 text-white group-hover:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400">{step.title}</h3>
                  <p className="text-gray-300 group-hover:text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 hover:border-purple-400/50 transition-all duration-200">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-400/10 text-purple-400 text-sm font-medium backdrop-blur-sm mb-4">
                <RocketLaunchIcon className="h-4 w-4 mr-2" />
                Limited Beta Access
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Join the Future of Marketing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Features */}
              <div className="space-y-6">
                {[
                  {
                    icon: SparklesIcon,
                    title: 'Premium Features',
                    text: 'Early access to all platform capabilities'
                  },
                  {
                    icon: UserGroupIcon,
                    title: 'Dedicated Support',
                    text: 'Personal account management and priority assistance'
                  },
                  {
                    icon: ChartPieIcon,
                    title: 'Priority Access',
                    text: 'Shape the platform with direct feature requests'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-400/5 transition-all duration-200">
                    <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-400/20 transition-all duration-200">
                      <item.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Timeline */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-400/5 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center flex-shrink-0">
                    <CalendarIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Launch Timeline</h3>
                    <p className="text-gray-300">Get exclusive early access to our platform with special beta pricing and features.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-400/5 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center flex-shrink-0">
                    <UserGroupIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Limited Spots</h3>
                    <p className="text-gray-300">Only accepting a limited number of brands during our beta phase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Platform Integration
            </h2>
            <p className="text-xl text-gray-300">
              Connect with all major social platforms and analytics tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: 'Instagram',
                bgColor: 'bg-gradient-to-br from-pink-500 to-purple-500',
                textColor: 'text-white',
                icon: '/social/instagram.svg'
              },
              { 
                name: 'TikTok',
                bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
                textColor: 'text-white',
                icon: '/social/tiktok.svg'
              },
              { 
                name: 'YouTube',
                bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
                textColor: 'text-white',
                icon: '/social/youtube.svg'
              },
              { 
                name: 'Twitter',
                bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
                textColor: 'text-white',
                icon: '/social/twitter.svg'
              },
            ].map((platform) => (
              <div 
                key={platform.name} 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto rounded-full ${platform.bgColor} flex items-center justify-center mb-4`}>
          <Image
                    src={platform.icon}
                    alt={platform.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-white font-semibold">{platform.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Coming soon:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['LinkedIn', 'Pinterest', 'Snapchat', 'Twitch'].map((platform) => (
                <div 
                  key={platform}
                  className="bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-400 border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-1"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)] opacity-30 animate-[grid-pulse_3s_ease-in-out_infinite] bg-repeat"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-6">
            <SparklesIcon className="h-4 w-4 mr-2 text-purple-400" />
            Limited Time Offer
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to transform your influencer marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of brands that trust Cloutr to connect with the perfect influencers. Get early access to our AI-powered platform and receive 3 months of premium features free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/auth/register">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20">
                Start Your Journey
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/discover">
              <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 backdrop-blur-sm">
                Explore Creators
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <RocketLaunchIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Early Access</h3>
              <p className="text-sm text-gray-400">Be among the first to use our platform</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <ChartBarIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Matching</h3>
              <p className="text-sm text-gray-400">Smart creator recommendations</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <CurrencyDollarIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Platform</h3>
              <p className="text-sm text-gray-400">No platform fees during beta</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
