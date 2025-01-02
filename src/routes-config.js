const routes = {
    home: '/',
    login: '/revisify/auth/login',
    signup: '/revisify/auth/signup',
    verifyemail: '/revisify/auth/verifyEmail',
    userdashboard: '/revisify/userdashboard',
    admindashboard: '/revisify/admindashboard',
    practicesessions: '/revisify/practice-sessions',
    profile: '/revisify/profile/:id', // Dynamic route
    signupconfirmation : '/revisify/auth/signupconfirmation',
  };

  export default routes;