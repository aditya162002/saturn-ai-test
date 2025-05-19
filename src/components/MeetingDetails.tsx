import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState, useEffect } from "react";

function MeetingDetails({ fact, sectionId }: { fact: any; sectionId: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: fact.id,
    data: {
      sectionId: sectionId,
      fact: fact,
      type: "fact",
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-8 border-l-2 border-gray-200 pl-4 cursor-move bg-white"
    >
      <p className="text-gray-700">{fact.content}</p>
    </div>
  );
}

export default function MeetingDetail({
  subsection,
  onFactDrop,
}: {
  subsection: any;
  onFactDrop?: (args: {
    fact: any;
    fromSectionId: string;
    toSectionId: string;
    targetIndex: number;
  }) => void;
}) {
  const [facts, setFacts] = useState(subsection.unstructured_facts);

  useEffect(() => {
    setFacts(subsection.unstructured_facts);
  }, [subsection.unstructured_facts]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    const activeData = active.data.current;
    const overData = over.data.current;

    if (activeId === overId && activeData.sectionId === overData.sectionId) {
      return;
    }

    const sourceSectionId = activeData.sectionId;
    const targetSectionId = overData.sectionId || subsection.id;
    const factToMove = activeData.fact;

    if (sourceSectionId === targetSectionId) {
      const oldIndex = facts.findIndex((f: any) => f.id === activeId);
      const newIndex = facts.findIndex((f: any) => f.id === overId);

      if (oldIndex !== -1 && newIndex !== -1) {
        setFacts((currentFacts: any) =>
          arrayMove(currentFacts, oldIndex, newIndex)
        );
        if (onFactDrop) {
          onFactDrop({
            fact: factToMove,
            fromSectionId: sourceSectionId,
            toSectionId: targetSectionId,
            targetIndex: newIndex,
          });
        }
      }
    } else {
      if (onFactDrop) {
        let targetIndex = -1;
        if (overData && overData.type === "fact") {
          // The parent will need to find the index of overId in the targetSectionId's fact list
          // For now, we'll pass overId and let the parent figure it out.
        }

        onFactDrop({
          fact: factToMove,
          fromSectionId: sourceSectionId,
          toSectionId: targetSectionId,
          targetIndex: -1,
        });
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={facts.map((f: any) => f.id)}
        strategy={verticalListSortingStrategy}
      >
        {facts.map((fact: any) => (
          <MeetingDetails key={fact.id} fact={fact} sectionId={subsection.id} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
