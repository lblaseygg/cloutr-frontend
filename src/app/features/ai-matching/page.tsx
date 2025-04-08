'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { 
  SparklesIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  LightBulbIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

export default function AIMatchingPage() {
  return (
    <PageLayout>
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-8 animate-pulse">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] hover:animate-gradient-hover transition-all duration-300">
                AI-Powered Creator Matching
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Find Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] animate-gradient-shift">
                Perfect Match
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our advanced AI technology analyzes millions of data points to match you with creators who truly align with your brand values and campaign goals.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: ChartBarIcon,
                title: 'Performance Analysis',
                description: 'AI analyzes creator performance metrics, engagement rates, and audience quality scores.',
              },
              {
                icon: UserGroupIcon,
                title: 'Audience Matching',
                description: 'Match with creators whose audience demographics align perfectly with your target market.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Brand Safety',
                description: 'Advanced content analysis ensures brand safety and alignment with your values.',
              },
              {
                icon: LightBulbIcon,
                title: 'Smart Recommendations',
                description: 'Get personalized creator recommendations based on your campaign objectives.',
              },
              {
                icon: ChartPieIcon,
                title: 'ROI Prediction',
                description: 'AI-powered predictions help you estimate campaign performance and ROI.',
              },
              {
                icon: SparklesIcon,
                title: 'Trend Analysis',
                description: 'Stay ahead with AI insights into emerging content trends and opportunities.',
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-400/20 transition-all duration-200">
                  <feature.icon className="h-6 w-6 text-purple-400 group-hover:text-white transition-all duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-all duration-200">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-white/80 transition-all duration-200">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 group-hover:text-purple-400 transition-all duration-200">
              How AI Matching Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Data Collection',
                  description: 'Our AI analyzes creator content, performance metrics, and audience data across multiple platforms.',
                },
                {
                  step: '02',
                  title: 'Pattern Recognition',
                  description: 'Advanced algorithms identify patterns in successful brand-creator partnerships.',
                },
                {
                  step: '03',
                  title: 'Smart Matching',
                  description: 'You get matched with creators who are most likely to drive results for your brand.',
                },
              ].map((step) => (
                <div key={step.step} className="text-center group-hover:scale-105 transition-all duration-200">
                  <div className="text-4xl font-bold text-purple-400 mb-4 group-hover:text-white transition-all duration-200">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-all duration-200">{step.title}</h3>
                  <p className="text-gray-300 group-hover:text-white/80 transition-all duration-200">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Find Your Perfect Creator Match?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with AI-powered creator matching today. Free during beta.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-purple-500/20">
              Start Matching
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 