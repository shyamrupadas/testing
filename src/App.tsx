import React, { useState } from 'react';
import './App.css';
import { Introduction } from './component/Introduction';
import { Testing } from './component/Testing';
import { ResultPage } from './component/ResultPage';
import { TestQuestionsType, TestResultsType } from './types/types';

function App() {


  const testDescription: string = `
  Здравствуйте! <br />
  Предлагаем пройти наше <strong>тестирование<strong>
  `;

  const finishedTestDescription: string = `
   Спасибо большое, что приняли участие в нашем <strong>тестировании<strong>.<br />
   Всего вам доброго
  `;

  const testQuestions: TestQuestionsType = [
    {
      id: 1,
      questionText: `Это первый вопрос.<br /> Пожалуйста, ответьте "да" или "нет".`
    },
    {
      id: 2,
      questionText: `Это второй вопрос.<br /> Пожалуйста, ответьте "да" или "нет". Описание этого вопроса более длинное.`
    },
    {
      id: 3,
      questionText: `Это третий вопрос.<br /> Пожалуйста, ответьте "да" или "нет". Описание этого вопроса еще более длинное.`
    },
  ];

  const testResults: TestResultsType = [];

  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsFinished] = useState(false);

  const startTesting = () => {
    setIsTestStarted(true);
    setIsFinished(false);
  }

  const finishTesting = () => {
    setIsFinished(true);
  }

  return (
    <div>
      {!isTestStarted && <Introduction startTesting={startTesting}
                                       testDescription={testDescription} />}
      {isTestStarted && !isTestFinished && <Testing finishTesting={finishTesting}
                                                    testQuestions={testQuestions} />}
      {isTestStarted && isTestFinished && <ResultPage startTesting={startTesting}
                                                      finishedTestDescription={finishedTestDescription} />}
    </div>
  );
}

export default App;

