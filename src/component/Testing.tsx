import React from 'react';
import { State, TestQuestionsType, TestResultsType } from '../types/types';
import { QuestionsItem } from './QuestionsItem';

type IntroductionType = {
  state: State
  finishTesting: () => void
  testQuestions: TestQuestionsType
  saveResult: (result: TestResultsType) => void
  saveCurrentQuestion: (currentQuestion: number) => void
};

export const Testing: React.FC<IntroductionType> = ({
                                                      state,
                                                      finishTesting,
                                                      testQuestions,
                                                      saveResult,
                                                      saveCurrentQuestion,
                                                    }) => {


  const questionsQuantity = testQuestions.length;

  return <div className='mainBlock'>
    {
      testQuestions.map((q, index) => <QuestionsItem
        state={state}
        key={q.id}
        question={q}
        quantity={questionsQuantity}
        index={index}
        finishTesting={finishTesting}
        saveResult={saveResult}
        saveCurrentQuestion={saveCurrentQuestion}
      />)
    }
  </div>
};