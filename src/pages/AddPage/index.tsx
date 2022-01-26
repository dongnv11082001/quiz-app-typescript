import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Form from '../../components/Form';
import useQuestions from '../../hooks/useQuestions';

export default function AddPage() {
    const {
        newQuestion,
        setNewQuestion,
        handleTitle,
        handleChangeAnswers,
        handleRadio,
        handleRemove,
        handleAdd,
      } = useQuestions({
        text: '',
        answers: [],
        correctAnswer: null,
      });

      const url = 'https://61f11ea3072f86001749f030.mockapi.io/questions'
    
      const navigate = useNavigate();
    
      const handleSave = () => {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newQuestion),
        });
    
        setNewQuestion(newQuestion)
    
        const { text, answers, correctAnswer } = newQuestion;
    
        if (!text || !answers || !correctAnswer.toString()) {
          alert('Invalid data!');
        } else {
          alert('Added successfully');
          navigate('/');
        }
      };
      return (
        <>
          <main>
            <div className="container">
              <h1>New question</h1>
              <Form
                newQuestion={newQuestion}
                handleChangeAnswers={handleChangeAnswers}
                handleRadio={handleRadio}
                handleRemove={handleRemove}
                handleSave={handleSave}
                handleTitle={handleTitle}
                handleAdd={handleAdd}
              />
            </div>
          </main>
        </>
      );
}
