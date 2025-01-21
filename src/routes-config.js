const routes = {
    home: '/',
    login: '/revisify/auth/login',
    signup: '/revisify/auth/signup',
    verifyemail: '/revisify/auth/verifyEmail',
    userdashboard: '/revisify/userdashboard',
    admindashboard: '/revisify/admindashboard',
    practicesessions: '/revisify/userdashboard/practice-sessions',
    managepracticesessions: '/revisify/admindashboard/manage-practice-sessions',
    questionlist: '/revisify/admindashboard/question-list',
    quizpage: '/revisify/userdashboard/quizpage',
    profile: '/revisify/profile/:id', // Dynamic route
    signupconfirmation : '/revisify/auth/signupconfirmation',
  };

  export default routes;