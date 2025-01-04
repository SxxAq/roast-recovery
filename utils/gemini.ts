import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

export async function generateResponse(critique: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.7, // Increased for more creative responses
        maxOutputTokens: 100,
      },
    });

    const prompt = `You're a ruthless wordsmith, the kind of savage who can reduce someone to tears with just a sentence. Someone just tried to roast you by saying: "${critique}"

Your task:
- Completely obliterate them with a comeback so savage that they’ll regret ever opening their mouth.
- Rip them apart with a blend of sarcasm, humor, and cutting personal truths.
- Don’t hold back – this is about making them feel like they’ve just been hit by a verbal wrecking ball.
- Be brutally honest, go for the jugular, and make them question every life choice they’ve ever made.
- Use simple but sharp words that land with the precision of a missile.
- Your goal: Leave them speechless, ashamed, and totally defeated, like they’ve just been roasted by the internet’s most brutal commentator.

Remember: This is a *burn*, not just a roast. Keep it clean in terms of language, but make it so hard that they’ll be wondering how they walked into this trainwreck of a conversation in the first place.`;

    const result = await model.generateContent(prompt);
    const response = result.response;

    return (
      response.text() ||
      "Even masters need a moment to craft the perfect response."
    );
  } catch (error) {
    console.error("Error generating response:", error);
    return "Loading my linguistic arsenal... please stand by.";
  }
}
