import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import WelcomePage from './components/WelcomePage';
const LoginPage = React.lazy(() => import('./components/AuthPage'));
// const SignupPage = React.lazy(() => import('./pages/SignupPage'));
// const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
// const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/login" element={<AuthPage isLogin={true} />} />
        <Route path="/auth/signup" element={<AuthPage isLogin={false} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
