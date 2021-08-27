import React, { useCallback, useState } from 'react';
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

  type TestState = 'introduce' | 'start' | 'finished';

  const [testState, setTestState] = useState<TestState>('introduce');

  const [currentQuestion, setCurrentQuestion] = useState(
    JSON.parse(localStorage.getItem('currentQuestion') as string) || 0);

  const initializeApp = useCallback(() => {
    saveTestState('introduce');
    initializeResult();
    saveCurrentQuestion(0);
  }, []);

  const startTesting = useCallback(() => {
    saveTestState('start');
    saveCurrentQuestion(1);
    initializeResult();
  }, []);

  const finishTesting = useCallback(() => {
    saveTestState('finished');
  }, []);

  const saveResult = useCallback((results: TestResultsType) => {
    localStorage.setItem('testResults', JSON.stringify(results));
  }, []);

  const saveCurrentQuestion = useCallback((currentQuestion: number) => {
    setCurrentQuestion(currentQuestion);
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
  }, []);

  const initializeResult = () => {
    setTesResults([]);
    localStorage.setItem('testResults', JSON.stringify([]));
  }

  const saveTestState = (value: TestState) => {
    setTestState(value);
  }

return <div className="app">
    {testState === 'introduce' && <Introduction startTesting={startTesting}
                                                testDescription={testDescription}
    />}
    {testState === 'start' && <Testing finishTesting={finishTesting}
                                       testQuestions={testQuestions}
                                       testResults={testResults}
                                       saveResult={saveResult}
                                       currentQuestion={currentQuestion}
                                       saveCurrentQuestion={saveCurrentQuestion}
    />}
    {testState === 'finished' && <ResultPage initializeApp={initializeApp}
                                             finishedTestDescription={finishedTestDescription}
                                             testResults={testResults}
    />}
  </div>
}

export default App;

