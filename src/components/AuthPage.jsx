import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AuthPage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleAuthToggle = () => {
    // Toggle between login and sign-up pages
    setIsLogin(!isLogin);
    navigate(isLogin ? '/auth/signup' : '/auth/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-teal-600 mb-8">{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">Full Name</label>
              <input type="text" id="fullname" placeholder="Enter your full name" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:outline-none" />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:outline-none" />
          </div>

          <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition duration-300">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
             onClick={handleAuthToggle}
            className="text-teal-600 font-semibold cursor-pointer hover:text-teal-700"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>

        <p className="mt-4 text-center text-sm text-gray-600">
          <Link to="/" className="text-teal-600 font-semibold hover:text-teal-700">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
