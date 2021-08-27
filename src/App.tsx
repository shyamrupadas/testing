import React, { useState } from 'react';
import './App.css';
import { Introduction } from './component/Introduction';
import { Testing } from './component/Testing';
import { ResultPage } from './component/ResultPage';
import { State, TestQuestionsType, TestResultsType } from './types/types';
import { useAppState } from './state/context';

const App = () => {

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

  const [state, setState] = useState<State>(
    JSON.parse(localStorage.getItem('state') as string) || {
      testState: 'introduce',
      currentQuestion: 0,
      testResult: []
    });

  const saveState = (state: State) => {
    setState(state);
    localStorage.setItem('state', JSON.stringify(state));
  };

  const initializeApp = () => {
    saveState(
      {
        ...state,
        testState: 'introduce',
        currentQuestion: 0,
        testResult: []
      });
  };

  const startTesting = () => {
    saveState(
      {
        ...state,
        testState: 'start',
        currentQuestion: 1,
      });
  };

  const finishTesting = () => {
    saveState(
      {
        ...state,
        testState: 'finished'
      });
  };

  const saveResult = (results: TestResultsType) => {
    saveState(
      {
        ...state, testResult: results
      });
  };

  const saveCurrentQuestion = (currentQuestion: number) => {
    saveState(
      {
        ...state, currentQuestion: currentQuestion
      });
  };

  const {testState} = useAppState();

  return <div className="app">
      {testState === 'introduce' && <Introduction startTesting={startTesting}
                                                        testDescription={testDescription}
      />}
      {testState === 'start' && <Testing finishTesting={finishTesting}
                                               testQuestions={testQuestions}
                                               saveResult={saveResult}
                                               saveCurrentQuestion={saveCurrentQuestion}
                                               state={state}
      />}
      {testState === 'finished' && <ResultPage initializeApp={initializeApp}
                                                     finishedTestDescription={finishedTestDescription}
                                                     state={state}
      />}
    </div>
}

export default App;