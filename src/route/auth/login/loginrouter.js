const express = require("express");
const router = express.Router();
const LoginController = require("./logincontroller");

router.post("/employer", LoginController.EmployerLogin);

router.post("/freelancer", LoginController.FreelancerLogin);
module.exports = router;

