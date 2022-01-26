import React, { ChangeEvent } from 'react';
import AddButton from '../Buttons/AddButton';
import SaveButton from '../Buttons/SaveButton';
import RemoveButton from '../Buttons/RemoveButton';

type Props = {
    newQuestion: IQuestions,
    handleTitle: () => void,
    handleChangeAnswers: (e: ChangeEvent, index: number) => void,
    handleRadio: (index: number) => void,
    handleAdd: () => void
    handleRemove: (index: number) => void,
    handleSave: () => void,
}

const Form: React.FC<Props> = ({
  newQuestion,
  handleTitle,
  handleChangeAnswers,
  handleRadio,
  handleAdd,
  handleRemove,
  handleSave,
}) => {
  return (
    <>
      <div id="frm-create">
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={newQuestion.text}
            onChange={handleTitle}
          />
        </div>
        <div className="form-group">
          <label>Answers:</label>
          {newQuestion.answers.map((answer: string, index: number) => {
            return (
              <div className="answer" key={index}>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => handleChangeAnswers(e, index)}
                />
                <div onClick={() => handleRadio(index)}>
                  <input
                    name="correctAnswer"
                    type="radio"
                    id={`answer${index}`}
                    value={index}
                    defaultChecked={index === newQuestion.correctAnswer}
                  />
                  <label htmlFor={`answer${index}`}>correct</label>
                </div>
                <RemoveButton handleRemove={() => handleRemove(index)} />
              </div>
            );
          })}
          <AddButton handleAdd={handleAdd} />
        </div>
        <SaveButton handleSave={handleSave} />
      </div>
    </>
  );
};

export default Form;