'use client';

import { useState } from 'react';

export default function RecordButton() {
  const [isRecording, setIsRecording] = useState(false);

  const handleClick = () => {
    setIsRecording(!isRecording);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-8 py-3 rounded-full font-medium text-sm transition-all duration-200 
        flex items-center gap-2 min-w-[120px] justify-center
        ${isRecording 
          ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg' 
          : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg'
        }
      `}
    >
      <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-white' : 'bg-white'}`}></div>
      {isRecording ? 'Stop' : 'Record'}
    </button>
  );
}