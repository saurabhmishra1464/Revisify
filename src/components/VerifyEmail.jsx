import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useVerifyEmail } from '../hooks/useAuth';
import { toast } from 'react-toastify';

export default function VerifyEmail() {
  const [status, setStatus] = useState('pending'); // pending, success, error

  debugger
      // setStatus('loading');
      const token = new URLSearchParams(window.location.search).get('token');
      const email = new URLSearchParams(window.location.search).get('email');
      
    //   if (response.ok) {
    //     setStatus('success');
    //     setTimeout(() => {
    //       window.location.href = '/login';
    //     }, 2000);
    //   } else {
    //     setStatus('error');
    //   }
    // } catch (error) {
    //   console.error('Verification error:', error);
    //   setStatus('error');
    // }
    const { mutate: confirmemail } = useVerifyEmail(); 
    const onSubmit = async (data) => {
      try {
        
          await confirmemail({token, email});
       
      } catch (error) {
        debugger
        // Handle error here, for example:
        toast.error(error?.message || 'Something went wrong');
      }
    };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md transform transition-all">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Verify Your Email
          </h2>
          
          <div className="space-y-4">
            {status === 'pending' && (
              <button 
                onClick={onSubmit}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold 
                         hover:from-teal-600 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200 
                         shadow-lg hover:shadow-xl"
              >
                Verify Email
              </button>
            )}

            {status === 'loading' && (
              <div className="flex items-center justify-center space-x-2 py-3">
                <Loader className="animate-spin text-teal-600" size={24} />
                <span className="text-gray-600 font-medium">Verifying...</span>
              </div>
            )}

            {status === 'success' && (
              <div className="flex flex-col items-center space-y-3 py-3">
                <CheckCircle className="text-green-500" size={48} />
                <p className="text-green-600 font-medium">Email verified successfully!</p>
                <p className="text-gray-500 text-sm">Redirecting to login...</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center space-y-3 py-3">
                <AlertCircle className="text-red-500" size={48} />
                <p className="text-red-600 font-medium">Verification failed</p>
                <button 
                  onClick={onSubmit}
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          <a 
            href="/" 
            className="inline-block text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}