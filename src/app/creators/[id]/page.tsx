'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import {
  UserCircleIcon,
  ChartBarIcon,
  GlobeAltIcon,
  StarIcon,
  UserGroupIcon,
  CameraIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function CreatorProfilePage({ params }: { params: { id: string } }) {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
                <UserCircleIcon className="w-24 h-24 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 bg-white text-black rounded-full p-2 hover:bg-gray-100 transition-colors">
                <CameraIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Sarah Johnson</h1>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>@sarahjcreates</span>
                    <span>•</span>
                    <span>Lifestyle & Fashion</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3">
                    Invite to Campaign
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                <div>
                  <div className="text-2xl font-bold text-white">1.2M</div>
                  <div className="text-gray-400">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.8%</div>
                  <div className="text-gray-400">Engagement Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-gray-400">Campaigns</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-gray-400">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">About</h2>
              <p className="text-gray-300">
                Digital content creator specializing in lifestyle, fashion, and travel. 
                Creating authentic content that resonates with my audience and helps brands 
                connect with their target market.
              </p>
            </div>

            {/* Content Preview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Content</h2>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Content {item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Social Links</h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <GlobeAltIcon className="w-5 h-5" />
                  <span>Website</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Image
                    src="/social/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Image
                    src="/social/youtube.svg"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Image
                    src="/social/tiktok.svg"
                    alt="TikTok"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Performance</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300">
                    <ChartBarIcon className="w-5 h-5" />
                    <span>Avg. Engagement</span>
                  </div>
                  <span className="text-white">4.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300">
                    <UserGroupIcon className="w-5 h-5" />
                    <span>Follower Growth</span>
                  </div>
                  <span className="text-white">+12.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300">
                    <StarIcon className="w-5 h-5" />
                    <span>Campaign Success Rate</span>
                  </div>
                  <span className="text-white">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 