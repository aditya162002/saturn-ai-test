import { useState } from "react";
import {
  ArrowLeftIcon,
  CalendarIcon,
  UserGroupIcon,
  ChevronDownIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import MeetingTranscript from "./MeetingTranscript";
import mockData from "../mockdata.json";
import SortableFacts from "./MeetingDetails";
interface MeetingSummaryProps {
  onToggleTranscript: () => void;
  showTranscript: boolean;
}

function MeetingSummary({
  onToggleTranscript,
  showTranscript,
}: MeetingSummaryProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const financialPlanningSections = Array(5)
    .fill(null)
    .map((_, index) => ({
      id: index,
      title: "Financial planning",
      items: ["Goals", "Risk Tolerance"],
    }));

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center mb-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">Back to home</span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-gray-900">
            Onboarding Call with Smith & Marek
          </h1>

          <div className="flex items-center justify-between w-full max-w-2xl ml-8">
            <div className="flex items-center space-x-4 ml-[-100px]">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Today</span>
              </div>

              <div className="flex items-center bg-gray-100 rounded-md px-2 py-1">
                <UserGroupIcon className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-xs text-gray-600">Alex + 2 others</span>
              </div>

              <div className="bg-gray-100 rounded-md px-3 py-1">
                <span className="text-sm text-gray-700">Onboarding</span>
              </div>
            </div>

            <button className="bg-[#0404D6] hover:bg-[#0303b8] text-white px-4 py-2 rounded-md flex items-center">
              <span className="mr-2">Save document</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 flex">
        <div className="w-72 pr-6 flex-shrink-0">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Meeting summary
          </h2>

          <div className="space-y-4">
            {financialPlanningSections.map((section, index) => (
              <div key={section.id} className="space-y-2">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-gray-600">{section.title}</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      expandedSections[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSections[index] && (
                  <div className="pl-4 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-gray-500 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-3xl">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 overflow-y-auto max-h-[700px]">
            <div className="flex items-center text-gray-400 text-xs mb-4">
              <span>Curated by CoPlanner at 12:32 PM, 28 Dec 2024</span>
            </div>
            <div className="space-y-6">
              {mockData.sections.map((section) => (
                <div key={section.header}>
                  {section.sections.map((subsection) => (
                    <div
                      key={subsection.id}
                      className="mb-8 pb-8 border-b border-gray-200 last:border-b-0"
                    >
                      <h3 className="text-xl font-medium text-gray-900 mb-4">
                        {subsection.name}
                      </h3>
                      <SortableFacts subsection={subsection} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {showTranscript ? (
          <MeetingTranscript onClose={() => onToggleTranscript()} />
        ) : (
          <div className="ml-6 border border-gray-200 rounded-md h-10">
            <button
              onClick={() => onToggleTranscript()}
              className={`flex items-center px-3 py-2 rounded-md ${
                showTranscript
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <DocumentTextIcon
                className={`w-5 h-5 mr-2 ${
                  showTranscript ? "text-blue-600" : "text-gray-500"
                }`}
              />
              <span>Meeting transcript</span>
              <img
                src="/chevron-left.svg"
                alt="chevron left"
                className="w-4 h-4 ml-2"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MeetingSummary;
