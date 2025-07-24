import React, { useEffect, useState } from 'react';
import { fetchComments } from '../../services/api';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getComments = async () => {
            try {
                const data = await fetchComments(postId);
                setComments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getComments();
    }, [postId]);

    if (loading) return <p>Loading comments...</p>;
    if (error) return <p>Error loading comments: {error}</p>;

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>
                        <strong>{comment.author}</strong>: {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;