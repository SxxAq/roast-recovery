import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

export async function generateResponse(critique: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are a witty and sarcastic assistant helping people recover from roasts. Provide a short, clever comeback to the following critique: "${critique}"`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text() || "Sorry, I'm too burnt out to respond.";
  } catch (error) {
    console.error("Error generating response:", error);
    return "My wit got roasted. Try again!";
  }
}
