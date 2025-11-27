import { GoogleGenAI } from "@google/genai";
import { GeneratedCaption } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBusinessCaptions = async (businessName: string, businessType: string, mood: string): Promise<GeneratedCaption[]> => {
  try {
    const prompt = `
      Create 3 engaging Instagram captions for a local business in Nandurbar.
      Business Name: ${businessName}
      Type: ${businessType}
      Mood: ${mood}

      Context: "Nandurbar Diaries" helps promote local businesses. The captions should be catchy, use emojis, and relevant to the local Indian/Maharashtra market.
      
      Return the response STRICTLY as a JSON array of objects with "caption" (string) and "hashtags" (array of strings).
      Example format:
      [
        { "caption": "...", "hashtags": ["#Nandurbar", "#Foodie"] }
      ]
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) return [];

    const data = JSON.parse(text) as GeneratedCaption[];
    return data;
  } catch (error) {
    console.error("Error generating captions:", error);
    throw error;
  }
};
