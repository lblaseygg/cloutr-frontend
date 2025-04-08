'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  BriefcaseIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Active Campaigns', value: '5', icon: BriefcaseIcon },
  { name: 'Total Followers', value: '124K', icon: UserGroupIcon },
  { name: 'Engagement Rate', value: '4.8%', icon: ChartBarIcon },
  { name: 'Monthly Earnings', value: '$3,200', icon: CurrencyDollarIcon },
];

const activeCampaigns = [
  {
    id: 1,
    brand: 'Fashion Forward',
    name: 'Summer Collection Launch',
    deadline: '2024-06-15',
    compensation: '$800',
    status: 'In Progress',
  },
  {
    id: 2,
    brand: 'TechGear',
    name: 'Product Review',
    deadline: '2024-06-20',
    compensation: '$600',
    status: 'In Progress',
  },
  {
    id: 3,
    brand: 'BeautyBox',
    name: 'Skincare Routine',
    deadline: '2024-06-25',
    compensation: '$1,000',
    status: 'Pending',
  },
];

export default function InfluencerDashboard() {
  return (
    <DashboardLayout userType="influencer">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Influencer Dashboard</h1>
          <Button>View Opportunities</Button>
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

        {/* Active Campaigns */}
        <div className="bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-white">Active Campaigns</h3>
          </div>
          <div className="border-t border-gray-700">
            <ul role="list" className="divide-y divide-gray-700">
              {activeCampaigns.map((campaign) => (
                <li key={campaign.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div>
                        <p className="text-sm font-medium text-white">{campaign.name}</p>
                        <p className="text-sm text-gray-400">{campaign.brand}</p>
                      </div>
                      <span className="ml-2 inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                        {campaign.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-400">
                        Due: {campaign.deadline}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {campaign.compensation}
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