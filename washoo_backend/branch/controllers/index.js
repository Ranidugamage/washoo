const Branch = require("../models");

exports.createBranch = async (req, res) => {
  const {
    userId,
    name,
    phone,
    img,
    street,
    postalCode,
    city,
    country,
    services,
  } = req.body;

  try {
    const newBranch = new Branch({
      userId,
      name,
      phone,
      img,
      street,
      postalCode,
      city,
      country,
      services,
    });

    const savedBranch = await newBranch.save();
    res.status(201).json(savedBranch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBranchByUserId = async (req, res) => {
  try {
    const branch = await Branch.find(req.body);
    if (branch) {
      res.status(200).json(branch);
    } else {
      res
        .status(404)
        .json({ message: `Branch with userId ${userId} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
