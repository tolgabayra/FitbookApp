const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    star: { type: Number},
    user_id: {type: Number}
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", RecipeSchema);