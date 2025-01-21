import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import WelcomePage from './components/WelcomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const LoginPage = React.lazy(() => import('./components/AuthPage'));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyEmail from './components/VerifyEmail';
import SignupConfirmation from './components/SignupConfirmation';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PracticeSessions from './components/PracticeSessions';
import ManagePracticeSessions from './components/ManagePracticeSessions';
import QuizPage from './components/QuizPage';
import QuestionList from './components/QuestionList';
// const SignupPage = React.lazy(() => import('./pages/SignupPage'));
// const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
// const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/revisify/auth/login" element={<AuthPage isLogin={true} />} />
        <Route path="/revisify/auth/signup" element={<AuthPage isLogin={false} />} />
        <Route path='/revisify/auth/verifyEmail' element={<VerifyEmail />} />
        <Route path='/revisify/userdashboard' element={<UserDashboard />} />
        <Route path='/revisify/admindashboard' element={<AdminDashboard />} />
        <Route path='/revisify/auth/signupconfirmation' element={<SignupConfirmation />} />
        <Route path='/revisify/userdashboard/practice-sessions' element={<PracticeSessions />} />
        <Route path='/revisify/admindashboard/manage-practice-sessions' element={<ManagePracticeSessions />} />
        <Route path='/revisify/userdashboard/quizpage' element={<QuizPage />} />
        <Route path='/revisify/admindashboard/question-list' element={<QuestionList/>} />
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Router>
    </QueryClientProvider>
  );
}

export default App;
