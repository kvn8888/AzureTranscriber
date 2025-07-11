export default function TranscribedText() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 min-h-[400px] shadow-sm">
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Transcribed Text
        </div>
        <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap overflow-y-auto max-h-[350px]">
          {/* Transcribed text will be displayed here */}
        </div>
      </div>
    </div>
  );
}