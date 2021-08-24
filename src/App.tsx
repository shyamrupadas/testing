import React, { useEffect, useState } from 'react';
import './App.css';
import { Introduction } from './component/Introduction';
import { Testing } from './component/Testing';
import { ResultPage } from './component/ResultPage';
import { TestQuestionsType, TestResultsType } from './types/types';

function App() {

  const testDescription: string = `
  Здравствуйте! <br />
  Предлагаем пройти наше <strong>тестирование</strong>
  `;

  const finishedTestDescription: string = `
   Спасибо большое, что приняли участие в нашем <strong>тестировании</strong>.<br />
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

  let testResults: TestResultsType = [];

  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsFinished] = useState(false);

  const initializeApp = () => {
    setIsTestStarted(false);
    saveIsTestStarted(false);
    setIsFinished(false);
    initializeResult();
    testResults = [];
    saveCurrentQuestion(0);
  }

  const syncTestResult = () => {
    testResults = JSON.parse(localStorage.getItem('testResults') as string)
  }

  useEffect(initializeApp, []);
  useEffect(syncTestResult, []);

  const startTesting = () => {
    setIsTestStarted(true);
    saveIsTestStarted(true);
  }

  const finishTesting = () => {
    setIsFinished(true);
    initializeResult();
  }

  const initializeResult = () => {
    localStorage.setItem('testResults', JSON.stringify([]));
  }

  const saveResult = (results: TestResultsType) => {
    localStorage.setItem('testResults', JSON.stringify(results));
  }

  const saveIsTestStarted = (isTestStarted: boolean) => {
    localStorage.setItem('isTestStarted', JSON.stringify(isTestStarted));
  }

  const saveCurrentQuestion = (currentQuestion: number) => {
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
  }

  return (
    <div>
      {!isTestStarted && <Introduction startTesting={startTesting}
                                       testDescription={testDescription}
      />}
      {isTestStarted && !isTestFinished && <Testing finishTesting={finishTesting}
                                                    testQuestions={testQuestions}
                                                    testResults={testResults}
                                                    saveResult={saveResult}
                                                    saveCurrentQuestion={saveCurrentQuestion}
      />}
      {isTestStarted && isTestFinished && <ResultPage initializeApp={initializeApp}
                                                      finishedTestDescription={finishedTestDescription}
      />}
    </div>
  );
}

export default App;

