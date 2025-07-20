'use client';

import { useState, useRef, useCallback } from 'react';

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  /**
   * Initiates audio recording from user's microphone
   * 
   * Flow:
   * 1. Reset audio chunks array
   * 2. Request microphone access via getUserMedia
   * 3. Store media stream in ref for cleanup
   * 4. Create MediaRecorder instance with the stream
   * 5. Set up ondataavailable handler to collect audio chunks
   * 6. Set up onstop handler to create final audio blob
   * 7. Update recording state and start recording
   * 
   * @throws {Error} If microphone access is denied or MediaRecorder fails
   */
  const startRecording = useCallback(async () => {
    try {
      chunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;


      mediaRecorder.ondataavailable = (event) => { 
        if(event.data.size > 0) {
          chunksRef.current.push(event.data); 
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {type: 'audio/webm'})
        setAudioBlob(blob);
        setIsRecording(false);
        setIsProcessing(false);
      }

      setIsRecording(true);
      setIsProcessing(true);

      mediaRecorder.start()
    } catch (err) {
      setError(err);
      setIsRecording(false);
      setIsProcessing(false);
    }
  }, []);

  const stopRecording = useCallback(() => {
    // TODO: Stop MediaRecorder
    // TODO: Handle cleanup


  }, []);

  const resetRecording = useCallback(() => {
    // TODO: Reset all state
  }, []);

  const cleanup = useCallback(() => {
    // TODO: Stop all tracks and cleanup
  }, []);

  return {
    isRecording,
    audioBlob,
    error,
    isProcessing,
    startRecording,
    stopRecording,
    resetRecording,
    cleanup,
    setIsProcessing
  };
}