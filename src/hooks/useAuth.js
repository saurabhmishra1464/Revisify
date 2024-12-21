import { useMutation } from '@tanstack/react-query';
import { loginUser, registerUser } from '../api/auth';

// export const useRegister = () => {
//     debugger
//     return useMutation(registerUser);
//   };

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser
  });
};
