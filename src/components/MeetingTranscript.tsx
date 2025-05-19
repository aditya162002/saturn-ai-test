import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface MeetingTranscriptProps {
  onClose: () => void;
}

function MeetingTranscript({ onClose }: MeetingTranscriptProps) {
  const transcriptEntries = [
    {
      id: 1,
      speaker: "Alex",
      content:
        "Welcome to our onboarding call. Today we'll be discussing your financial goals and risk tolerance.",
      time: "12:05 PM",
    },
    {
      id: 2,
      speaker: "Smith",
      content:
        "Thank you for having us. We're excited to get started with financial planning.",
      time: "12:06 PM",
    },
    {
      id: 3,
      speaker: "Marek",
      content:
        "Yes, especially interested in retirement options and possibly college savings for our children.",
      time: "12:07 PM",
    },
    {
      id: 4,
      speaker: "Alex",
      content:
        "Great, let's start by establishing your current financial situation and then move on to discussing those goals.",
      time: "12:08 PM",
    },
    {
      id: 5,
      speaker: "Smith",
      content: "That sounds like a good approach.",
      time: "12:08 PM",
    },
    {
      id: 6,
      speaker: "Alex",
      content:
        "Let's also discuss your risk tolerance. This will help us determine the appropriate investment strategies for your portfolio.",
      time: "12:10 PM",
    },
    {
      id: 7,
      speaker: "Marek",
      content:
        "I think we're moderate in terms of risk. We want growth but also some stability.",
      time: "12:11 PM",
    },
  ];

  return (
    <div
      className="w-80 bg-white border ml-[2px] rounded-md border-gray-200 flex flex-col h-[80vh] overflow-auto
"
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
        <h2 className="text-lg font-medium text-gray-900">Transcription</h2>
        <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100">
          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 min-h-0">
        <div className="space-y-6">
          {transcriptEntries.map((entry) => (
            <div key={entry.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">
                  {entry.speaker}
                </span>
                <span className="text-xs text-gray-500">{entry.time}</span>
              </div>
              <p className="text-sm text-gray-700">{entry.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetingTranscript;
