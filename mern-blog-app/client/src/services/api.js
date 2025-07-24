import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Posts
export const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await api.post('/posts', postData);
  return response.data;
};

export const updatePost = async (id, postData) => {
  const response = await api.put(`/posts/${id}`, postData);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};

// Categories
export const fetchCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const createCategory = async (categoryData) => {
  const response = await api.post('/categories', categoryData);
  return response.data;
};

// Authentication
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Comments
export const fetchCommentsByPostId = async (postId) => {
  const response = await api.get(`/posts/${postId}/comments`);
  return response.data;
};

export const createComment = async (postId, commentData) => {
  const response = await api.post(`/posts/${postId}/comments`, commentData);
  return response.data;
};