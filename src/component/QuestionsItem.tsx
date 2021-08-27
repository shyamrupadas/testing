import React, { CSSProperties } from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsItemType } from '../types/types';
import { useAppDispatch, useAppState } from '../state/context';

type QuestionsItemType = {
  question: TestQuestionsItemType
  quantity: number
  index: number
};

export const QuestionsItem: React.FC<QuestionsItemType> = ({
                                                             question,
                                                             quantity,
                                                             index,
                                                           }) => {

  const { currentQuestion, testResult } = useAppState();
  const dispatch = useAppDispatch();

  const isVisible = index === currentQuestion - 1;
  const visibleStyle: CSSProperties = { display: isVisible ? 'block' : 'none' };

  const onButton = (e: any) => {

    // todo сделать 'SET_RESULTS' проще
    const newResult = testResult;
    newResult.push({ id: index + 1, questionResult: e.target.innerText });
    dispatch({type: 'SET_RESULTS', payload: newResult})
    // saveResult(newResult);

    if (quantity === index + 1) {
      dispatch({type: 'TEST_FINISH'});
      return;
    }
    dispatch({ type: 'INCREMENT_CURRENT_QUESTION', payload: currentQuestion });
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