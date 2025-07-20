'use client';

import { useAudioRecorder } from '../hooks/useAudioRecorder';

export default function AudioRecorder({ onTranscriptionComplete }) {
  const {
    isRecording,
    audioBlob,
    error,
    isProcessing,
    startRecording,
    stopRecording,
    resetRecording,
    cleanup
  } = useAudioRecorder();

  const handleStartStop = () => {
    if(!isRecording) {
      startRecording()
    } else {
      stopRecording();
    }
  };

  const handleTranscribe = async () => {
    // TODO: Send audioBlob to transcription service
    // TODO: Handle response and call onTranscriptionComplete
  };

  const handleReset = () => {
    // TODO: Reset recording and clear any transcription
    resetRecording()
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Record/Stop Button */}
      <button
        onClick={handleStartStop}
        className={`
          px-8 py-3 rounded-full font-medium text-sm transition-all duration-200 
          flex items-center gap-2 min-w-[120px] justify-center
          ${isRecording 
            ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg' 
            : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg'
          }
        `}
      >
        <div className={`w-3 h-3 rounded-full bg-white`}></div>
        {isRecording ? 'Stop' : 'Record'}
      </button>

      {/* Transcribe Button */}
      {audioBlob && !isRecording && (
        <button
          onClick={handleTranscribe}
          disabled={isProcessing}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg"
        >
          {isProcessing ? 'Transcribing...' : 'Transcribe'}
        </button>
      )}

      {/* Reset Button */}
      {audioBlob && (
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm"
        >
          Reset
        </button>
      )}

      {/* Error Display */}
      {error && (
        <div className="text-red-500 text-sm">
          Error: {error}
        </div>
      )}

      {/* Recording Status */}
      {isRecording && (
        <div className="text-red-500 text-sm animate-pulse">
          Recording...
        </div>
      )}
    </div>
  );
}