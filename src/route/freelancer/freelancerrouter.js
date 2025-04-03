const express = require("express");
const router = express.Router();
const FreelancerController = require("./freelancercontroller");

router.post("/applyjob", FreelancerController.ApplyJob);

module.exports = router;
