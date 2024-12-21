// src/components/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
<div className="welcome-page min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-6">
  <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-4">
    Welcome to <span className="text-white">Revisify</span>
  </h1>
  <p className="text-2xl text-center max-w-xl mb-6">
    We're glad to have you here. Revisify is the place to revise, learn, and grow! Get started and explore the amazing features we offer.
  </p>
  <div className="mt-8 flex justify-center items-center">
    <Link to="/revisify/auth/login" className="px-6 py-3 bg-white text-teal-600 rounded-full text-lg font-semibold hover:bg-teal-100 transition-all">
      Get Started
    </Link>
  </div>
</div>

  );
};

export default WelcomePage;
