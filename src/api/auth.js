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

export const fetchSubjects  = async () => {
  debugger
  var response =  await handleApiResponse(() =>  axios.get('/Auth/GetAllSubjects'));
  return response.data;
};

export const fetchQuestions = async (subjectId) => {
  const response = await handleApiResponse(() => axios.get(`/Auth/GetAllQuestions?subjectId=${subjectId}`)); // Replace with your API endpoint
  return response.data;
};

export const saveQuestion = async ({ file, subjectId }) => {
  debugger;
  return await handleApiResponse(() => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("subjectId", subjectId);

    return axios.post('/Auth/SaveQuestions', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  });
};
