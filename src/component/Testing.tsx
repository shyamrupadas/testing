import React, { useEffect, useState } from 'react';
import { TestQuestionsType, TestResultsType } from '../types/types';
import { QuestionsItem } from './QuestionsItem';

type IntroductionType = {
  finishTesting: () => void
  testQuestions: TestQuestionsType
  testResults: TestResultsType
  saveResult: (result: TestResultsType) => void
  saveCurrentQuestion: (currentQuestion: number) => void
};

export const Testing: React.FC<IntroductionType> = ({
                                                      finishTesting,
                                                      testQuestions,
                                                      testResults,
                                                      saveResult, saveCurrentQuestion
                                                    }) => {

  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => saveCurrentQuestion(currentQuestion), [currentQuestion])

  const questionsQuantity = testQuestions.length;

  return <div>
    <h1>
      Testing
    </h1>
    {
      testQuestions.map((q, index) => <QuestionsItem
        key={q.id}
        question={q}
        quantity={questionsQuantity}
        index={index}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        finishTesting={finishTesting}
        testResults={testResults}
        saveResult={saveResult}
      />)
    }
  </div>
};