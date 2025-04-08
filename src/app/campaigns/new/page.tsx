'use client';

import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CalendarIcon,
  DocumentTextIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const steps = [
  { id: 1, name: 'Basic Info', icon: DocumentTextIcon },
  { id: 2, name: 'Creators', icon: UserGroupIcon },
  { id: 3, name: 'Budget', icon: CurrencyDollarIcon },
  { id: 4, name: 'Timeline', icon: CalendarIcon },
  { id: 5, name: 'Review', icon: CheckIcon },
];

export default function NewCampaignPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Create New Campaign
          </h1>
          <p className="text-xl text-gray-300">
            Set up your influencer marketing campaign in a few simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step.id
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-gray-400'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-white' : 'bg-white/5'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`text-sm ${
                  currentStep >= step.id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {step.name}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Campaign Details</h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Enter campaign name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Campaign Description
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  rows={4}
                  placeholder="Describe your campaign goals and requirements"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="e.g., 18-24 year olds, fashion enthusiasts"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Select Creators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((creator) => (
                  <div
                    key={creator}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <UserGroupIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Creator {creator}</div>
                        <div className="text-gray-400 text-sm">@creator{creator}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Followers</div>
                        <div className="text-white">1.2M</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Engagement</div>
                        <div className="text-white">4.8%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Budget Details</h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Total Budget
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Enter total budget"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget per Creator
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Enter budget per creator"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Campaign Timeline</h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Content Deadline
                </label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Review Campaign</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Campaign Name</span>
                  <span className="text-white">Summer Collection Launch</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Selected Creators</span>
                  <span className="text-white">6 creators</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Total Budget</span>
                  <span className="text-white">$30,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Duration</span>
                  <span className="text-white">30 days</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              className="bg-white/5 text-white hover:bg-white/10 rounded-full px-6 py-3"
              disabled={currentStep === 1}
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Previous
            </Button>
            <Button
              onClick={nextStep}
              className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3"
              disabled={currentStep === steps.length}
            >
              Next
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 