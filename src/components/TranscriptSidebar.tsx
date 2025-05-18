import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

interface Message {
  id: string;
  user: {
    name: string;
    initials: string;
    color: 'primary' | 'gray';
  };
  text: string;
  time: string;
  isHighlighted?: boolean;
}

const messages: Message[] = [
  {
    id: '1',
    user: { name: 'John Doe', initials: 'JD', color: 'primary' },
    text: "Let's start by reviewing the Q4 goals and objectives. I think we've made great progress but there are still a few areas we need to focus on.",
    time: '10:00 AM',
  },
  {
    id: '2',
    user: { name: 'Alice Smith', initials: 'AS', color: 'gray' },
    text: "I've prepared a presentation on our current progress. Let me share my screen.",
    time: '10:02 AM',
  },
  {
    id: '3',
    user: { name: 'John Doe', initials: 'JD', color: 'primary' },
    text: "Great, let's go through it and identify any potential roadblocks.",
    time: '10:05 AM',
  },
  {
    id: '4',
    user: { name: 'Bob Peterson', initials: 'BP', color: 'primary' },
    text: "I'm concerned about the timeline for the new feature. We might need to allocate more resources to meet the deadline.",
    time: '10:08 AM',
    isHighlighted: true,
  },
  {
    id: '5',
    user: { name: 'Alice Smith', initials: 'AS', color: 'gray' },
    text: "That's a good point. I can work with the engineering team to reassess the timeline.",
    time: '10:10 AM',
  },
  {
    id: '6',
    user: { name: 'John Doe', initials: 'JD', color: 'primary' },
    text: "Let's also discuss the budget implications. We might need to increase our Q1 budget to accommodate these changes.",
    time: '10:12 AM',
    isHighlighted: true,
  },
  {
    id: '7',
    user: { name: 'Sarah Johnson', initials: 'SJ', color: 'gray' },
    text: "I can prepare a revised budget proposal by next week.",
    time: '10:15 AM',
  },
  {
    id: '8',
    user: { name: 'Bob Peterson', initials: 'BP', color: 'primary' },
    text: "Perfect. Let's also make sure we communicate these changes to all stakeholders.",
    time: '10:18 AM',
  },
]

function TranscriptSidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div
      className={`relative bg-white border-l border-gray-200 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-96' : 'w-12'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -left-4 top-6 bg-white rounded-full p-1 border border-gray-200 shadow-sm hover:bg-gray-50 z-10"
      >
        {isOpen ? (
          <ChevronRightIcon className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronLeftIcon className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="h-full flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Transcript</h3>
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
                <ArrowDownTrayIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="py-2 px-4 border-b border-gray-200">
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search transcript..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex items-start space-x-3 ${
                    message.isHighlighted 
                      ? 'bg-primary-50 -mx-3 px-3 py-2 rounded-md border-l-2 border-primary-500' 
                      : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full bg-${message.user.color}-100 flex items-center justify-center`}>
                      <span className={`text-sm font-medium text-${message.user.color}-700`}>
                        {message.user.initials}
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{message.user.name}</p>
                      <p className="text-xs text-gray-500">{message.time}</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">
                      {message.text}
                    </p>
                    {message.isHighlighted && (
                      <div className="mt-2 flex space-x-2">
                        <button className="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded hover:bg-primary-200">
                          Add to Summary
                        </button>
                        <button className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                          Mark as Action Item
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TranscriptSidebar 