const asyncHandler = require("express-async-handler");
require("dotenv").config();
const axios = require("axios");
const User = require("../models/User");

//----openAI Controller----

const openAIController = asyncHandler(async (req, res) => {
  console.log(req.user);
  const { prompt } = req.body;

  // Check if the prompt is provided
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 10,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    // send the response
    const content = response?.data?.choices[0].text?.trim();
    // create the history
    const newContent = await ContentHistory.create({
      user: req?.user?._id,
      content,
    });
    // push the content into the user
    const userFound = await User.findById(req?.user?.id);
    userFound.history.push(newContent?._id);
    await userFound.save();
    res.status(200).json(content);

    // Send the response data to the client
    res.status(200).json(response.data);
  } catch (error) {
    // Log the error and send an error response to the client
    console.error(
      "Error from OpenAI API:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({
      error: "Failed to get response from OpenAI API",
      details: error.response ? error.response.data : error.message,
    });
  }
});

module.exports = {
  openAIController,
};
