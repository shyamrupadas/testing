import React from 'react';
import { Button } from 'reactstrap';
import { useAppDispatch, useAppState } from '../state/context';

type ResultPageType = {
  finishedTestDescription: string
};

export const ResultPage: React.FC<ResultPageType> = ({ finishedTestDescription}) => {
  const { testResult } = useAppState();
  const dispatch = useAppDispatch();

  return <div className='mainBlock'>
    <div className='contentBlock'>
      <div dangerouslySetInnerHTML={{ __html: finishedTestDescription }} />
      <Button className='button' outline color='primary' onClick={
        () => dispatch({ type: 'TEST_INIT' })
      }>Пройти заново</Button>
      <h4>Ваши результаты</h4>
      <div>
        {testResult.map(r => {
          return <div key={r.id}> Вопрос {r.id} - {r.questionResult} </div>
        })}
      </div>
    </div>
  </div>
};