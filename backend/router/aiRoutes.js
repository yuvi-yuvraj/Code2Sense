const express = require('express');
const { GoogleGenAI } = require('@google/genai'); 
const router = express.Router();

require('dotenv').config();
require('../db/conn');
const Post = require('../model/post'); 

const ai = new GoogleGenAI({});

router.post('/editor/aipage', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Use an Imagen model for image generation
    const aiResponse = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002', // Use Imagen for image generation
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg', // Example output format
        aspectRatio: '1:1', // Equivalent to 1024x1024
      }
    });

    // The generated image data is in aiResponse.generatedImages[0].image.imageBytes
    const image = aiResponse.generatedImages[0].image.imageBytes; // This is a base64 string

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('Imagen API Error:', error);

    const message =
      error?.message ||
      'Something went wrong with the Imagen API';

    res.status(500).send(message);
  }
});

module.exports = router;