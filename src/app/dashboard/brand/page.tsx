'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Active Campaigns', value: '12', icon: SparklesIcon },
  { name: 'Total Reach', value: '2.4M', icon: UserGroupIcon },
  { name: 'Engagement Rate', value: '4.2%', icon: ChartBarIcon },
  { name: 'ROI', value: '312%', icon: CurrencyDollarIcon },
];

const recentCampaigns = [
  {
    id: 1,
    name: 'Summer Collection Launch',
    influencers: 8,
    status: 'Active',
    reach: '1.2M',
    engagement: '4.5%',
  },
  {
    id: 2,
    name: 'Brand Awareness Campaign',
    influencers: 12,
    status: 'Active',
    reach: '2.1M',
    engagement: '3.8%',
  },
  {
    id: 3,
    name: 'Product Launch',
    influencers: 5,
    status: 'Planning',
    reach: '-',
    engagement: '-',
  },
];

export default function BrandDashboard() {
  return (
    <DashboardLayout userType="brand">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Brand Dashboard</h1>
          <Button>Create Campaign</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-gray-800 px-4 py-5 shadow sm:px-6 sm:py-6"
            >
              <dt>
                <div className="absolute rounded-md bg-purple-500 p-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-400">{stat.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
              </dd>
            </div>
          ))}
        </div>

        {/* Recent Campaigns */}
        <div className="bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-white">Recent Campaigns</h3>
          </div>
          <div className="border-t border-gray-700">
            <ul role="list" className="divide-y divide-gray-700">
              {recentCampaigns.map((campaign) => (
                <li key={campaign.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-white">{campaign.name}</p>
                      <span className="ml-2 inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                        {campaign.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-400">
                        {campaign.influencers} influencers
                      </div>
                      <div className="text-sm text-gray-400">
                        {campaign.reach} reach
                      </div>
                      <div className="text-sm text-gray-400">
                        {campaign.engagement} engagement
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 