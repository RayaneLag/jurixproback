const GEMINI_API_KEY = "AIzaSyCHtuie5i-4o0eoZgmqN89qGfTuSpk5Iwk";
import axios from "axios";

export const getAIResponse = async (input) => {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDjdyO7Y6QUwWox5kJ3G_RuEFaYNWcGy2Y",

      {
        contents: input,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API Gemini:", error);
    throw error;
  }
};
