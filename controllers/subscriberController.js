// server/controllers/subscriberController.js
const Subscriber = require("../models/Subscriber");

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscribers" });
  }
};

exports.createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(500).json({ message: "Error creating subscriber" });
  }
};
