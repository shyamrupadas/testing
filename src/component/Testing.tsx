import React from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsType } from '../types/types';
import { QuestionsItem } from './QuestionsItem';

type IntroductionType = {
  finishTesting: () => void
  testQuestions: TestQuestionsType
};

export const Testing: React.FC<IntroductionType> = ({ finishTesting, testQuestions }) => {

  const questionsQuantity = testQuestions.length;

  return <>
    <h1>
      Testing
    </h1>
    {
      testQuestions.map((q, index) => <QuestionsItem key={q.id}
                                            question={q}
                                            quantity={questionsQuantity} index={index}/>)
    }
    <Button onClick={finishTesting}>Закончить тест</Button>
  </>
};