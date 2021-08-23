import React from 'react';
import { Button } from 'reactstrap';

type ResultPageType = {
  startTesting: () => void
  finishedTestDescription: string
};

export const ResultPage: React.FC<ResultPageType> = ({ startTesting, finishedTestDescription }) => {
  return <>
    <h1>
      ResultPage
    </h1>
    <div>
      {finishedTestDescription}
    </div>
    <Button onClick={startTesting}>Пройти заново</Button>
  </>
};