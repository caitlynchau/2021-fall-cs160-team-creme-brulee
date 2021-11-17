import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export const createUser = payload => api.post(`/user`, payload);
export const getAllUsers = () => api.get(`/users`);
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload);
export const deleteUserById = id => api.delete(`/user/${id}`);
export const getUserById = id => api.get(`/user/${id}`);

const apis = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUserById,
    getUserById,
};

export default apis;