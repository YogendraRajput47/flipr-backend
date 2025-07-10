// server/models/Project.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
