# MERN-AI-ChatGPT-Content-Generator-App
A full-stack content generation web application built with the MERN stack and powered by OpenAI's GPT API. This project allows users to generate AI-based content like blog posts, emails, social media captions, and more—with support for user authentication, token-based usage, and subscription tiers.

🚀 Features
💬 AI-Powered Content Generation using OpenAI's GPT-3.5/4 API

🔐 User Authentication and account management

📜 Prompt History saved per user

⏳ Rate Limiting to control token usage

💸 Subscription System: Users can purchase token packs or subscribe to higher tiers

🕒 CRON Jobs for scheduled resets, tier updates, and billing cycles

📦 Responsive React Frontend with a smooth, clean UI

🧠 Backend built with Express for secure API handling

🛢️ MongoDB to manage users, prompts, and subscriptions



📸 Screenshots
Here you can showcase images of your project UI (add them as you upload)




🧰 Tech Stack
MongoDB

Express.js

React.js

Node.js

OpenAI API (GPT-3.5/4)

Tailwind CSS (or your preferred styling lib)

Mongoose

CRON jobs (node-cron or similar)

🔧 How It Works
Users sign up or log in to start generating content.

Each user has a token limit depending on their subscription.

Admin can define tiers with different token limits and pricing.

CRON jobs handle token resets, expiration, and user upgrades.

Users can see their usage, top prompts, and regenerate results.

