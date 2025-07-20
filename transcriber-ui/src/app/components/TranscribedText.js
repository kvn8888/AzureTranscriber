'use client';

import { useState, useRef } from 'react';

export default function TranscribedText() {
  const [isHovered, setIsHovered] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const textContentRef = useRef(null);

  const handleCopy = async () => {
    try {
      // Copy the actual transcribed text content from the div
      const textToCopy = textContentRef.current?.textContent || '';
      if (textToCopy.trim()) {
        await navigator.clipboard.writeText(textToCopy);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 min-h-[400px] shadow-sm relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Transcribed Text
        </div>
        <div 
          ref={textContentRef}
          className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap overflow-y-auto max-h-[350px]"
        >
          {/* Sample transcribed text for demonstration */}
          Sample transcribed text content will appear here. This is placeholder text to demonstrate the hover and copy functionality.
        </div>
        
        {/* Copy button that appears on hover */}
        <button
          onClick={handleCopy}
          className={`
            absolute top-4 right-4 p-2 rounded-lg transition-all duration-200
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
            ${showCopied ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300'}
          `}
          title={showCopied ? 'Copied!' : 'Copy to clipboard'}
        >
          {showCopied ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}