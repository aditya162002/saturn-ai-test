import { Droppable, Draggable } from 'react-beautiful-dnd'
import { PlusIcon, PencilIcon } from '@heroicons/react/24/outline'

interface Item {
  id: string
  content: string
}

interface MeetingSectionProps {
  id: string
  title: string
  items: Item[]
}

function MeetingSection({ id, title, items }: MeetingSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500 p-1 rounded-full"
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`p-4 space-y-3 flex-1 min-h-[250px] ${
              snapshot.isDraggingOver ? 'bg-gray-50' : ''
            }`}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-3 bg-white rounded-md border transition-all ${
                      snapshot.isDragging
                        ? 'border-primary-500 shadow-md scale-[1.02]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-gray-700">{item.content}</p>
                      <button className="text-gray-400 hover:text-gray-600 ml-2 p-1">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Item
            </button>
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default MeetingSection 