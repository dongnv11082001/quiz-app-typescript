import { useState } from 'react';

// type Props = { 
//     text: string,
//     answers: string[],
//     correctAnswer: number
// }

const useQuestions = ({ text, answers, correctAnswer }) => {
  const [newQuestion, setNewQuestion] = useState({
    text,
    answers,
    correctAnswer,
  });

  const handleTitle = (e) => {
    setNewQuestion({
      ...newQuestion,
      text: e.target.value,
    });
  };

  const handleAdd = () => {
    setNewQuestion({
      ...newQuestion,
      answers: [...newQuestion.answers, ''],
    });
  };

  const handleRemove = (index) => {
    setNewQuestion({
      ...newQuestion,
      answers: newQuestion.answers.filter((id) => id !== index),
    });
  };

  const handleChangeAnswers = (e, index) => {
    const newAnswers = newQuestion.answers;
    newAnswers[index] = e.target.value;
    setNewQuestion({
      ...newQuestion,
      answers: newAnswers,
    });
  };

  const handleRadio = (index) => {
    setNewQuestion({
      ...newQuestion,
      correctAnswer: index,
    });
  };

  return {
    newQuestion,
    setNewQuestion,
    handleTitle,
    handleChangeAnswers,
    handleRadio,
    handleRemove,
    handleAdd,
  };
};

export default useQuestions;