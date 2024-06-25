const express = require("express");
const cookieParser = require("cookie-parser");
const cron = require("node-cron");
const cors = require("cors");
require("dotenv").config();
const usersRouter = require("./routes/usersRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
const openAIRouter = require("./routes/openAIRouter");
const stripeRouter = require("./routes/stripeRouter");
const User = require("./models/User");
require("./utils/connectDB")();

const app = express();
const PORT = process.env.PORT || 8090;

// Cron for the trail period : run every single day
cron.schedule("0 0 * * * *", async () => {
  try {
    // get the current date
    const today = new Date();
    await User.updateMany(
      {
        trailActive: true,
        trailExpires: { $lt: today },
      },
      {
        trailActive: false,
        subscriptionPlan: "Free",
        monthlyRequestCount: 5,
      }
    );
  } catch (error) {
    console.log(error);
  }
});

// Cron for the free period : run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
  try {
    // get the current date
    const today = new Date();
    await User.updateMany(
      {
        subscriptionPlan: "Free",
        nextBillingDate: { $lt: today },
      },
      {
        monthlyRequestCount: 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
});

// Cron for the Basic plan : run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
  try {
    // get the current date
    const today = new Date();
    await User.updateMany(
      {
        subscriptionPlan: "Basic",
        nextBillingDate: { $lt: today },
      },
      {
        monthlyRequestCount: 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
});

// Cron for the premium plan : run at the end of every month
cron.schedule("0 0 1 * * *", async () => {
  try {
    // get the current date
    const today = new Date();
    await User.updateMany(
      {
        subscriptionPlan: "Premium",
        nextBillingDate: { $lt: today },
      },
      {
        monthlyRequestCount: 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
});

// Cron paid plan
//-------middleware-----
app.use(express.json()); // pass incoming json or payload
app.use(cookieParser()); // pass the cookie automatically
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
//----Routes-----
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/openai", openAIRouter);
app.use("/api/v1/stripe", stripeRouter);

//-----Error handler middleware
app.use(errorHandler);

//! Start server
app.listen(PORT, console.log(`server is running on ${PORT}`));
