'use client'

import React from 'react'
import { DivideIcon as LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  suffix?: string
  subtitle?: string
  icon: LucideIcon
  trend?: number
  color: 'green' | 'blue' | 'orange' | 'purple'
}

const colorClasses = {
  green: {
    icon: 'text-green-600 bg-green-100',
    trend: 'text-green-600',
  },
  blue: {
    icon: 'text-blue-600 bg-blue-100',
    trend: 'text-blue-600',
  },
  orange: {
    icon: 'text-orange-600 bg-orange-100',
    trend: 'text-orange-600',
  },
  purple: {
    icon: 'text-purple-600 bg-purple-100',
    trend: 'text-purple-600',
  },
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  suffix,
  subtitle,
  icon: Icon,
  trend,
  color,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${colorClasses[color].icon}`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend !== undefined && (
          <div className={`flex items-center space-x-1 text-sm ${
            trend >= 0 ? colorClasses[color].trend : 'text-red-600'
          }`}>
            {trend >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{Math.abs(trend)}{trend >= 0 ? '+' : '-'}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="flex items-baseline space-x-1">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {suffix && <span className="text-sm text-gray-500">{suffix}</span>}
        </div>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  )
}
