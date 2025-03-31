const express = require("express")
const router = express.Router();
const RegisterController = require('./registercontroller')

router.post('/employer',RegisterController.RegisterEmployer),
router.post('/freelancer',RegisterController.RegisterFreelancer),

module.exports = router