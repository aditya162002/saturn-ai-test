import { useState } from "react";
import MeetingSummary from "./components/MeetingSummary";
import MeetingTranscript from "./components/MeetingTranscript";
import SideNavigation from "./components/SideNavigation";

function App() {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      <div className="flex flex-1 mt-5 mx-5">
        <div className="flex flex-1 rounded-t-2xl relative">
          <SideNavigation />
          <div className="flex-1 flex overflow-hidden border border-[#D9D9D9] rounded-xl">
            <div className="flex-1 bg-[#F9FAFB] min-w-0">
              <MeetingSummary
                onToggleTranscript={() => setShowTranscript(!showTranscript)}
                showTranscript={showTranscript}
              />

              {showTranscript && (
                <MeetingTranscript onClose={() => setShowTranscript(false)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
