const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,

  skills: [String],
  streak: { type: Number, default: 0 },
  readiness: { type: Number, default: 0 },
  testsCompleted: { type: Number, default: 0 },

  skillScores: {
    coding: { type: Number, default: 0 },
    aptitude: { type: Number, default: 0 },
    core: { type: Number, default: 0 },
    soft: { type: Number, default: 0 }
  },

  dailyGoals: { type: Array, default: [] },
  weeklyActivity: { type: Array, default: [0,0,0,0,0,0,0] }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);