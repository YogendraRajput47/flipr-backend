// server/controllers/contactFormController.js
const ContactForm = require("../models/ContactForm");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactForm.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact forms" });
  }
};

exports.createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const newContact = new ContactForm({ fullName, email, mobile, city });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Error creating contact form" });
  }
};
