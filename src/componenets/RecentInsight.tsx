'use client'

import React from 'react'
import { Lightbulb, ChevronRight, AlertTriangle, CheckCircle, Zap } from 'lucide-react'

export const RecentInsights: React.FC = () => {
  const insights = [
    {
      id: 1,
      type: 'suggestion',
      title: 'Optimize API Response Times',
      description: 'Your user-service has 3 endpoints with >500ms response times. Consider implementing caching.',
      impact: 'High',
      effort: 'Medium',
      icon: Zap,
      color: 'text-orange-600 bg-orange-100',
      actionable: true,
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Code Coverage Improved',
      description: 'Great job! Your test coverage increased from 78% to 85% this week.',
      impact: 'Medium',
      effort: 'Completed',
      icon: CheckCircle,
      color: 'text-green-600 bg-green-100',
      actionable: false,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Dependency Vulnerability',
      description: '2 high-severity vulnerabilities detected in package.json. Update recommended.',
      impact: 'Critical',
      effort: 'Low',
      icon: AlertTriangle,
      color: 'text-red-600 bg-red-100',
      actionable: true,
    },
    {
      id: 4,
      type: 'suggestion',
      title: 'Code Duplication Detected',
      description: 'Found 4 similar code blocks in authentication module. Consider refactoring.',
      impact: 'Medium',
      effort: 'High',
      icon: Lightbulb,
      color: 'text-blue-600 bg-blue-100',
      actionable: true,
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'text-red-700 bg-red-50 border-red-200'
      case 'High': return 'text-orange-700 bg-orange-50 border-orange-200'
      case 'Medium': return 'text-yellow-700 bg-yellow-50 border-yellow-200'
      default: return 'text-gray-700 bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Lightbulb className="w-5 h-5 text-purple-600 mr-2" />
        AI Insights & Recommendations
      </h3>
      
      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon
          
          return (
            <div 
              key={insight.id}
              className="group p-4 border border-gray-200 rounded-lg hover:border-purple-200 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${insight.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                        {insight.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {insight.description}
                      </p>
                    </div>
                    
                    {insight.actionable && (
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${getImpactColor(insight.impact)}`}>
                      {insight.impact} Impact
                    </span>
                    <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md">
                      {insight.effort} Effort
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-purple-700 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
        View All Insights
      </button>
    </div>
  )
}
