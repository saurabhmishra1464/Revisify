import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';  // Required for integrating Zod with react-hook-form
import * as z from 'zod';
import { AuthFormSchema } from '../utils/schema/AuthFormSchema';
import { useLogin, useRegister } from '../hooks/useAuth';

const AuthPage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AuthFormSchema),
  });

  const { mutate: login, error: loginError } = useLogin();
  const { mutate: registerUser, error: registerError } = useRegister();

  const handleAuthToggle = () => {
    // Toggle between login and sign-up pages
    setIsLogin(!isLogin);
    navigate(isLogin ? '/revisify/auth/signup' : '/revisify/auth/login');
  };

  const onSubmit = async (data) => {
    debugger
    if (isLogin) {
      await login(data);
    } else {
     await registerUser(data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 w-full max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-teal-600 mb-6 sm:mb-8">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
  
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name field (only for Sign Up) */}
          {!isLogin && (
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
                {...register('fullname')}
              />
              {errors.fullname && (
                <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                  {errors.fullname.message?.toString()}
                </span>
              )}
            </div>
          )}
  
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register('email')}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
            />
            {errors.email && (
              <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                {errors.email.message?.toString()}
              </span>
            )}
          </div>
  
          {/* Password field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register('password')}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
            />
            {errors.password && (
              <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                {errors.password.message?.toString()}
              </span>
            )}
          </div>
  
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-teal-600 text-white py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-teal-700 transition duration-300 active:scale-95"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
  
          {/* Auth Toggle */}
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              onClick={handleAuthToggle}
              className="text-teal-600 font-semibold cursor-pointer hover:text-teal-700"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
  
          {/* Back to Home Link */}
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-2">
            <Link 
              to="/" 
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              Back to Home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
