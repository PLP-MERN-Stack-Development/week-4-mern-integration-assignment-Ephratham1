import React, { useState } from 'react';
import { useApi } from '../../hooks/useApi';

const CommentForm = ({ postId, onCommentAdded }) => {
    const [content, setContent] = useState('');
    const { post } = useApi();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content) return;

        try {
            const newComment = await post(`/api/comments`, { postId, content });
            onCommentAdded(newComment);
            setContent('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Add a comment..."
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;