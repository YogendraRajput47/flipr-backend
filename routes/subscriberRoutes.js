// server/routes/subscriberRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllSubscribers,
  createSubscriber,
} = require("../controllers/subscriberController");

router.get("/", getAllSubscribers);
router.post("/", createSubscriber);

module.exports = router;
