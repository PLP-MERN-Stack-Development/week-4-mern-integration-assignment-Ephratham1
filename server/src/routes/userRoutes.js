const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @desc Register a new user
// @route POST /api/users/register
router.post('/register', registerUser);

// @desc Login a user
// @route POST /api/users/login
router.post('/login', loginUser);

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
router.get('/profile', protect, getUserProfile);

module.exports = router;