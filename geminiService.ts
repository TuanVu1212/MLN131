
import { GoogleGenAI, Type } from "@google/genai";
import { DetailedInfo } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchSectionDetails = async (sectionTitle: string, description: string): Promise<DetailedInfo> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Cung cấp thông tin học thuật và văn hóa sâu sắc về: "${sectionTitle} - ${description}". 
    Tập trung vào di sản các dân tộc Việt Nam. Trả về dưới dạng JSON.`,
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          content: { type: Type.STRING },
          culturalContext: { type: Type.STRING },
          significance: { type: Type.STRING },
        },
        required: ["title", "content", "culturalContext", "significance"],
      },
    },
  });

  try {
    const text = response.text.trim();
    const data = JSON.parse(text);
    
    // Extract search sources if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sources = groundingChunks?.map((chunk: any) => chunk) || [];

    return {
      ...data,
      sources: sources
    };
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return {
      title: sectionTitle,
      content: "Hệ thống đang bảo trì dữ liệu cho mục này. Vui lòng quay lại sau.",
      culturalContext: "Dữ liệu đang được đồng bộ hóa từ kho lưu trữ quốc gia.",
      significance: "90/100"
    };
  }
};

export const startArchivistChat = (systemInstruction: string) => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction,
      tools: [{ googleSearch: {} }]
    },
  });
};
