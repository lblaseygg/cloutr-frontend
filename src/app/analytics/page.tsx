'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import {
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function AnalyticsPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300">
              Track your campaign performance and ROI
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-white/5 text-white hover:bg-white/10 rounded-full px-6 py-3">
              Export Report
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3">
              Share Dashboard
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: 'Total Reach',
              value: '2.5M',
              change: '+12.5%',
              trend: 'up',
              icon: ChartBarIcon,
            },
            {
              title: 'Active Creators',
              value: '45',
              change: '+5',
              trend: 'up',
              icon: UserGroupIcon,
            },
            {
              title: 'Total Revenue',
              value: '$125K',
              change: '+8.2%',
              trend: 'up',
              icon: CurrencyDollarIcon,
            },
            {
              title: 'Engagement Rate',
              value: '4.2%',
              change: '-0.5%',
              trend: 'down',
              icon: ChartBarIcon,
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpIcon className="h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-gray-400 text-sm mb-2">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Reach Over Time</h3>
            <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Chart will be implemented here</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Revenue by Campaign</h3>
            <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Chart will be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 