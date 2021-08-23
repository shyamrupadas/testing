import React from 'react';
import { Button } from 'reactstrap';

type IntroductionType = {
  startTesting: () => void
};

export const Introduction: React.FC<IntroductionType> = ({ startTesting }) => {
  return <>
    <h1>
      Introduction
    </h1>
    <Button onClick={startTesting}>Начать тест</Button>
  </>
};