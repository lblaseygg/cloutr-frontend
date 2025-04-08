'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Star, MapPin, Calendar, DollarSign, Users, BarChart, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Mock data - replace with real data from your backend
const mockCreator = {
  id: '1',
  name: 'Sarah Johnson',
  handle: '@sarahj',
  avatar: '/avatars/sarah.jpg',
  bio: 'Fashion and lifestyle content creator based in Los Angeles. Passionate about sustainable fashion and beauty. Creating authentic content that inspires and educates my audience.',
  platforms: [
    { name: 'Instagram', followers: 150000, engagementRate: 3.5, link: 'https://instagram.com/sarahj' },
    { name: 'TikTok', followers: 200000, engagementRate: 4.2, link: 'https://tiktok.com/@sarahj' },
  ],
  categories: ['Fashion', 'Lifestyle', 'Beauty'],
  location: 'Los Angeles, CA',
  priceRange: { min: 500, max: 2000 },
  sampleContent: [
    {
      thumbnail: '/content/sample1.jpg',
      title: 'Summer Fashion Haul',
      platform: 'Instagram',
      views: '25K',
      likes: '2.5K',
      comments: '150',
    },
    {
      thumbnail: '/content/sample2.jpg',
      title: 'Beauty Routine',
      platform: 'TikTok',
      views: '150K',
      likes: '15K',
      comments: '800',
    },
    {
      thumbnail: '/content/sample3.jpg',
      title: 'Sustainable Fashion Tips',
      platform: 'Instagram',
      views: '18K',
      likes: '1.8K',
      comments: '120',
    },
    {
      thumbnail: '/content/sample4.jpg',
      title: 'Morning Routine',
      platform: 'TikTok',
      views: '200K',
      likes: '20K',
      comments: '1K',
    },
  ],
  rating: 4.8,
  totalCampaigns: 25,
  audienceDemographics: {
    age: {
      '18-24': 35,
      '25-34': 45,
      '35-44': 15,
      '45+': 5,
    },
    gender: {
      female: 85,
      male: 15,
    },
    locations: ['United States', 'Canada', 'United Kingdom', 'Australia'],
  },
  pastCampaigns: [
    {
      brand: 'Fashion Brand X',
      type: 'Sponsored Post',
      performance: {
        engagement: 4.2,
        reach: '500K',
        conversions: '2.5K',
      },
    },
    {
      brand: 'Beauty Brand Y',
      type: 'Product Review',
      performance: {
        engagement: 4.8,
        reach: '750K',
        conversions: '3.8K',
      },
    },
  ],
};

export default function CreatorProfile() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center space-x-4">
            <img
              src={mockCreator.avatar}
              alt={mockCreator.name}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{mockCreator.name}</h1>
              <p className="text-gray-400">{mockCreator.handle}</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-4">
            <Button className="bg-white/5 text-white hover:bg-white/10 rounded-full px-6 py-3">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3">
              Invite to Campaign
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Bio */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">About</h2>
            <p className="text-gray-300">{mockCreator.bio}</p>
          </div>

          {/* Content Tabs */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mb-8">
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setActiveTab('content')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'content'
                    ? 'text-white border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Content
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'campaigns'
                    ? 'text-white border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Past Campaigns
              </button>
            </div>

            {activeTab === 'content' ? (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockCreator.sampleContent.map((content, index) => (
                    <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
                      <img
                        src={content.thumbnail}
                        alt={content.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-white font-medium mb-2">{content.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>{content.platform}</span>
                          <span>{content.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6">
                {mockCreator.pastCampaigns.map((campaign, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 mb-4 last:mb-0"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-white font-medium">{campaign.brand}</h3>
                        <p className="text-sm text-gray-400">{campaign.type}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-400">Engagement</p>
                          <p className="text-white font-medium">{campaign.performance.engagement}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-400">Reach</p>
                          <p className="text-white font-medium">{campaign.performance.reach}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-400">Conversions</p>
                          <p className="text-white font-medium">{campaign.performance.conversions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Platform Stats</h2>
            {mockCreator.platforms.map((platform) => (
              <div key={platform.name} className="mb-4 last:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">{platform.name}</span>
                  <span className="text-white font-medium">
                    {platform.followers.toLocaleString()} followers
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${platform.engagementRate * 10}%` }}
                  />
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {platform.engagementRate}% engagement rate
                </div>
              </div>
            ))}
          </div>

          {/* Audience Demographics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Audience Demographics</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Age Distribution</h3>
                {Object.entries(mockCreator.audienceDemographics.age).map(([age, percentage]) => (
                  <div key={age} className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-300">{age}</span>
                      <span className="text-sm text-white">{percentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Gender Distribution</h3>
                {Object.entries(mockCreator.audienceDemographics.gender).map(([gender, percentage]) => (
                  <div key={gender} className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-300">{gender}</span>
                      <span className="text-sm text-white">{percentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <Button className="w-full bg-purple-500 text-white hover:bg-purple-600 rounded-full px-6 py-3">
                Start Campaign
              </Button>
              <Button className="w-full bg-white/5 text-white hover:bg-white/10 rounded-full px-6 py-3">
                Save to Favorites
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 