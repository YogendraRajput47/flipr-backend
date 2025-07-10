const express = require("express");
const router = express.Router();
const upload = require("../utils/multer"); // ✅ Same Cloudinary config

const {
  createClient,
  getAllClients,
} = require("../controllers/clientController");

// POST with image upload
router.post("/", upload.single("image"), createClient);
router.get("/", getAllClients);

module.exports = router;
