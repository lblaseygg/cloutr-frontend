'use client';

import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { 
  ChartBarIcon,
  StarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Mock data - replace with real data from your backend
const mockCreators = [
  {
    id: '1',
    name: 'Sarah Johnson',
    handle: '@sarahjcreates',
    avatar: '/avatars/sarah.jpg',
    platforms: ['Instagram', 'TikTok'],
    categories: ['Lifestyle', 'Fashion'],
    location: 'New York, USA',
    priceRange: '$500-$1000',
    followers: '1.2M',
    engagement: '4.8%',
    rating: 4.9,
    totalCampaigns: 156,
    aiMatch: 98,
  },
  {
    id: '2',
    name: 'Mike Chen',
    handle: '@mikegaming',
    avatar: '/avatars/mike.jpg',
    platforms: ['YouTube', 'Twitch'],
    categories: ['Gaming', 'Tech'],
    location: 'San Francisco, USA',
    priceRange: '$1000-$2000',
    followers: '2.5M',
    engagement: '5.2%',
    rating: 4.8,
    totalCampaigns: 89,
    aiMatch: 95,
  },
  {
    id: '3',
    name: 'Emma Davis',
    handle: '@emmafoodie',
    avatar: '/avatars/emma.jpg',
    platforms: ['Instagram', 'TikTok'],
    categories: ['Food', 'Lifestyle'],
    location: 'London, UK',
    priceRange: '$800-$1500',
    followers: '950K',
    engagement: '4.9%',
    rating: 4.7,
    totalCampaigns: 112,
    aiMatch: 92,
  },
];

const categories = [
  'All',
  'Fashion',
  'Beauty',
  'Lifestyle',
  'Tech',
  'Gaming',
  'Food',
  'Travel',
  'Fitness',
  'Business',
];

const platforms = [
  'All',
  'Instagram',
  'TikTok',
  'YouTube',
  'Twitter',
];

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [sortBy, setSortBy] = useState('aiMatch');

  return (
    <PageLayout>
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-8 animate-pulse">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] hover:animate-gradient-hover transition-all duration-300">
                AI-Powered Discovery
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Discover{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 bg-[length:200%_auto] animate-gradient-shift">
                Creators
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Find the perfect creators for your brand with AI-powered recommendations
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-200 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search creators by name, category, or location..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-400/50 transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <FunnelIcon className="h-5 w-5 text-gray-400" />
                <select
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-400/50 transition-all duration-200"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="aiMatch">AI Match</option>
                  <option value="followers">Followers</option>
                  <option value="engagement">Engagement</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-purple-400 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedPlatform === platform
                      ? 'bg-purple-400 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Creators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCreators.map((creator) => (
              <div
                key={creator.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{creator.name}</h3>
                      <p className="text-sm text-gray-400">{creator.handle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <StarIcon className="w-4 h-4" />
                    <span className="text-sm">{creator.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {creator.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-1 rounded-full text-xs bg-white/5 text-gray-300 group-hover:bg-purple-400/20 group-hover:text-white transition-all duration-200"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400">
                      <ChartBarIcon className="w-5 h-5" />
                      <span>Followers</span>
                    </div>
                    <span className="text-white">{creator.followers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400">
                      <ChartBarIcon className="w-5 h-5" />
                      <span>Engagement</span>
                    </div>
                    <span className="text-white">{creator.engagement}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400">
                      <SparklesIcon className="w-5 h-5" />
                      <span>AI Match</span>
                    </div>
                    <span className="text-white">{creator.aiMatch}%</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-white/5 text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 hover:-translate-y-0.5">
                    View Profile
                  </Button>
                  <Button className="flex-1 bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-purple-500/20">
                    Invite to Campaign
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-white/5 text-white hover:bg-white/10 rounded-full px-8 py-3 transition-all duration-200 hover:-translate-y-0.5">
              Load More Creators
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 