import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback to empty array if questions are missing
  const { state } = location;
  const questions = state?.questions || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Redirect back to setup page if no questions are passed
  useEffect(() => {
    if (!state || !state.questions) {
      alert('No questions found. Please set up your quiz again.');
      navigate('/revisify/userdashboard/practice-sessions');
    }
  }, [state, navigate]);

  const handleAnswer = (selectedOption) => {
    setAnswers([...answers, { questionId: questions[currentQuestionIndex].id, selectedOption }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Quiz completed!');
      // Submit answers to the backend if needed
    }
  };

  if (questions.length === 0) {
    return null; // Render nothing while redirecting
  }

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <p>{questions[currentQuestionIndex].questionText}</p>
      <div>
        <button onClick={() => handleAnswer('A')}>{questions[currentQuestionIndex].optionA}</button>
        <button onClick={() => handleAnswer('B')}>{questions[currentQuestionIndex].optionB}</button>
        <button onClick={() => handleAnswer('C')}>{questions[currentQuestionIndex].optionC}</button>
        <button onClick={() => handleAnswer('D')}>{questions[currentQuestionIndex].optionD}</button>
      </div>
    </div>
  );
};

export default QuizPage;
