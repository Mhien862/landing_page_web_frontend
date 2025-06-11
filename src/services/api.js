import axios from 'axios';

const apiClient = axios.create({
  // Thay thế bằng URL backend của bạn khi có
  baseURL: 'https://your-api-backend.com/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;