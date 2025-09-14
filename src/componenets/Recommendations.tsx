'use client'

import React, { useState } from 'react'
import { 
  Lightbulb, 
  Star, 
  BookOpen, 
  Target, 
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Code,
  Award,
  ArrowRight,
  Filter
} from 'lucide-react'

interface Recommendation {
  id: string
  type: 'learning' | 'practice' | 'improvement' | 'collaboration'
  priority: 'high' | 'medium' | 'low'
  title: string
  description: string
  impact: string
  effort: string
  skills: string[]
  progress?: number
  dueDate?: string
  resources: {
    title: string
    type: 'article' | 'video' | 'course' | 'documentation'
    url: string
  }[]
}

export const Recommendations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [completedItems, setCompletedItems] = useState(new Set<string>())

  const recommendations: Recommendation[] = [
    {
      id: '1',
      type: 'learning',
      priority: 'high',
      title: 'Learn Advanced TypeScript Patterns',
      description: 'Your codebase shows opportunities to leverage advanced TypeScript features like conditional types and mapped types for better type safety.',
      impact: 'Reduce runtime errors by 40%',
      effort: '2-3 weeks',
      skills: ['TypeScript', 'Type Theory', 'Advanced Patterns'],
      progress: 35,
      dueDate: '2024-02-15',
      resources: [
        { title: 'TypeScript Deep Dive', type: 'course', url: '#' },
        { title: 'Advanced TypeScript Patterns', type: 'article', url: '#' },
        { title: 'TypeScript Documentation', type: 'documentation', url: '#' }
      ]
    },
    {
      id: '2',
      type: 'practice',
      priority: 'high',
      title: 'Implement Comprehensive Error Handling',
      description: 'Analysis shows inconsistent error handling patterns across your services. Standardizing this will improve reliability.',
      impact: 'Increase system reliability by 60%',
      effort: '1 week',
      skills: ['Error Handling', 'System Design', 'Best Practices'],
      resources: [
        { title: 'Error Handling Best Practices', type: 'article', url: '#' },
        { title: 'Building Resilient Systems', type: 'video', url: '#' }
      ]
    },
    {
      id: '3',
      type: 'improvement',
      priority: 'medium',
      title: 'Optimize Database Queries',
      description: 'Several queries in your user service could benefit from indexing and query optimization to reduce response times.',
      impact: 'Improve API response time by 50%',
      effort: '3-4 days',
      skills: ['Database', 'Performance', 'SQL Optimization'],
      progress: 0,
      resources: [
        { title: 'SQL Query Optimization', type: 'course', url: '#' },
        { title: 'Database Indexing Strategies', type: 'article', url: '#' }
      ]
    },
    {
      id: '4',
      type: 'collaboration',
      priority: 'medium',
      title: 'Establish Code Review Guidelines',
      description: 'Your team could benefit from structured code review processes to maintain code quality and knowledge sharing.',
      impact: 'Improve code quality by 30%',
      effort: '1-2 days',
      skills: ['Code Review', 'Team Collaboration', 'Process Design'],
      resources: [
        { title: 'Effective Code Reviews', type: 'article', url: '#' },
        { title: 'Building Review Culture', type: 'video', url: '#' }
      ]
    },
    {
      id: '5',
      type: 'learning',
      priority: 'low',
      title: 'Explore Microservices Architecture',
      description: 'As your monolith grows, consider learning microservices patterns for better scalability and team autonomy.',
      impact: 'Enable team scalability',
      effort: '4-6 weeks',
      skills: ['Microservices', 'System Architecture', 'DevOps'],
      resources: [
        { title: 'Microservices Patterns', type: 'course', url: '#' },
        { title: 'From Monolith to Microservices', type: 'article', url: '#' }
      ]
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'learning': return BookOpen
      case 'practice': return Target
      case 'improvement': return TrendingUp
      case 'collaboration': return Users
      default: return Lightbulb
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'learning': return 'text-blue-600 bg-blue-100'
      case 'practice': return 'text-green-600 bg-green-100'
      case 'improvement': return 'text-purple-600 bg-purple-100'
      case 'collaboration': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-700 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-700 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-700 bg-green-50 border-green-200'
      default: return 'text-gray-700 bg-gray-50 border-gray-200'
    }
  }

  const filteredRecommendations = recommendations.filter(rec => 
    activeFilter === 'all' || rec.type === activeFilter
  )

  const toggleCompletion = (id: string) => {
    const newCompleted = new Set(completedItems)
    if (newCompleted.has(id)) {
      newCompleted.delete(id)
    } else {
      newCompleted.add(id)
    }
    setCompletedItems(newCompleted)
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Recommendations</h1>
          <p className="text-gray-600">Personalized learning path and improvement suggestions based on your code analysis</p>
        </div>

        {/* Achievement Summary */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-6 h-6 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-900">Your Learning Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">7</div>
              <div className="text-sm text-gray-600">Recommendations Completed</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Skills Improved</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Code Quality Improvement</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <Filter className="w-5 h-5 text-gray-400" />
          <div className="flex space-x-2">
            {['all', 'learning', 'practice', 'improvement', 'collaboration'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Recommendations List */}
        <div className="space-y-6">
          {filteredRecommendations.map((rec) => {
            const TypeIcon = getTypeIcon(rec.type)
            const isCompleted = completedItems.has(rec.id)
            
            return (
              <div
                key={rec.id}
                className={`bg-white rounded-xl border border-gray-200 p-6 transition-all duration-200 ${
                  isCompleted ? 'opacity-75 bg-gray-50' : 'hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <button
                      onClick={() => toggleCompletion(rec.id)}
                      className={`mt-1 p-2 rounded-lg transition-colors ${
                        isCompleted 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-2 rounded-lg ${getTypeColor(rec.type)}`}>
                          <TypeIcon className="w-4 h-4" />
                        </div>
                        <h3 className={`text-lg font-semibold ${
                          isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'
                        }`}>
                          {rec.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-md border ${getPriorityColor(rec.priority)}`}>
                          {rec.priority} priority
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{rec.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Impact: {rec.impact}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Effort: {rec.effort}</span>
                        </div>
                      </div>

                      {rec.progress !== undefined && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Progress</span>
                            <span className="text-sm text-gray-600">{rec.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 bg-purple-500 rounded-full transition-all duration-500"
                              style={{ width: `${rec.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {rec.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-900">Learning Resources:</h4>
                        {rec.resources.map((resource, index) => (
                          <a
                            key={index}
                            href={resource.url}
                            className="flex items-center space-x-2 text-sm text-purple-600 hover:text-purple-700 transition-colors"
                          >
                            <span>📖</span>
                            <span>{resource.title}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredRecommendations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recommendations found</h3>
            <p className="text-gray-600">Try selecting a different filter to see more recommendations</p>
          </div>
        )}
      </div>
    </div>
  )
}
