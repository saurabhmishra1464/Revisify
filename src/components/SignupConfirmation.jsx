import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSendConfirmationEmail } from "../hooks/useAuth";

const SignupConfirmation = () => {
  const location = useLocation();
  const email = location.state?.email;
  const { mutate: resendEmail } = useSendConfirmationEmail();

  const handleResendClick = (event) => {
    event.preventDefault(); // Replace with the actual email
    resendEmail(email);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col items-center justify-center px-4">
      {/* Container */}
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mt-6">
          Thank You for Signing Up!
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-center mt-4">
          Please check your email inbox to verify your account. Once verified,
          you can log in and start using Revisify.
        </p>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <Link
            to="/revisify/auth/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md inline-block shadow-sm transition duration-300"
          >
            Go to Login
          </Link>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-white text-sm">
        Didn’t receive the email?{" "}
        <a
          href="/resend-verification" onClick={handleResendClick}
          className="text-white hover:underline font-medium"
        >
          Resend
        </a>
      </p>
    </div>
  );
};

export default SignupConfirmation;
