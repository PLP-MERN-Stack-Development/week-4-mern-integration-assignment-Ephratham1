import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, getComments } from '../services/api';
import CommentList from '../components/Comments/CommentList';
import CommentForm from '../components/Comments/CommentForm';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const fetchedPost = await getPost(id);
                setPost(fetchedPost);
                const fetchedComments = await getComments(id);
                setComments(fetchedComments);
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

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <CommentForm postId={id} setComments={setComments} />
            <CommentList comments={comments} />
        </div>
    );
};

export default Post;