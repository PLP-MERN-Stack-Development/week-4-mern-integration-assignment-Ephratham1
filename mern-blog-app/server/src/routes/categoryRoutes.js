const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
router.get('/', getCategories);

// @route   POST /api/categories
// @desc    Create a new category
// @access  Private
router.post('/', authenticate, createCategory);

module.exports = router;