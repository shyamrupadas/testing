import React from 'react';
import { Button } from 'reactstrap';
import { State } from '../types/types';

type ResultPageType = {
  state: State
  initializeApp: () => void
  finishedTestDescription: string
};

export const ResultPage: React.FC<ResultPageType> = ({
                                                       state,
                                                       initializeApp,
                                                       finishedTestDescription,
                                                     }) => {

  return <div className='mainBlock'>
    <div className='contentBlock'>
      <div dangerouslySetInnerHTML={{ __html: finishedTestDescription }} />
      <Button className='button' outline color='primary' onClick={initializeApp}>Пройти заново</Button>
      <h4>Ваши результаты</h4>
      <div>
        {state.testResult.map(r => {
          return <div key={r.id}>
            Вопрос {r.id} - {r.questionResult}
          </div>
        })}
      </div>
    </div>
  </div>
};