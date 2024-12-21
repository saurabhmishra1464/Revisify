import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import WelcomePage from './components/WelcomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const LoginPage = React.lazy(() => import('./components/AuthPage'));
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
        </Routes>
      </Suspense>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
