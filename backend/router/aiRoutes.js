const express = require('express');
const OpenAI = require('openai'); 
const router = express.Router();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

require('dotenv').config();
require('../db/conn');
const Post = require('../model/post');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/editor/aipage', async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('OpenAI Error:', error);

  const message =
    error?.response?.data?.error?.message ||
    error?.message ||
    'Something went wrong';

  res.status(error.status || 500).send(message);
  }
});

module.exports = router