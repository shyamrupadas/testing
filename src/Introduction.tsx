import React from 'react';
import { Button } from 'reactstrap';

type IntroductionType = {
  startTesting: () => void
  testDescription: string
};

export const Introduction: React.FC<IntroductionType> = ({ startTesting, testDescription }) => {
  return <>
    <h1>
      Introduction
    </h1>
    <div>
      {testDescription}
    </div>
    <Button onClick={startTesting}>Начать тест</Button>
  </>
};