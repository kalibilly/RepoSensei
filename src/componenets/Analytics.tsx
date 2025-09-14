'use client'

import React, { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Download,
  GitCommit,
  Clock,
  Users,
  Target
} from 'lucide-react'

export const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d')

  const metrics = {
    commits: { value: 234, change: '+12%', trend: 'up' },
    codeReview: { value: '2.3h', change: '-8%', trend: 'down' },
    deployments: { value: 18, change: '+25%', trend: 'up' },
    bugFix: { value: '4.2h', change: '-15%', trend: 'down' },
  }

  const commitData = [
    { week: 'W1', commits: 45, reviews: 12, deployments: 3 },
    { week: 'W2', commits: 52, reviews: 15, deployments: 4 },
    { week: 'W3', commits: 38, reviews: 9, deployments: 2 },
    { week: 'W4', commits: 61, reviews: 18, deployments: 5 },
    { week: 'W5', commits: 48, reviews: 14, deployments: 4 },
  ]

  const teamPerformance = [
    { name: 'Alice Chen', commits: 42, reviews: 18, score: 95 },
    { name: 'Bob Smith', commits: 38, reviews: 22, score: 88 },
    { name: 'Carol Johnson', commits: 35, reviews: 16, score: 82 },
    { name: 'David Wilson', commits: 29, reviews: 12, score: 78 },
    { name: 'Eva Martinez', commits: 31, reviews: 14, score: 85 },
  ]

  const maxCommits = Math.max(...commitData.map(d => d.commits))

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Deep insights into your team's development patterns</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <GitCommit className="w-5 h-5 text-purple-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                metrics.commits.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span>{metrics.commits.change}</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{metrics.commits.value}</p>
              <p className="text-sm text-gray-600">Total Commits</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                metrics.codeReview.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span>{metrics.codeReview.change}</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{metrics.codeReview.value}</p>
              <p className="text-sm text-gray-600">Avg Review Time</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                metrics.deployments.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span>{metrics.deployments.change}</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{metrics.deployments.value}</p>
              <p className="text-sm text-gray-600">Deployments</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                metrics.bugFix.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span>{metrics.bugFix.change}</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{metrics.bugFix.value}</p>
              <p className="text-sm text-gray-600">Avg Bug Fix Time</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Commit Trends */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-600 mr-2" />
              Development Activity Trends
            </h3>
            
            <div className="h-64 flex items-end justify-between space-x-2">
              {commitData.map((week, index) => (
                <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                  <div className="w-full space-y-1">
                    <div 
                      className="w-full bg-purple-500 rounded-t hover:bg-purple-600 transition-colors"
                      style={{ height: `${(week.commits / maxCommits) * 180}px` }}
                      title={`${week.commits} commits`}
                    />
                    <div 
                      className="w-full bg-blue-500 rounded hover:bg-blue-600 transition-colors"
                      style={{ height: `${(week.reviews / 25) * 60}px` }}
                      title={`${week.reviews} reviews`}
                    />
                    <div 
                      className="w-full bg-green-500 rounded hover:bg-green-600 transition-colors"
                      style={{ height: `${(week.deployments / 6) * 40}px` }}
                      title={`${week.deployments} deployments`}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{week.week}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-sm text-gray-600">Commits</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Deployments</span>
              </div>
            </div>
          </div>

          {/* Team Performance */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-600 mr-2" />
              Team Performance
            </h3>
            
            <div className="space-y-4">
              {teamPerformance.map((member, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{member.name}</h4>
                    <span className="text-sm font-bold text-purple-600">{member.score}</span>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>{member.commits} commits</span>
                    <span>{member.reviews} reviews</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${member.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI Performance Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Productivity Trend</h4>
              <p className="text-sm text-gray-600">Your team's velocity has increased 23% this month. The main drivers are improved code review efficiency and reduced bug fix times.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Quality Improvement</h4>
              <p className="text-sm text-gray-600">Code quality scores are trending upward. Consider implementing pair programming for complex features to maintain this momentum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
