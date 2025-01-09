import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProducts = async (offset = 0, limit = 12) => {
  const response = await api.get(`/products?offset=${offset}&limit=${limit}`);
  return response.data;
};

export const getProduct = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const data = {
    ...userData,
    avatar: 'https://api.lorem.space/image/face?w=640&h=480',
  };
  const response = await api.post('/users', data);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/auth/profile');
  return response.data;
};

export default api;