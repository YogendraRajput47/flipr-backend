const express = require("express");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const router = express.Router();

router.post("/create-admin", async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const admin = await Admin.create({ email, password: hashed });
  res.status(201).json({ message: "Admin created", admin });
});

module.exports = router;
