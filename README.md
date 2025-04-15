# MERN-AI-ChatGPT-Content-Generator-App
A full-stack content generation web application built with the MERN stack and powered by OpenAI's GPT API. This project allows users to generate AI-based content like blog posts, emails, social media captions, and more—with support for user authentication, token-based usage, and subscription tiers.

# 🚀 Features 
💬 AI-Powered Content Generation using OpenAI's GPT-3.5/4 API

🔐 User Authentication and account management

📜 Prompt History saved per user

⏳ Rate Limiting to control token usage

💸 Subscription System: Users can purchase token packs or subscribe to higher tiers

🕒 CRON Jobs for scheduled resets, tier updates, and billing cycles

📦 Responsive React Frontend with a smooth, clean UI

🧠 Backend built with Express for secure API handling

🛢️ MongoDB to manage users, prompts, and subscriptions



# 📸 Screenshots
![Image](https://github.com/user-attachments/assets/7d0f1783-76bb-4657-bb3b-8562c600cfdf)

![Image](https://github.com/user-attachments/assets/906ebf18-8f40-4327-8716-e3083a0d3e96)

![Image](https://github.com/user-attachments/assets/07a7b570-34a0-4b42-bc64-7587384f2d66)

![Image](https://github.com/user-attachments/assets/d37052d4-3f8f-41dd-a67d-9ad3b794f415)

![Image](https://github.com/user-attachments/assets/24da96c0-f998-496a-8231-e77c1f673449)

![Image](https://github.com/user-attachments/assets/eff2387c-05e8-4a2c-bf52-29d2e1594549)


# 🧰 Tech Stack
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

