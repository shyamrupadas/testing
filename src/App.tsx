import React, { useState } from 'react';
import './App.css';
import { Introduction } from './component/Introduction';
import { Testing } from './component/Testing';
import { ResultPage } from './component/ResultPage';
import { TestQuestionsType, TestResultsType } from './types/types';

function App() {

  const testDescription: string = `
  <h3>Здравствуйте!</h3>
  <p>Предлагаем пройти наше <strong>тестирование</strong></p>
  `;

  const finishedTestDescription: string = `
   Спасибо большое, что приняли участие в нашем <strong>тестировании</strong>.<br />
   Всего вам доброго!
  `;

  const testQuestions: TestQuestionsType = [
    {
      id: 1,
      questionText: `Это первый вопрос.<br /> Пожалуйста, ответьте "да" или "нет".`
    },
    {
      id: 2,
      questionText: `Это второй вопрос.<br /> Пожалуйста, ответьте <strong>"да"</strong> или <strong>"нет"</strong>. Описание этого вопроса более длинное.`
    },
    {
      id: 3,
      questionText: `Это третий вопрос.<br /> Пожалуйста, ответьте <strong>"да"</strong> или <strong>"нет"</strong>. Описание этого вопроса еще более длинное.`
    },
  ];

  const [testResults, setTesResults] = useState(
    JSON.parse(localStorage.getItem('testResults') as string) || []);

  const [isTestStarted, setIsTestStarted] = useState(
    JSON.parse(localStorage.getItem('isTestStarted') as string) || false);
  const [isTestFinished, setIsTestFinished] = useState(
    JSON.parse(localStorage.getItem('isTestFinished') as string) || false);
  const [currentQuestion, setCurrentQuestion] = useState(
    JSON.parse(localStorage.getItem('currentQuestion') as string) || 0);

  const initializeApp = () => {
    setIsTestStarted(false);
    saveIsTestStarted(false);
    saveIsTestFinished(false);
    initializeResult();
    saveCurrentQuestion(0);

  }

  const startTesting = () => {
    saveIsTestStarted(true);
    saveCurrentQuestion(1);
    initializeResult();
  }

  const finishTesting = () => {
    saveIsTestFinished(true);
  }

  const initializeResult = () => {
    setTesResults([]);
    localStorage.setItem('testResults', JSON.stringify([]));
  }

  const saveResult = (results: TestResultsType) => {
    localStorage.setItem('testResults', JSON.stringify(results));
  }

  const saveIsTestStarted = (isTestStarted: boolean) => {
    setIsTestStarted(isTestStarted);
    localStorage.setItem('isTestStarted', JSON.stringify(isTestStarted));
  }

  const saveIsTestFinished = (isTestFinished: boolean) => {
    setIsTestFinished(isTestFinished);
    localStorage.setItem('isTestFinished', JSON.stringify(isTestFinished));
  }

  const saveCurrentQuestion = (currentQuestion: number) => {
    setCurrentQuestion(currentQuestion);
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
  }

  return (
    <div className='app'>
      <div className="wrap">
        {!isTestStarted && <Introduction startTesting={startTesting}
                                         testDescription={testDescription}
        />}
        {isTestStarted && !isTestFinished && <Testing finishTesting={finishTesting}
                                                      testQuestions={testQuestions}
                                                      testResults={testResults}
                                                      saveResult={saveResult}
                                                      currentQuestion={currentQuestion}
                                                      saveCurrentQuestion={saveCurrentQuestion}
        />}
        {isTestStarted && isTestFinished && <ResultPage initializeApp={initializeApp}
                                                        finishedTestDescription={finishedTestDescription}
                                                        testResults={testResults}
        />}
      </div>
    </div>
  );
}

export default App;

