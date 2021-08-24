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
  const createMarkup = () => {
    return { __html: finishedTestDescription };
  }

  return <>
    <h1>
      ResultPage
    </h1>
    <div dangerouslySetInnerHTML={createMarkup()} />
    <Button onClick={initializeApp}>Пройти заново</Button>
    <h3>Ваши результаты</h3>
    <div>
      {testResults.map(r => {
        return <div>
          Вопрос {r.id} - {r.questionResult}
        </div>
      })}
    </div>
  </>
};