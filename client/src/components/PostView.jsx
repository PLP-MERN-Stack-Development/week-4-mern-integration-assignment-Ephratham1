import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';
import CommentList from './Comments/CommentList';
import CommentForm from './Comments/CommentForm';

const PostView = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostById(id);
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Post not found.</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.imageUrl} alt={post.title} />
            <p>{post.content}</p>
            <CommentForm postId={post._id} />
            <CommentList postId={post._id} />
        </div>
    );
};

export default PostView;