import React, { CSSProperties, Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsItemType, TestQuestionsType, TestResultsType } from '../types/types';

type QuestionsItemType = {
  question: TestQuestionsItemType
  quantity: number
  index: number
  currentQuestion: number
  setCurrentQuestion: Dispatch<SetStateAction<number>>
  finishTesting: () => void
  testResults: TestResultsType
  saveResult: (result: TestResultsType) => void
};

export const QuestionsItem: React.FC<QuestionsItemType> = ({
                                                             question,
                                                             quantity,
                                                             index,
                                                             currentQuestion,
                                                             setCurrentQuestion,
                                                             finishTesting,
                                                             testResults,
                                                             saveResult
                                                           }) => {
  const visibleStyle: CSSProperties = { display: 'none' };
  const visibleOn = () => {
    visibleStyle.display = 'block'
  };

  const currentQuestionStorage: number = JSON.parse(localStorage.getItem('testResults') as string).length
  index === currentQuestionStorage && visibleOn();

  const onButton = (e: any) => {
    quantity === index + 1 && finishTesting();

    setCurrentQuestion(prevState => prevState + 1)
    testResults.push({id: index + 1, questionResult: e.target.innerText});
    localStorage.setItem('testResults', JSON.stringify(testResults));
  };

  return <div style={visibleStyle}>
    <div>
      {question.questionText}
    </div>
    <Button onClick={(e) => onButton(e)}>Да</Button>
    <Button onClick={(e) => onButton(e)}>Нет</Button>
    <div>
      Вопрос {index + 1} из {quantity}.
    </div>
  </div>
}