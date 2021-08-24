import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsItemType, TestQuestionsType } from '../types/types';

type QuestionsItemType = {
  question: TestQuestionsItemType
  quantity: number
  index: number
  currentQuestion: number
  setCurrentQuestion: Dispatch<SetStateAction<number>>
};

export const QuestionsItem: React.FC<QuestionsItemType> = ({
                                                             question,
                                                             quantity,
                                                             index,
                                                             currentQuestion,
                                                             setCurrentQuestion
                                                           }) => {
  const visibleStyle: CSSProperties = { display: 'none' };
  const visibleOn = () => {
    visibleStyle.display = 'block'
  };

  index === currentQuestion && visibleOn();

  const setNextQuestion = () => {
    setCurrentQuestion(prevState => prevState + 1)
  }

  return <div style={visibleStyle}>
    <div>
      {question.questionText}
    </div>
    <Button onClick={setNextQuestion}>Да</Button>
    <Button onClick={setNextQuestion}>Нет</Button>
    <div>
      Вопрос {index + 1} из {quantity}.
    </div>
  </div>
}