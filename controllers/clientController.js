const Client = require("../models/Client");

const createClient = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const image = req.file ? req.file.path : "";

    const newClient = new Client({ name, designation, description, image });
    await newClient.save();

    res.status(201).json(newClient);
  } catch (error) {
    console.error("Create client error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clients" });
  }
};

module.exports = {
  createClient,
  getAllClients,
};
