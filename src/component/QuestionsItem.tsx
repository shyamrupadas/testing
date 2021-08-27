import React, { CSSProperties } from 'react';
import { Button } from 'reactstrap';
import { State, TestQuestionsItemType } from '../types/types';

type QuestionsItemType = {
  state: State
  question: TestQuestionsItemType
  quantity: number
  index: number
  finishTesting: () => void
  saveResult: any
  saveCurrentQuestion: (currentQuestion: number) => void
};

export const QuestionsItem: React.FC<QuestionsItemType> = ({
                                                             state,
                                                             question,
                                                             quantity,
                                                             index,
                                                             finishTesting,
                                                             saveResult,
                                                             saveCurrentQuestion
                                                           }) => {
  const isVisible = index === state.currentQuestion - 1;
  const visibleStyle: CSSProperties = { display: isVisible ? 'block' : 'none' };

  const onButton = (e: any) => {

    const newResult = state.testResult;
    newResult.push({ id: index + 1, questionResult: e.target.innerText });
    saveResult(newResult);

    if (quantity === index + 1) {
      finishTesting();
      return;
    }

    saveCurrentQuestion(state.currentQuestion + 1);
  };

  return <div style={visibleStyle} className='questionsBlock'>
    <div className='questionsText' dangerouslySetInnerHTML={{ __html: question.questionText }} />
    <Button outline className='button' color='primary' onClick={(e) => onButton(e)}>Да</Button>
    <Button outline className='button' color='danger' onClick={(e) => onButton(e)}>Нет</Button>
    <div>
      Вопрос {index + 1} из {quantity}.
    </div>
  </div>
}