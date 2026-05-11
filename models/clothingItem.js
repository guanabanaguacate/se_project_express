const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 30 },
  weather: {
    type: String,
    required: true,
    enum: ["hot", "warm", "cold"],
  },

  imageUrl: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("item", clothingItemSchema);
