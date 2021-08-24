import React from 'react';
import { Button } from 'reactstrap';
import { TestResultsType } from '../types/types';

type ResultPageType = {
  initializeApp: () => void
  finishedTestDescription: string
};

export const ResultPage: React.FC<ResultPageType> = ({
                                                       initializeApp,
                                                       finishedTestDescription
                                                     }) => {
  return <>
    <h1>
      ResultPage
    </h1>
    <div>
      {finishedTestDescription}
    </div>
    <Button onClick={initializeApp}>Пройти заново</Button>
    <h3>Ваши результаты</h3>
  </>
};