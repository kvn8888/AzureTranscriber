'use client';

export default function TranscribeButton() {
  const handleClick = () => {
    // Transcribe functionality will be implemented later
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-3 rounded-full font-medium text-sm transition-all duration-200 
                 bg-green-500 hover:bg-green-600 text-white shadow-lg 
                 flex items-center gap-2 min-w-[120px] justify-center"
    >
      <div className="w-3 h-3">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      Transcribe
    </button>
  );
}