import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const createUser = payload => api.post(`/userapi/user`, payload);
export const authenticateUser = payload => {
    return api.post(`/userapi/user/${payload.signInUser}`, payload);
}
export const getAllUsers = () => api.get(`/userapi/users`);
export const updateUser = (id, payload) => api.put(`/userapi/user/${id}`, payload);
export const deleteUserById = id => api.delete(`/userapi/user/${id}`);
export const getUserById = username => api.get(`/userapi/user/${username}`);
export const createPost = payload => api.post(`/postapi/post`, payload);
export const getAllPosts = () => api.get(`/postapi/posts`);
export const updatePost = (id, payload) => api.put(`/postapi/post/${id}`, payload);
export const deletePostById = id => api.delete(`/postapi/post/${id}`);
export const getPostsByUser = id => api.get(`/postapi/post/${id}`);

const apis = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUserById,
  getUserById,
  authenticateUser,
  createPost,
  getAllPosts,
  updatePost,
  deletePostById,
  getPostsByUser
};

export default apis;