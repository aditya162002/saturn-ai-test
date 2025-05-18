import { useState } from 'react'
import { HomeIcon, DocumentTextIcon, CalendarIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { HomeIcon as HomeIconSolid, DocumentTextIcon as DocumentTextIconSolid, 
  CalendarIcon as CalendarIconSolid, UserGroupIcon as UserGroupIconSolid, 
  ChartBarIcon as ChartBarIconSolid } from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, activeIcon: HomeIconSolid },
  { name: 'Meetings', href: '#', icon: CalendarIcon, activeIcon: CalendarIconSolid, current: true },
  { name: 'Documents', href: '#', icon: DocumentTextIcon, activeIcon: DocumentTextIconSolid },
  { name: 'Analytics', href: '#', icon: ChartBarIcon, activeIcon: ChartBarIconSolid },
  { name: 'Team', href: '#', icon: UserGroupIcon, activeIcon: UserGroupIconSolid },
]

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Meetings')

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0 hidden md:block">
      <div className="h-full flex flex-col">
        <div className="border-b border-gray-200 px-4 py-6">
          <h2 className="text-lg font-medium text-gray-900">Meeting Summary</h2>
          <p className="mt-1 text-sm text-gray-500">Product Team Sync - Aug 28</p>
        </div>
        
        <div className="px-3 py-5">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</h3>
          <nav className="mt-3 space-y-1">
            {navigation.map((item) => {
              const isActive = activeItem === item.name
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md group ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {isActive ? (
                    <item.activeIcon
                      className="mr-3 h-5 w-5 text-primary-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <item.icon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                  {item.name}
                  {isActive && (
                    <span className="ml-auto bg-primary-100 rounded-full w-2 h-2"></span>
                  )}
                </a>
              )
            })}
          </nav>
        </div>
        
        <div className="px-3 py-5 border-t border-gray-200 mt-auto">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Meeting Details</h3>
          <div className="mt-3 space-y-4">
            <div>
              <h4 className="text-xs font-medium text-gray-500">Date</h4>
              <p className="text-sm text-gray-900">Aug 28, 2023</p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-500">Duration</h4>
              <p className="text-sm text-gray-900">45 minutes</p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-500">Participants</h4>
              <div className="flex mt-1 -space-x-1 overflow-hidden">
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-primary-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-primary-700">JD</span>
                </div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-700">AS</span>
                </div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-primary-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-primary-700">BP</span>
                </div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-700">+2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 