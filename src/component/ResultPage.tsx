import React from 'react';
import { Button } from 'reactstrap';
import { TestResultsType } from '../types/types';

type ResultPageType = {
  initializeApp: () => void
  finishedTestDescription: string
  testResults: TestResultsType
};

export const ResultPage: React.FC<ResultPageType> = ({
                                                       initializeApp,
                                                       finishedTestDescription,
                                                       testResults
                                                     }) => {

  return <div className='mainBlock'>
    <div className='contentBlock'>
      <div dangerouslySetInnerHTML={{ __html: finishedTestDescription }} />
      <Button className='button' outline color='primary' onClick={initializeApp}>Пройти заново</Button>
      <h4>Ваши результаты</h4>
      <div>
        {testResults.map(r => {
          return <div key={r.id}>
            Вопрос {r.id} - {r.questionResult}
          </div>
        })}
      </div>
    </div>
  </div>
};