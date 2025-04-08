'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import AppLayout from '@/components/layout/AppLayout';
import { 
  ArrowRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <AppLayout>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
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
              AI-powered creator partnerships that drive real business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/discover">
                <Button variant="outline" className="text-white border-2 border-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 backdrop-blur-sm">
                  Explore Creators
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
