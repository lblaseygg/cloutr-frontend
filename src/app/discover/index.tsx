'use client';

import { useState } from 'react';
import { Search, Filter, Instagram, Video, Youtube, Twitter, Star, TrendingUp, Target } from 'lucide-react';

interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  platforms: {
    name: string;
    followers: number;
    engagementRate: number;
  }[];
  categories: string[];
  location: string;
  priceRange: {
    min: number;
    max: number;
  };
  sampleContent: {
    thumbnail: string;
    title: string;
    platform: string;
  }[];
  rating: number;
  totalCampaigns: number;
}

// Mock data - replace with real data from your backend
const mockCreators: Creator[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    handle: '@sarahj',
    avatar: '/avatars/sarah.jpg',
    platforms: [
      { name: 'Instagram', followers: 150000, engagementRate: 3.5 },
      { name: 'TikTok', followers: 200000, engagementRate: 4.2 },
    ],
    categories: ['Fashion', 'Lifestyle', 'Beauty'],
    location: 'Los Angeles, CA',
    priceRange: { min: 500, max: 2000 },
    sampleContent: [
      {
        thumbnail: '/content/sample1.jpg',
        title: 'Summer Fashion Haul',
        platform: 'Instagram',
      },
      {
        thumbnail: '/content/sample2.jpg',
        title: 'Beauty Routine',
        platform: 'TikTok',
      },
    ],
    rating: 4.8,
    totalCampaigns: 25,
  },
  {
    id: '2',
    name: 'Mike Chen',
    handle: '@mikechen',
    avatar: '/avatars/mike.jpg',
    platforms: [
      { name: 'YouTube', followers: 500000, engagementRate: 4.8 },
      { name: 'Twitter', followers: 100000, engagementRate: 3.2 },
    ],
    categories: ['Tech', 'Gaming', 'Education'],
    location: 'San Francisco, CA',
    priceRange: { min: 1000, max: 3000 },
    sampleContent: [
      {
        thumbnail: '/content/sample3.jpg',
        title: 'Latest Tech Review',
        platform: 'YouTube',
      },
      {
        thumbnail: '/content/sample4.jpg',
        title: 'Gaming Setup Tour',
        platform: 'YouTube',
      },
    ],
    rating: 4.9,
    totalCampaigns: 42,
  },
  {
    id: '3',
    name: 'Emma Davis',
    handle: '@emmadavis',
    avatar: '/avatars/emma.jpg',
    platforms: [
      { name: 'Instagram', followers: 300000, engagementRate: 4.5 },
      { name: 'TikTok', followers: 450000, engagementRate: 5.2 },
    ],
    categories: ['Food', 'Travel', 'Lifestyle'],
    location: 'New York, NY',
    priceRange: { min: 800, max: 2500 },
    sampleContent: [
      {
        thumbnail: '/content/sample5.jpg',
        title: 'NYC Food Tour',
        platform: 'Instagram',
      },
      {
        thumbnail: '/content/sample6.jpg',
        title: 'Travel Tips',
        platform: 'TikTok',
      },
    ],
    rating: 4.7,
    totalCampaigns: 38,
  },
  {
    id: '4',
    name: 'Alex Rivera',
    handle: '@alexrivera',
    avatar: '/avatars/alex.jpg',
    platforms: [
      { name: 'YouTube', followers: 750000, engagementRate: 4.1 },
      { name: 'Instagram', followers: 250000, engagementRate: 3.8 },
    ],
    categories: ['Fitness', 'Health', 'Lifestyle'],
    location: 'Miami, FL',
    priceRange: { min: 1200, max: 3500 },
    sampleContent: [
      {
        thumbnail: '/content/sample7.jpg',
        title: 'Workout Routine',
        platform: 'YouTube',
      },
      {
        thumbnail: '/content/sample8.jpg',
        title: 'Healthy Meal Prep',
        platform: 'Instagram',
      },
    ],
    rating: 4.6,
    totalCampaigns: 31,
  },
  {
    id: '5',
    name: 'Sophie Kim',
    handle: '@sophiekim',
    avatar: '/avatars/sophie.jpg',
    platforms: [
      { name: 'TikTok', followers: 800000, engagementRate: 5.5 },
      { name: 'Instagram', followers: 400000, engagementRate: 4.3 },
    ],
    categories: ['Beauty', 'Fashion', 'Lifestyle'],
    location: 'Seoul, South Korea',
    priceRange: { min: 1500, max: 4000 },
    sampleContent: [
      {
        thumbnail: '/content/sample9.jpg',
        title: 'K-Beauty Routine',
        platform: 'TikTok',
      },
      {
        thumbnail: '/content/sample10.jpg',
        title: 'Street Style',
        platform: 'Instagram',
      },
    ],
    rating: 4.9,
    totalCampaigns: 56,
  },
];

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  const categories = [
    'Fashion', 'Beauty', 'Lifestyle', 'Tech', 'Gaming', 'Food',
    'Travel', 'Fitness', 'Art', 'Music', 'Education', 'Business'
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram },
    { name: 'TikTok', icon: Video },
    { name: 'YouTube', icon: Youtube },
    { name: 'Twitter', icon: Twitter },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategories(prev =>
                  prev.includes(category)
                    ? prev.filter(c => c !== category)
                    : [...prev, category]
                );
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategories.includes(category)
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Platforms */}
        <div className="flex items-center space-x-4">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <button
                key={platform.name}
                onClick={() => {
                  setSelectedPlatforms(prev =>
                    prev.includes(platform.name)
                      ? prev.filter(p => p !== platform.name)
                      : [...prev, platform.name]
                  );
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedPlatforms.includes(platform.name)
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{platform.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">AI-Powered Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-5 w-5 text-yellow-500" />
              <h3 className="text-lg font-medium text-white">Best Matches</h3>
            </div>
            <p className="text-gray-400">Creators that best align with your brand's values and target audience.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-medium text-white">Trending Now</h3>
            </div>
            <p className="text-gray-400">Creators with growing engagement and viral potential.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-medium text-white">Target Audience</h3>
            </div>
            <p className="text-gray-400">Creators whose audience demographics match your target market.</p>
          </div>
        </div>
      </div>

      {/* Creator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCreators.map((creator) => (
          <div
            key={creator.id}
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors"
          >
            {/* Creator Header */}
            <div className="p-4 flex items-center space-x-3">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-white font-medium">{creator.name}</h3>
                <p className="text-sm text-gray-400">{creator.handle}</p>
              </div>
            </div>

            {/* Platform Stats */}
            <div className="px-4 py-3 border-t border-white/10">
              <div className="flex items-center space-x-4">
                {creator.platforms.map((platform) => (
                  <div key={platform.name} className="flex items-center space-x-1">
                    <span className="text-sm text-gray-400">{platform.name}</span>
                    <span className="text-sm text-white">
                      {platform.followers.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="px-4 py-3 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {creator.categories.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Content */}
            <div className="px-4 py-3 border-t border-white/10">
              <div className="grid grid-cols-2 gap-2">
                {creator.sampleContent.map((content, index) => (
                  <div key={index} className="relative aspect-square">
                    <img
                      src={content.thumbnail}
                      alt={content.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm text-white">{creator.rating}</span>
                <span className="text-sm text-gray-400">
                  ({creator.totalCampaigns} campaigns)
                </span>
              </div>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 