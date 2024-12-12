import React, { useState } from "react";

export default function DevilModeSwitch() {
  const [devilMode, setDevilMode] = useState(false);

  const toggleDevilMode = () => {
    setDevilMode(!devilMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        devilMode
          ? "bg-gradient-to-br from-red-800 via-red-600 to-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >
     

      {/* Floating Button */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={toggleDevilMode}
          className={`px-4 py-2 font-semibold rounded-full shadow-lg transition-all ${
            devilMode
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          {devilMode ? "🌑 Exit Mode" : "🔥 Enter Mode"}
        </button>
      </div>
    </div>
  );
}
