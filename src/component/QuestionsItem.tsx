import React, { CSSProperties } from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsItemType, TestResultsType } from '../types/types';

type QuestionsItemType = {
  question: TestQuestionsItemType
  quantity: number
  index: number
  currentQuestion: number
  finishTesting: () => void
  testResults: TestResultsType
  saveResult: (result: TestResultsType) => void
  saveCurrentQuestion: (currentQuestion: number) => void
};

export const QuestionsItem: React.FC<QuestionsItemType> = ({
                                                             question,
                                                             quantity,
                                                             index,
                                                             currentQuestion,
                                                             finishTesting,
                                                             testResults,
                                                             saveResult,
                                                             saveCurrentQuestion
                                                           }) => {
  const visibleStyle: CSSProperties = { display: 'none' };
  const visibleOn = () => {
    visibleStyle.display = 'block'
  };

  index === currentQuestion - 1 && visibleOn();

  const onButton = (e: any) => {
    quantity === index + 1 && finishTesting();
    saveCurrentQuestion(currentQuestion + 1);
    testResults.push({ id: index + 1, questionResult: e.target.innerText });
    saveResult(testResults);
  };

  const createMarkup = () => {
    return { __html: question.questionText }
  };

  return <div style={visibleStyle} className='questionsBlock'>
    <div className='questionsText' dangerouslySetInnerHTML={createMarkup()} />
    <Button outline className='button' color='primary' onClick={(e) => onButton(e)}>Да</Button>
    <Button outline className='button' color='danger' onClick={(e) => onButton(e)}>Нет</Button>
    <div>
      Вопрос {index + 1} из {quantity}.
    </div>
  </div>
}