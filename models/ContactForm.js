// server/models/ContactForm.js
const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    mobile: String,
    city: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactForm", contactFormSchema);
