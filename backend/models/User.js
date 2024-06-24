const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    trailPeriod: {
      type: Number,
      default: 3, // 3 days
    },
    trailActive: {
      type: Boolean,
      default: true,
    },
    trailExpires: {
      type: Date,
    },
    subscriptionPlan: {
      type: String,
      enum: ["Trail", "Free", "Basic", "Premium"],
    },
    apiRequestCount: {
      type: Number,
      default: 0,
    },
    monthlyRequestCount: {
      type: Number,
      default: 100, // 100 credit // 3 days
    },
    nextBillingDate: Date,
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
      },
    ],
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "History",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// add virtual property
userSchema.virtual("isTrailActive").get(function () {
  return this.trailActive && new Date() < this.trailExpires;
});
//! Compile to form the model
const User = mongoose.model("User", userSchema);
module.exports = User;
