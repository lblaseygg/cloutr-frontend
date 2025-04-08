'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';

export default function CreatorApplicationPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Join Cloutr as a Creator
          </h1>
          <p className="text-xl text-gray-300">
            Apply to join our exclusive network of creators and connect with brands looking for authentic partnerships.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Basic Information</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Social Media Profiles */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Social Media Profiles</h2>
              
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-300 mb-2">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  id="instagram"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="@yourusername"
                />
              </div>

              <div>
                <label htmlFor="tiktok" className="block text-sm font-medium text-gray-300 mb-2">
                  TikTok Handle
                </label>
                <input
                  type="text"
                  id="tiktok"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="@yourusername"
                />
              </div>

              <div>
                <label htmlFor="youtube" className="block text-sm font-medium text-gray-300 mb-2">
                  YouTube Channel
                </label>
                <input
                  type="text"
                  id="youtube"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your channel URL"
                />
              </div>
            </div>

            {/* Content Categories */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Content Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Fashion',
                  'Beauty',
                  'Lifestyle',
                  'Tech',
                  'Gaming',
                  'Food',
                  'Travel',
                  'Fitness',
                  'Business',
                ].map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-purple-500 rounded border-white/20 bg-white/5"
                    />
                    <span className="text-white">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Additional Information</h2>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about yourself and your content..."
                />
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
} 