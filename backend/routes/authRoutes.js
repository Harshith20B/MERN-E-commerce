const express = require('express');
const { signup, verifyOTP, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);  // Signup route
router.post('/verify-otp', verifyOTP); // OTP verification route
router.post('/login', login);  // Login route

module.exports = router;
