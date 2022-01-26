import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/Form';
import uesQuestions from '../../hooks/useQuestions';

export default function EditPage() {
  const {
    newQuestion,
    setNewQuestion,
    handleTitle,
    handleChangeAnswers,
    handleRadio,
    handleRemove,
    handleAdd,
  } = uesQuestions({
    text: '',
    answers: [],
    correctAnswer: null,
  });

  const url = 'https://61f11ea3072f86001749f030.mockapi.io/questions'

  const { id } = useParams();

  const navigate = useNavigate();
  
  const handleSave = () => {
    fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestion),
    });

    const { text, answers, correctAnswer } = newQuestion;

    if (!text || !answers || !correctAnswer.toString()) {
      alert('Invalid data!');
    } else {
      alert('Updated successfully');
      navigate('/');
    }
  };

  useEffect(() => {
    fetch(`${url}/${id}`).then((response) =>
      response.json().then((data) => setNewQuestion(data))
    );
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <main>
        <div className="container">
          <h1>Edit question</h1>
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