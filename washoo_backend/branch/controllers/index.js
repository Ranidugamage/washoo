
const Branch = require('../models');

const createBranch = async (req, res) => {
  try {
    const newBranch = new Branch(req.body);
    const savedBranch = await newBranch.save();
    res.status(201).json(savedBranch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateBranch = async (req, res) => {
  try {
    const updatedBranch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedBranch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteBranch = async (req, res) => {
  try {
    const deletedBranch = await Branch.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBranch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBranchByUserId = async (req, res) => {
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

module.exports = { createBranch, updateBranch, deleteBranch, getAllBranches, getBranchByUserId };