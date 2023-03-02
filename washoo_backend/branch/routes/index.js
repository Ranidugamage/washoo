const express = require("express");
const {
    createBranch,
    updateBranch,
    deleteBranch,
    getAllBranches, 
    getBranchByUserId

  } = require("../controllers");

const router = express.Router();

router.post("/create-branch", createBranch);
router.get("/get-all-branch", getAllBranches);
router.post("/get-branch-by-user-id", getBranchByUserId);
router.put("/updateBranch",updateBranch)

module.exports = router;
