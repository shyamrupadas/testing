import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsItemType, TestQuestionsType } from '../types/types';

type QuestionsItemType = {
  question: TestQuestionsItemType
  quantity: number
  index: number
  currentQuestion: number
  setCurrentQuestion: Dispatch<SetStateAction<number>>
  finishTesting: () => void
};

export const QuestionsItem: React.FC<QuestionsItemType> = ({
                                                             question,
                                                             quantity,
                                                             index,
                                                             currentQuestion,
                                                             setCurrentQuestion,
                                                             finishTesting
                                                           }) => {
  const visibleStyle: CSSProperties = { display: 'none' };
  const visibleOn = () => {
    visibleStyle.display = 'block'
  };

  index === currentQuestion && visibleOn();

  const onButton = () => {
    quantity === index + 1 && finishTesting();
    setCurrentQuestion(prevState => prevState + 1)
  };

  return <div style={visibleStyle}>
    <div>
      {question.questionText}
    </div>
    <Button onClick={onButton}>Да</Button>
    <Button onClick={onButton}>Нет</Button>
    <div>
      Вопрос {index + 1} из {quantity}.
    </div>
  </div>
}