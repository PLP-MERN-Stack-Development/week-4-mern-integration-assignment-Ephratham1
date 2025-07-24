import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPost, updatePost, getPost } from '../services/api';

const PostForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            const fetchPost = async () => {
                const post = await getPost(id);
                setTitle(post.title);
                setContent(post.content);
            };
            fetchPost();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        try {
            if (isEditing) {
                await updatePost(id, formData);
            } else {
                await createPost(formData);
            }
            navigate('/');
        } catch (err) {
            setError('Failed to save the post. Please try again.');
        }
    };

    return (
        <div>
            <h2>{isEditing ? 'Edit Post' : 'Create Post'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit">{isEditing ? 'Update Post' : 'Create Post'}</button>
            </form>
        </div>
    );
};

export default PostForm;