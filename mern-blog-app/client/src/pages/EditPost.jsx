import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost } from '../services/api';
import PostForm from '../components/PostForm';

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const fetchedPost = await getPostById(id);
                setPost(fetchedPost);
            } catch (err) {
                setError('Failed to fetch post');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const handleUpdate = async (updatedPost) => {
        try {
            await updatePost(id, updatedPost);
            navigate(`/posts/${id}`);
        } catch (err) {
            setError('Failed to update post');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>Post not found</div>;

    return (
        <div>
            <h1>Edit Post</h1>
            <PostForm post={post} onSubmit={handleUpdate} />
        </div>
    );
};

export default EditPost;