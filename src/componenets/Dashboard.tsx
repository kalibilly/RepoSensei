'use client'

import React from 'react'
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Users, 
  GitBranch,
  Star,
  Activity
} from 'lucide-react'
import { MetricCard } from './MetricCard'
import { ActivityChart } from './ActivityChart'
import { LanguageDistribution } from './LanguageDistribution'
import { RecentInsights } from './RecentInsights'

export const Dashboard: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Repository Intelligence Dashboard</h1>
          <p className="text-gray-600">Get AI-powered insights about your repositories and team productivity</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Code Quality Score"
            value="8.7"
            suffix="/10"
            icon={CheckCircle}
            trend={+2.3}
            color="green"
          />
          <MetricCard
            title="Active Repositories"
            value="24"
            icon={GitBranch}
            trend={+3}
            color="blue"
          />
          <MetricCard
            title="Technical Debt"
            value="12h"
            subtitle="Estimated time"
            icon={AlertCircle}
            trend={-15}
            color="orange"
          />
          <MetricCard
            title="Team Velocity"
            value="94%"
            subtitle="This sprint"
            icon={TrendingUp}
            trend={+8}
            color="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Activity Chart */}
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>

          {/* Language Distribution */}
          <div className="lg:col-span-1">
            <LanguageDistribution />
          </div>
        </div>

        {/* Recent Insights and Repository Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentInsights />
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Activity className="w-5 h-5 text-purple-600 mr-2" />
              Repository Health
            </h3>
            <div className="space-y-4">
              {[
                { name: 'frontend-app', health: 92, status: 'excellent', issues: 2 },
                { name: 'api-service', health: 78, status: 'good', issues: 8 },
                { name: 'data-pipeline', health: 65, status: 'needs-attention', issues: 15 },
                { name: 'mobile-app', health: 88, status: 'good', issues: 5 },
              ].map((repo) => (
                <div key={repo.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      repo.health >= 90 ? 'bg-green-500' :
                      repo.health >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <p className="font-medium text-gray-900">{repo.name}</p>
                      <p className="text-xs text-gray-500">{repo.issues} issues found</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{repo.health}%</p>
                    <p className="text-xs text-gray-500 capitalize">{repo.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
