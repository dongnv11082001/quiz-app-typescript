import React from 'react';
import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';

type Props = {
    questions: IQuestions[],
    handleDelete: (id?: number) => void,
}

const Table: React.FC<Props>= ({ questions, handleDelete }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Answer</th>
          <th>Actions</th>
        </tr>

        {questions.map((question, index) => (
          <tr key={question.id}>
            <td>{index + 1}</td>
            <td>{question.text}</td>
            <td>{question.answers[question.correctAnswer]}</td>
            <td>
              <EditButton id={question.id} />
              <DeleteButton
                handleDelete={() => {
                  if (window.confirm('Do you want to delete this question?')) {
                    handleDelete(question.id);
                  }
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;