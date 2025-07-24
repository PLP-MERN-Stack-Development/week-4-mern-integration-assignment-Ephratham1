const express = require('express');
const { createComment, getComments, updateComment, deleteComment } = require('../controllers/commentController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Route to create a new comment
router.post('/:postId', authenticate, createComment);

// Route to get all comments for a specific post
router.get('/:postId', getComments);

// Route to update a specific comment
router.put('/:postId/:commentId', authenticate, updateComment);

// Route to delete a specific comment
router.delete('/:postId/:commentId', authenticate, deleteComment);

module.exports = router;