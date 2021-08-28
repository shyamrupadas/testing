import React from 'react';
import { TestQuestionsType } from '../types/types';
import { QuestionsItem } from './QuestionsItem';

type IntroductionType = {
  testQuestions: TestQuestionsType
};

export const Testing: React.FC<IntroductionType> = ({ testQuestions }) => {

  const questionsQuantity = testQuestions.length;

  return <div className='mainBlock'>
    {
      testQuestions.map((q, index) => <QuestionsItem
        key={q.id}
        question={q}
        quantity={questionsQuantity}
        index={index}
      />)
    }
  </div>
};