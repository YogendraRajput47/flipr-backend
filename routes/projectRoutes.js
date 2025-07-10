const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const {
  createProject,
  getAllProjects,
} = require("../controllers/projectController");

router.post("/", upload.single("image"), createProject);
router.get("/", getAllProjects);

module.exports = router;
