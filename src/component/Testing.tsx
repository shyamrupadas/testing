import React, { useEffect } from 'react';
import { TestQuestionsType, TestResultsType } from '../types/types';
import { QuestionsItem } from './QuestionsItem';

type IntroductionType = {
  finishTesting: () => void
  testQuestions: TestQuestionsType
  testResults: TestResultsType
  saveResult: (result: TestResultsType) => void
  currentQuestion: number
  saveCurrentQuestion: (currentQuestion: number) => void
};

export const Testing: React.FC<IntroductionType> = ({
                                                      finishTesting,
                                                      testQuestions,
                                                      testResults,
                                                      saveResult,
                                                      currentQuestion,
                                                      saveCurrentQuestion,
                                                    }) => {

  useEffect(() => saveCurrentQuestion(currentQuestion), [currentQuestion])

  const questionsQuantity = testQuestions.length;

  return <div className='mainBlock'>
    {
      testQuestions.map((q, index) => <QuestionsItem
        key={q.id}
        question={q}
        quantity={questionsQuantity}
        index={index}
        currentQuestion={currentQuestion}
        finishTesting={finishTesting}
        testResults={testResults}
        saveResult={saveResult}
        saveCurrentQuestion={saveCurrentQuestion}
      />)
    }
  </div>
};