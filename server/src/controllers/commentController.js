// commentController.js

import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

// Create a new comment
export const createComment = async (req, res) => {
    const { postId } = req.params;
    const { text } = req.body;

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const comment = new Comment({
            text,
            post: postId,
            user: req.user.id, // Assuming user ID is stored in req.user
        });

        await comment.save();
        post.comments.push(comment._id);
        await post.save();

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all comments for a specific post
export const getComments = async (req, res) => {
    const { postId } = req.params;

    try {
        const comments = await Comment.find({ post: postId }).populate('user', 'username');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a comment
export const updateComment = async (req, res) => {
    const { commentId } = req.params;
    const { text } = req.body;

    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Check if the user is the owner of the comment
        if (comment.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        comment.text = text;
        await comment.save();

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a comment
export const deleteComment = async (req, res) => {
    const { commentId } = req.params;

    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Check if the user is the owner of the comment
        if (comment.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        await comment.remove();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};