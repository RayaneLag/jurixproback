import express from "express";
import { getAIResponse } from "../controllers/AI.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const userInput = req.body.input;
  console.log(req.body.input, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  try {
    const aiResponse = await getAIResponse(userInput);
    console.log(aiResponse, "aiResponse");
    res.json({ response: aiResponse });
  } catch (error) {
    console.log(error, "error");
    res
      .status(500)
      .json({ error: "Erreur lors de la communication avec l'API Gemini." });
  }
});

export default router;
