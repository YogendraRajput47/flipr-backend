// server/routes/contactFormRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
} = require("../controllers/contactFormController");

router.get("/", getAllContacts);
router.post("/", createContact);

module.exports = router;
