import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejar errores globalmente
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance; 