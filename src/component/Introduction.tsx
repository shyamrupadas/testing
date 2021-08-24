import React from 'react';
import { Button } from 'reactstrap';

type IntroductionType = {
  startTesting: () => void
  testDescription: string
};

export const Introduction: React.FC<IntroductionType> = ({ startTesting, testDescription }) => {

  const createMarkup = () => {
    return { __html: testDescription };
  }

  return <div>
    <h1>
      Тестирование
    </h1>
    <div dangerouslySetInnerHTML={createMarkup()} />
    <Button onClick={startTesting}>Начать тест</Button>
  </div>
};