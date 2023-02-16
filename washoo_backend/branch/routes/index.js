const express = require("express");
const BranchController = require("../controllers");

const router = express.Router();

router.post("/create-branch", BranchController.createBranch);
router.get("/get-all-branch", BranchController.getAllBranches);
router.get("/get-branch-by-user-id", BranchController.getBranchByUserId);

module.exports = router;
