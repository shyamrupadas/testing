import React from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsType } from './types/types';

type IntroductionType = {
  finishTesting: () => void
  testQuestions: TestQuestionsType
};

export const Testing: React.FC<IntroductionType> = ({ finishTesting, testQuestions }) => {
  return <>
    <h1>
      Testing
    </h1>
    <Button onClick={finishTesting}>Закончить тест</Button>
  </>
};