const express = require("express");
const router = express.Router();
const EmployerController = require("./employercontroller");

router.post("/postjob", EmployerController.PostJob);

module.exports = router;
