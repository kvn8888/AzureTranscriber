import TranscribedText from "./components/TranscribedText";
import AudioRecorder from "./components/AudioRecorder";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
            Azure Transcriber
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Record audio and get AI-powered transcriptions
          </p>
        </div>
        
        <div className="space-y-6">
          <TranscribedText />
          
          <div className="flex justify-center">
            <AudioRecorder />
          </div>
        </div>
      </div>
    </div>
  );
}
