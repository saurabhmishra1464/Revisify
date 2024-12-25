import axios from '../utils/axiosInstance';
import { handleApiResponse } from './handleApiResponse';

export const registerUser = async (data) => {
  return await handleApiResponse(() => axios.post('/Auth/Register', data));
};

export const loginUser = async (data) => {
  return await handleApiResponse(() => axios.post('/Auth/login', data));
};

export const verifyEmail = async ({token, email}) => {
  return await handleApiResponse(() =>  axios.get('/Auth/VerifyEmail', { params: { token, email } }));
};

export const sendConfirmationEmail = async (email) => {
  debugger
  return await handleApiResponse(() =>  axios.post('/Auth/SendConfirmationEmail',  {email} ));
};
