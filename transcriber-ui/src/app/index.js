import { createReadStream } from "fs";
import { AzureOpenAI } from "openai";

// You will need to set these environment variables or edit the following values
const audioFilePath = "<audio file path>";
const endpoint = process.env.AZURE_OPENAI_ENDPOINT || "Your endpoint";
const apiKey = process.env.AZURE_OPENAI_API_KEY || "Your API key";

// Required Azure OpenAI deployment name and API version
const apiVersion = "2024-08-01-preview";
const deploymentName = "whisper";

function getClient() {
  return new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment: deploymentName,
  });
}

export async function main() {
  console.log("== Transcribe Audio Sample ==");

  const client = getClient();
  const result = await client.audio.transcriptions.create({
    model: "",
    file: createReadStream(audioFilePath),
  });

  console.log(`Transcription: ${result.text}`);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});