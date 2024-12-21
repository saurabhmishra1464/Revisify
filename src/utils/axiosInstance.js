import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7064/api',
});

export default axiosInstance;
