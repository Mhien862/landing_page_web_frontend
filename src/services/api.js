import axios from 'axios';

const API_BASE_URL = 'https://landing-page-backend-mhien862s-projects.vercel.app/api';

// Tạo instance axios với config mặc định
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để tự động thêm token vào headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor để xử lý lỗi
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token hết hạn hoặc không hợp lệ
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  getMe: () => apiClient.get('/auth/me'),
  createUser: (userData) => apiClient.post('/auth/create-user', userData),
  getUsers: () => apiClient.get('/auth/users'),
};

// Settings API
export const settingsAPI = {
  getHeroBanner: () => apiClient.get('/settings/hero-banner'),
  updateHeroBanner: (data) => apiClient.put('/settings/hero-banner', data),
  getAllSettings: () => apiClient.get('/settings'),
  getSetting: (key) => apiClient.get(`/settings/${key}`),
  updateSetting: (key, value) => apiClient.put(`/settings/${key}`, { value }),
};

// Contacts API
export const contactsAPI = {
  getContacts: (params) => apiClient.get('/contacts', { params }),
  getContactById: (id) => apiClient.get(`/contacts/${id}`),
  deleteContact: (id) => apiClient.delete(`/contacts/${id}`),
  updateContact: (id, data) => apiClient.put(`/contacts/${id}`, data),
};

// Articles API
export const articlesAPI = {
  // Admin routes (cần đăng nhập)
  getArticles: (params) => apiClient.get('/articles', { params }),
  getArticleById: (id) => apiClient.get(`/articles/${id}`),
  createArticle: (data) => apiClient.post('/articles', data),
  updateArticle: (id, data) => apiClient.put(`/articles/${id}`, data),
  deleteArticle: (id) => apiClient.delete(`/articles/${id}`),
  
  // Public routes (không cần đăng nhập)
  getPublishedArticles: (params) => apiClient.get('/articles/public', { params }),
  getPublishedArticleById: (id) => apiClient.get(`/articles/public/${id}`),
};

export default apiClient;