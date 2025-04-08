'use client';

import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { RocketLaunchIcon, SparklesIcon, ShieldCheckIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PricingPage() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <PageLayout>
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-8 animate-pulse">
              <RocketLaunchIcon className="h-4 w-4 mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] hover:animate-gradient-hover transition-all duration-300">
                Coming Soon
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Enterprise{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] animate-gradient-shift">
                Creator Intelligence
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join the waitlist for early access to our comprehensive creator intelligence platform
            </p>
          </div>

          {/* Value Props Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            {[
              {
                icon: SparklesIcon,
                label: 'AI Discovery',
                description: 'Smart matching',
              },
              {
                icon: ShieldCheckIcon,
                label: 'Brand Safety',
                description: 'Built-in protection',
              },
              {
                icon: ChartBarIcon,
                label: 'Analytics',
                description: 'Real-time insights',
              },
              {
                icon: RocketLaunchIcon,
                label: 'Early Access',
                description: 'Priority onboarding',
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-400/20">
                  <item.icon className="h-6 w-6 text-white group-hover:text-purple-400" />
                </div>
                <div className="text-lg text-white font-medium mb-1 group-hover:text-purple-400">{item.label}</div>
                <div className="text-base text-purple-400 font-medium">{item.description}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: SparklesIcon,
                title: 'AI-Powered Discovery',
                description: 'Advanced algorithms analyze millions of creators to find your perfect brand matches.',
                subtext: 'Powered by machine learning',
                href: '#',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Brand Safety & Compliance',
                description: 'Enterprise-grade tools for fraud detection, content analysis, and regulatory compliance.',
                subtext: 'Enterprise-grade security',
                href: '#',
              },
              {
                icon: ChartBarIcon,
                title: 'Performance Intelligence',
                description: 'Real-time analytics, competitor insights, and ROI prediction powered by AI.',
                subtext: 'Data-driven decisions',
                href: '#',
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-400/20">
                  <feature.icon className="h-6 w-6 text-white group-hover:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400">
                  {feature.title}
                </h3>
                <div className="text-base text-purple-400 font-medium mb-3">{feature.subtext}</div>
                <p className="text-gray-300 group-hover:text-white/80">{feature.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-purple-400">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Join the Waitlist
              </h2>
              <div className="text-base text-purple-400 font-medium mb-4">Limited spots available</div>
              <p className="text-gray-300">
                Be among the first to access our enterprise creator intelligence platform
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-purple-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-400/50 transition-all duration-200"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-400/50 transition-all duration-200"
                  placeholder="Enter your work email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-400/50 transition-all duration-200"
                  placeholder="What are you looking to achieve with creator marketing?"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-400 text-white hover:bg-purple-500 rounded-full py-3 transition-all duration-200 ${
                  submitStatus === 'success' ? 'bg-green-500 hover:bg-green-600' :
                  submitStatus === 'error' ? 'bg-red-500 hover:bg-red-600' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 
                 submitStatus === 'success' ? 'Successfully Joined!' :
                 submitStatus === 'error' ? 'Error - Try Again' :
                 'Join Waitlist'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 