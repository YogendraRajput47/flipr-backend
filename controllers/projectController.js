const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? req.file.path : "";

    const newProject = new Project({ name, description, image });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

module.exports = {
  createProject,
  getAllProjects,
};
