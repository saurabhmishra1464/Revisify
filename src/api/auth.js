import axios from '../utils/axiosInstance';

export const registerUser = async (data) => {
    debugger
    try {
      const response = await axios.post('/Auth/Register', data);
      return response.data; // Return the actual data from the response
    } catch (error) {
      debugger
      throw new Error(error.response?.data?.message || 'Error occurred during registration');
    }
  };

  export const loginUser = async (data) => {
    try {
      const response = await axios.post('/Auth/login', data);
      return response.data; // Return the actual data from the response
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error occurred during login');
    }
  };
