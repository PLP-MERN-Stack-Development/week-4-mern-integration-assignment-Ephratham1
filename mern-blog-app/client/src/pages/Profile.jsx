import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getUserProfile, getUserPosts } from '../services/api';
import PostList from '../components/PostList';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const userPosts = await getUserPosts(user.id);
                setPosts(userPosts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserPosts();
    }, [user.id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <h2>Your Posts</h2>
            <PostList posts={posts} />
        </div>
    );
};

export default Profile;