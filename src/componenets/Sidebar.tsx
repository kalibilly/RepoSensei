'use client'

import React from 'react'
import { 
  LayoutDashboard, 
  FolderGit2, 
  BarChart3, 
  Lightbulb, 
  Settings,
  Brain,
  Github
} from 'lucide-react'

type ViewType = 'dashboard' | 'repositories' | 'analytics' | 'recommendations' | 'settings'

interface SidebarProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard' as ViewType, icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'repositories' as ViewType, icon: FolderGit2, label: 'Repositories' },
    { id: 'analytics' as ViewType, icon: BarChart3, label: 'Analytics' },
    { id: 'recommendations' as ViewType, icon: Lightbulb, label: 'Insights' },
    { id: 'settings' as ViewType, icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">RepoSensei</h1>
            <p className="text-xs text-gray-500">AI Repository Mentor</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentView === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border border-purple-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-purple-600' : ''}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Github className="w-5 h-5 text-gray-600" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Connected to GitHub</p>
            <p className="text-xs text-gray-500">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
