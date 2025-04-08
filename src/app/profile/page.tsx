'use client';

import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

export default function ProfilePage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Profile Settings
            </h1>
            <p className="text-xl text-gray-300">
              Manage your account and preferences
            </p>
          </div>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3">
            Save Changes
          </Button>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Profile Picture
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center">
                      <UserCircleIcon className="h-12 w-12 text-white" />
                    </div>
                    <Button className="bg-white/5 text-white hover:bg-white/10 rounded-full px-4 py-2">
                      Change Photo
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Bio
                  </label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                    rows={4}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Security</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3">
                  Update Password
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Account Settings</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Cog6ToothIcon className="h-5 w-5" />
                  <span>General Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <BellIcon className="h-5 w-5" />
                  <span>Notifications</span>
                </button>
                <button className="w-full flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <ShieldCheckIcon className="h-5 w-5" />
                  <span>Privacy</span>
                </button>
                <button className="w-full flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <CreditCardIcon className="h-5 w-5" />
                  <span>Billing</span>
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Danger Zone</h2>
              <Button className="w-full bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-full px-6 py-3">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 