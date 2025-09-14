'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Dashboard } from '@/components/Dashboard'
import { RepositoryList } from '@/components/RepositoryList'
import { Analytics } from '@/components/Analytics'
import { Recommendations } from '@/components/Recommendations'
import { Settings } from '@/components/Settings'

type ViewType = 'dashboard' | 'repositories' | 'analytics' | 'recommendations' | 'settings'

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard')

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'repositories':
        return <RepositoryList />
      case 'analytics':
        return <Analytics />
      case 'recommendations':
        return <Recommendations />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-hidden">
        {renderCurrentView()}
      </main>
    </div>
  )
}
