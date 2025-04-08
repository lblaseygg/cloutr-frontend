'use client';

import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import {
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

// Mock data - replace with real data from your backend
const mockCampaign = {
  id: '1',
  name: 'Summer Fashion Collection Launch',
  status: 'active',
  description: 'Launch our new summer collection with lifestyle influencers. Focus on sustainable fashion and modern trends.',
  budget: {
    total: 5000,
    spent: 3750,
  },
  timeline: {
    start: '2024-06-01',
    end: '2024-08-31',
    contentDeadline: '2024-08-15',
  },
  creators: [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      platform: 'Instagram',
      status: 'active',
      deliverables: {
        completed: 3,
        total: 4,
      },
      content: [
        {
          id: '1',
          type: 'Post',
          status: 'approved',
          date: '2024-06-15',
          engagement: {
            likes: '2.5K',
            comments: '150',
            shares: '45',
          },
        },
        {
          id: '2',
          type: 'Story',
          status: 'pending',
          date: '2024-06-20',
        },
      ],
    },
    {
      id: '2',
      name: 'Mike Chen',
      avatar: '/avatars/mike.jpg',
      platform: 'TikTok',
      status: 'pending',
      deliverables: {
        completed: 0,
        total: 4,
      },
    },
  ],
  performance: {
    reach: '2.5M',
    engagement: '4.2%',
    conversions: '1.2K',
    roi: '3.8x',
  },
  analytics: {
    daily: [
      { date: '2024-06-01', reach: '150K', engagement: '4.5%' },
      { date: '2024-06-02', reach: '180K', engagement: '4.2%' },
      { date: '2024-06-03', reach: '200K', engagement: '4.8%' },
    ],
  },
};

export default function CampaignDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{mockCampaign.name}</h1>
            <p className="text-xl text-gray-300">{mockCampaign.description}</p>
          </div>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3">
            Edit Campaign
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <ChartBarIcon className="h-5 w-5 text-purple-500" />
              <h3 className="text-sm font-medium text-gray-400">Total Reach</h3>
            </div>
            <p className="text-2xl font-bold text-white">{mockCampaign.performance.reach}</p>
            <p className="text-sm text-gray-400">+12% from last week</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <UserGroupIcon className="h-5 w-5 text-blue-500" />
              <h3 className="text-sm font-medium text-gray-400">Engagement Rate</h3>
            </div>
            <p className="text-2xl font-bold text-white">{mockCampaign.performance.engagement}</p>
            <p className="text-sm text-gray-400">+0.5% from last week</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <CurrencyDollarIcon className="h-5 w-5 text-green-500" />
              <h3 className="text-sm font-medium text-gray-400">ROI</h3>
            </div>
            <p className="text-2xl font-bold text-white">{mockCampaign.performance.roi}</p>
            <p className="text-sm text-gray-400">Based on conversions</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <DocumentTextIcon className="h-5 w-5 text-yellow-500" />
              <h3 className="text-sm font-medium text-gray-400">Content Progress</h3>
            </div>
            <p className="text-2xl font-bold text-white">75%</p>
            <p className="text-sm text-gray-400">12/16 deliverables</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {['overview', 'creators', 'content', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Campaign Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Budget</span>
                      <span className="text-white">
                        ${mockCampaign.budget.spent.toLocaleString()} / ${mockCampaign.budget.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Timeline</span>
                      <span className="text-white">
                        {new Date(mockCampaign.timeline.start).toLocaleDateString()} - {new Date(mockCampaign.timeline.end).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Content Deadline</span>
                      <span className="text-white">
                        {new Date(mockCampaign.timeline.contentDeadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {mockCampaign.creators.map((creator) => (
                      creator.content?.map((content) => (
                        <div key={content.id} className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                            {content.status === 'approved' ? (
                              <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            ) : content.status === 'pending' ? (
                              <ClockIcon className="w-5 h-5 text-yellow-500" />
                            ) : (
                              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-white">
                              {creator.name} posted {content.type.toLowerCase()}
                            </p>
                            <p className="text-xs text-gray-400">
                              {new Date(content.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'creators' && (
            <div className="space-y-6">
              {mockCampaign.creators.map((creator) => (
                <div
                  key={creator.id}
                  className="bg-white/5 rounded-lg p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{creator.name}</h3>
                        <p className="text-sm text-gray-400">{creator.platform}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      creator.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {creator.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Deliverables</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-full h-2 bg-white/10 rounded-full">
                          <div
                            className="h-full bg-purple-500 rounded-full"
                            style={{ width: `${(creator.deliverables.completed / creator.deliverables.total) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-white">
                          {creator.deliverables.completed}/{creator.deliverables.total}
                        </span>
                      </div>
                    </div>
                    {creator.content && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Latest Content</h4>
                        <div className="space-y-2">
                          {creator.content.map((content) => (
                            <div key={content.id} className="flex items-center justify-between">
                              <span className="text-sm text-white">{content.type}</span>
                              <span className={`text-sm ${
                                content.status === 'approved'
                                  ? 'text-green-400'
                                  : content.status === 'pending'
                                  ? 'text-yellow-400'
                                  : 'text-red-400'
                              }`}>
                                {content.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCampaign.creators.map((creator) =>
                  creator.content?.map((content) => (
                    <div
                      key={content.id}
                      className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
                    >
                      <div className="aspect-video bg-white/5" />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <img
                              src={creator.avatar}
                              alt={creator.name}
                              className="w-6 h-6 rounded-full"
                            />
                            <span className="text-sm text-white">{creator.name}</span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            content.status === 'approved'
                              ? 'bg-green-500/20 text-green-400'
                              : content.status === 'pending'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {content.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">{content.type}</p>
                        {content.engagement && (
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-gray-400">Likes</p>
                              <p className="text-white">{content.engagement.likes}</p>
                            </div>
                            <div>
                              <p className="text-gray-400">Comments</p>
                              <p className="text-white">{content.engagement.comments}</p>
                            </div>
                            <div>
                              <p className="text-gray-400">Shares</p>
                              <p className="text-white">{content.engagement.shares}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total Reach</span>
                      <span className="text-white">{mockCampaign.performance.reach}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Engagement Rate</span>
                      <span className="text-white">{mockCampaign.performance.engagement}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Conversions</span>
                      <span className="text-white">{mockCampaign.performance.conversions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">ROI</span>
                      <span className="text-white">{mockCampaign.performance.roi}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Daily Performance</h3>
                  <div className="space-y-4">
                    {mockCampaign.analytics.daily.map((day) => (
                      <div key={day.date} className="flex items-center justify-between">
                        <span className="text-gray-400">
                          {new Date(day.date).toLocaleDateString()}
                        </span>
                        <div className="flex items-center space-x-4">
                          <span className="text-white">{day.reach}</span>
                          <span className="text-white">{day.engagement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 