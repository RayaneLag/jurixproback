import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCHtuie5i-4o0eoZgmqN89qGfTuSpk5Iwk";

async function run() {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = await genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.7,
      topK: 40,
      topP: 0.9,
      maxOutputTokens: 1000,
    };

    const safetySettings = [];

    // Réception de la question utilisateur
    const userInput =
      "j'ai un problème dans mon divorce, quelles sont les lois qui parlent de ça ?";

    // Définir le prompt du chatbot de manière à être plus précis et fournir une réponse organisée
    const prompt = `Vous êtes un assistant juridique qui fournit des informations basées sur le droit algérien.

Question de l'utilisateur: "${userInput}"

Réponse : Voici les différents articles qui traitent de votre cas :

- Article XX du code de la famille : [Description de l'article]
- Article YY du code civil : [Description de l'article]

Merci de noter que les informations ci-dessus sont basées sur les textes de lois algériens.`;

    const parts = [{ text: prompt }];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });

    const response = result.candidates[0].output;
    const organizedResponse = formatResponse(response);
    console.log(organizedResponse);
  } catch (error) {
    console.error("Erreur lors de la génération de la réponse :", error);
  }
}

// Fonction pour formater la réponse de l'IA de manière à ce qu'elle soit claire pour l'utilisateur
function formatResponse(responseText) {
  const formattedResponse = responseText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n\n");

  return formattedResponse;
}

run();

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// const MODEL_NAME = "gemini-1.0-pro";
// const API_KEY = "AIzaSyCHtuie5i-4o0eoZgmqN89qGfTuSpk5Iwk";

// async function run() {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 0.9,
//     topK: 0,
//     topP: 1,
//     maxOutputTokens: 8192,
//   };

//   const safetySettings = [];

//   const parts = [
//     { text: "input: j ai un probleme avec mon employeur il veut me renvoyer " },
//   ];

//   const result = await model.generateContent({
//     contents: [{ role: "user", parts }],
//     generationConfig,
//     safetySettings,
//   });

//   const response = result.response;
//   console.log(response.text());
// }

// run();
