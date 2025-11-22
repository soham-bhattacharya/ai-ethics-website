import { NextRequest, NextResponse } from "next/server";
import { getGeminiClient } from "@/lib/gemini";
import { chapters } from "@/data/ebook-content";

export async function POST(request: NextRequest) {
  try {
    const { message, chapterId } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Get the chapter content for context
    const chapter = chapters.find((ch) => ch.id === chapterId);
    if (!chapter) {
      return NextResponse.json(
        { error: "Invalid chapter ID" },
        { status: 400 }
      );
    }

    // Prepare the system prompt with chapter context
    const systemPrompt = `You are a helpful Virtual Teaching Assistant (TA) for the "AI Ethics Playbook for SMBs" ebook. You are currently helping a student understand ${chapter.title}.

Here is the full content of this chapter:

${chapter.content}

Your role is to:
1. Answer questions about the chapter content clearly and concisely
2. Provide examples and explanations that build on the material
3. Help students understand key concepts, case studies, and actionable advice
4. Reference specific parts of the chapter when relevant
5. If asked about content from other chapters, politely explain you're focused on this chapter and suggest they select that chapter

Keep your responses focused, practical, and encouraging. Use examples from the chapter when possible.`;

    // Call Gemini API
    const client = getGeminiClient();
    
    // Construct the full prompt with context
    const fullPrompt = `${systemPrompt}

User Question: ${message}

Please provide a helpful, clear answer based on the chapter content above.`;

    const result = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt
    });

    // Extract the text from the response
    const response = result.candidates?.[0]?.content?.parts?.[0]?.text || 
                    result.text || 
                    "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    
    // Check if it's an API key error
    if (error instanceof Error && error.message?.includes("API_KEY")) {
      return NextResponse.json(
        { error: "Gemini API key not configured. Please set GEMINI_API_KEY in your environment variables." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 }
    );
  }
}

