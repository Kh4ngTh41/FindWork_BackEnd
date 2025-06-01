const express = require("express");
const router = express.Router();
const passport = require("passport");
const EmployerController = require("../controllers/EmployerController");

router.post("/register", EmployerController.createEmployer);
router.post("/login", EmployerController.login);
// Facebook authentication routes
router.get("/facebook", EmployerController.facebookLogin);
router.get("/facebook/callback", EmployerController.facebookCallback);

// Check authentication status
router.get("/status", EmployerController.checkAuthStatus);

// Logout route
router.get("/logout", EmployerController.logout);

// Salary suggestion route
router.post("/salary-suggestion", EmployerController.getSalarySuggestion);

// Get freelancers route
router.get("/GetFreelancers", EmployerController.getFreelancers);

// AI suggested freelancers route
router.post(
  "/ai-suggest-freelancers",
  EmployerController.getAISuggestedFreelancers,
);

module.exports = router;
