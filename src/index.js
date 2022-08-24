import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from './Components/Quiz'
import { QuizProvider } from './Contexts/quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QuizProvider>
    <Quiz/>
    </QuizProvider>
  </React.StrictMode>
);

