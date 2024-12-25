import { useMutation } from '@tanstack/react-query';
import { loginUser, registerUser, sendConfirmationEmail, verifyEmail } from '../api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// export const useRegister = () => {
//     debugger
//     return useMutation(registerUser);
//   };

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data,variables) => {
      debugger
      // Success handler: Show success message in toast
      toast.success('Registration successful!');
      navigate('/revisify/auth/signupconfirmation', { state: { email: variables.email } });
      // You can perform other actions here, such as redirecting the user
    },
    onError: (error) => {
      debugger
      // Error handler: Show error message in toast
      toast.error(error.message || 'An error occurred during registration.');
    },
    onSettled: () => {
      // Optionally handle cleanup or additional logic when the mutation finishes
    },
  });
};

export const useLogin = () => {
  debugger
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      debugger
      // Success handler: Show success message in toast
      toast.success('Login successful!');
      // You can perform other actions here, such as redirecting the user
    },
    onError: (error) => {
      debugger
      // Error handler: Show error message in toast
      toast.error(error.message || 'An error occurred during registration.');
    },
    onSettled: () => {
      // Optionally handle cleanup or additional logic when the mutation finishes
    },
  });
};

export const useVerifyEmail = (token, email) => {
  return useMutation({
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      debugger
      // Success handler: Show success message in toast
      toast.success('Email Verification successful!');
      // You can perform other actions here, such as redirecting the user
    },
    onError: (error) => {
      debugger
      // Error handler: Show error message in toast
      toast.error(error.message || 'An error occurred during registration.');
    },
    onSettled: () => {
      // Optionally handle cleanup or additional logic when the mutation finishes
    },
  });
};

export const useSendConfirmationEmail = () => {
  debugger
  return useMutation({
    mutationFn: sendConfirmationEmail,
    onSuccess: () => {
      toast.success('Confirmation email sent successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'An error occurred while sending the confirmation email.');
    },
  });
};