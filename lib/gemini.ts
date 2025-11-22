import { GoogleGenAI } from "@google/genai";

let genAI: GoogleGenAI | null = null;

export function getGeminiClient() {
  if (!genAI) {
    // Check for conflicting API keys
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    if (googleApiKey && geminiApiKey) {
      console.warn(
        "⚠️  WARNING: Both GOOGLE_API_KEY and GEMINI_API_KEY are set.\n" +
        "The @google/genai SDK will prefer GOOGLE_API_KEY.\n" +
        "Please remove GOOGLE_API_KEY from your .env.local file to avoid conflicts."
      );
    }
    
    // Use GEMINI_API_KEY preferentially
    const apiKey = geminiApiKey;
    
    if (!apiKey) {
      throw new Error(
        "GEMINI_API_KEY not found in environment variables.\n" +
        "Please add GEMINI_API_KEY to your .env.local file.\n" +
        "Get your key from: https://aistudio.google.com/app/apikey"
      );
    }
    
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
}

