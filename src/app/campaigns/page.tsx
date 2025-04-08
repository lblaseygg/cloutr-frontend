'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { 
  PlusIcon,
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function CampaignsPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Your Campaigns
            </h1>
            <p className="text-xl text-gray-300">
              Manage and track your influencer marketing campaigns
            </p>
          </div>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 flex items-center gap-2">
            <PlusIcon className="h-5 w-5" />
            New Campaign
          </Button>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((campaign) => (
            <div key={campaign} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Campaign {campaign}</h3>
                <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
                  Active
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                Summer collection launch with lifestyle influencers. Target reach: 500K+.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Creators</span>
                  </div>
                  <span className="text-white">12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Duration</span>
                  </div>
                  <span className="text-white">30 days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <CurrencyDollarIcon className="h-4 w-4" />
                    <span>Budget</span>
                  </div>
                  <span className="text-white">$5,000</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <ChartBarIcon className="h-4 w-4" />
                  <span className="text-sm">View Analytics</span>
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 text-sm">
                  Manage
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 