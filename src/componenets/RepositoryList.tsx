'use client'

import React, { useState } from 'react'
import { 
  Search, 
  Filter, 
  GitBranch, 
  Star, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Users,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

interface Repository {
  id: string
  name: string
  description: string
  language: string
  stars: number
  healthScore: number
  lastAnalyzed: string
  issues: number
  pullRequests: number
  contributors: number
  trend: 'up' | 'down' | 'stable'
  status: 'healthy' | 'warning' | 'critical'
}

export const RepositoryList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const repositories: Repository[] = [
    {
      id: '1',
      name: 'frontend-dashboard',
      description: 'Modern React dashboard with TypeScript and Tailwind CSS',
      language: 'TypeScript',
      stars: 142,
      healthScore: 92,
      lastAnalyzed: '2 hours ago',
      issues: 3,
      pullRequests: 2,
      contributors: 8,
      trend: 'up',
      status: 'healthy'
    },
    {
      id: '2',
      name: 'api-gateway-service',
      description: 'Node.js microservice gateway with authentication and rate limiting',
      language: 'JavaScript',
      stars: 89,
      healthScore: 78,
      lastAnalyzed: '5 hours ago',
      issues: 12,
      pullRequests: 5,
      contributors: 5,
      trend: 'stable',
      status: 'warning'
    },
    {
      id: '3',
      name: 'data-processing-pipeline',
      description: 'Python-based ETL pipeline for processing large datasets',
      language: 'Python',
      stars: 56,
      healthScore: 65,
      lastAnalyzed: '1 day ago',
      issues: 23,
      pullRequests: 8,
      contributors: 12,
      trend: 'down',
      status: 'critical'
    },
    {
      id: '4',
      name: 'mobile-app-ios',
      description: 'Native iOS application with SwiftUI and Core Data',
      language: 'Swift',
      stars: 203,
      healthScore: 88,
      lastAnalyzed: '3 hours ago',
      issues: 7,
      pullRequests: 3,
      contributors: 6,
      trend: 'up',
      status: 'healthy'
    },
    {
      id: '5',
      name: 'ml-recommendation-engine',
      description: 'Machine learning service for personalized recommendations',
      language: 'Python',
      stars: 178,
      healthScore: 82,
      lastAnalyzed: '6 hours ago',
      issues: 9,
      pullRequests: 4,
      contributors: 15,
      trend: 'up',
      status: 'healthy'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return CheckCircle
      case 'warning': return AlertCircle
      case 'critical': return AlertCircle
      default: return Clock
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100'
      case 'warning': return 'text-yellow-600 bg-yellow-100'
      case 'critical': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return TrendingUp
      case 'down': return TrendingDown
      default: return null
    }
  }

  const filteredRepos = repositories.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         repo.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || repo.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Repository Analysis</h1>
          <p className="text-gray-600">Monitor and analyze your repositories with AI-powered insights</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Repositories</option>
              <option value="healthy">Healthy</option>
              <option value="warning">Needs Attention</option>
              <option value="critical">Critical Issues</option>
            </select>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredRepos.map((repo) => {
            const StatusIcon = getStatusIcon(repo.status)
            const TrendIcon = getTrendIcon(repo.trend)
            
            return (
              <div
                key={repo.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {repo.name}
                      </h3>
                      <div className={`p-1 rounded-full ${getStatusColor(repo.status)}`}>
                        <StatusIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>
                  
                  {TrendIcon && (
                    <div className={`flex items-center space-x-1 text-sm ${
                      repo.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Health Score */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Health Score</span>
                    <span className="text-sm font-bold text-gray-900">{repo.healthScore}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        repo.healthScore >= 80 ? 'bg-green-500' :
                        repo.healthScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${repo.healthScore}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4" />
                    <span>{repo.stars} stars</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{repo.contributors} contributors</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>{repo.issues} issues</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GitBranch className="w-4 h-4" />
                    <span>{repo.pullRequests} PRs</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{repo.language}</span>
                  </div>
                  <span className="text-xs text-gray-500">Updated {repo.lastAnalyzed}</span>
                </div>
              </div>
            )
          })}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No repositories found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
