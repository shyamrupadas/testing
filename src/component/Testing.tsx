import React, { CSSProperties, useState } from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsType } from '../types/types';
import { QuestionsItem } from './QuestionsItem';

type IntroductionType = {
  finishTesting: () => void
  testQuestions: TestQuestionsType
};

export const Testing: React.FC<IntroductionType> = ({ finishTesting, testQuestions }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionsQuantity = testQuestions.length;

  return <div>
    <h1>
      Testing
    </h1>
    {
      testQuestions.map((q, index) => <QuestionsItem key={q.id}
                                                     question={q}
                                                     quantity={questionsQuantity}
                                                     index={index}
                                                     currentQuestion={currentQuestion}
                                                     setCurrentQuestion={setCurrentQuestion} />)
    }
    <Button onClick={finishTesting}>Закончить тест</Button>
  </div>
};