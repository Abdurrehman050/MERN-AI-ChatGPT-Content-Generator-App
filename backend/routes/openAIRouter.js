const express = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");
const { openAIController } = require("../controllers/openAIController");

const openAIRouter = express.Router();

// Temporarily remove isAuthenticated to debug if it's causing issues
openAIRouter.post("/generate-content", openAIController);

module.exports = openAIRouter;
