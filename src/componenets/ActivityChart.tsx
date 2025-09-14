'use client'

import React from 'react'
import { Activity } from 'lucide-react'

export const ActivityChart: React.FC = () => {
  const data = [
    { day: 'Mon', commits: 12, prs: 3, issues: 2 },
    { day: 'Tue', commits: 19, prs: 5, issues: 1 },
    { day: 'Wed', commits: 8, prs: 2, issues: 4 },
    { day: 'Thu', commits: 25, prs: 7, issues: 2 },
    { day: 'Fri', commits: 15, prs: 4, issues: 3 },
    { day: 'Sat', commits: 6, prs: 1, issues: 1 },
    { day: 'Sun', commits: 4, prs: 0, issues: 0 },
  ]

  const maxValue = Math.max(...data.map(d => Math.max(d.commits, d.prs * 3, d.issues * 3)))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Activity className="w-5 h-5 text-purple-600 mr-2" />
        Weekly Activity
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-purple-500"></div>
              <span className="text-sm text-gray-600">Commits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-blue-500"></div>
              <span className="text-sm text-gray-600">Pull Requests</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-orange-500"></div>
              <span className="text-sm text-gray-600">Issues</span>
            </div>
          </div>
        </div>

        <div className="h-48 flex items-end justify-between space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center space-y-1">
              <div className="w-full flex flex-col items-center space-y-1 relative h-36">
                {/* Commits Bar */}
                <div 
                  className="w-full bg-purple-500 rounded-t transition-all duration-300 hover:bg-purple-600"
                  style={{ height: `${(item.commits / maxValue) * 100}%` }}
                  title={`${item.commits} commits`}
                />
                
                {/* PRs and Issues as smaller bars */}
                <div className="w-full flex space-x-1 absolute bottom-0">
                  <div 
                    className="w-1/2 bg-blue-500 rounded transition-all duration-300 hover:bg-blue-600"
                    style={{ height: `${((item.prs * 3) / maxValue) * 36}px` }}
                    title={`${item.prs} pull requests`}
                  />
                  <div 
                    className="w-1/2 bg-orange-500 rounded transition-all duration-300 hover:bg-orange-600"
                    style={{ height: `${((item.issues * 3) / maxValue) * 36}px` }}
                    title={`${item.issues} issues`}
                  />
                </div>
              </div>
              
              <span className="text-xs font-medium text-gray-600">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
