import React, { CSSProperties } from 'react';
import { Button } from 'reactstrap';

type IntroductionType = {
  startTesting: () => void
  testDescription: string
};

export const Introduction: React.FC<IntroductionType> = ({ startTesting, testDescription }) => {

  return <div>
    <h1>
      Тестирование
    </h1>
    <div>
      {testDescription}
    </div>
    <Button onClick={startTesting}>Начать тест</Button>
  </div>
};