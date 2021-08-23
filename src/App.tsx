import React, { useState } from 'react';
import './App.css';
import { Introduction } from './Introduction';
import { Testing } from './Testing';
import { ResultPage } from './ResultPage';

function App() {

  const testDescription: string = `
  Здравствуйте!
  Предлагаем пройти наше <strong>тестирование<strong>
  `;

  type TestQuestionsItem = {
    id: number
    questionText: string
  };
  type TestQuestionsType = Array<TestQuestionsItem>;

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
      id: 1,
      questionText: `Это третий вопрос.<br /> Пожалуйста, ответьте "да" или "нет". Описание этого вопроса еще более длинное.`
    },
  ];

  type TestResultsItem = {
    id: number
    questionResult: 'yes' | 'no'
  };
  type TestResultsType = Array<TestResultsItem>;

  const testResults: TestResultsType = [];

  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestFinished, setIsFinished] = useState(false);

  const startTesting = () => {
    setIsTestStarted(true);
  }

  const finishTesting = () => {
    setIsFinished(true);
  }

    return (
    <div>
      {!isTestStarted && <Introduction startTesting={startTesting}/>}
      {isTestStarted && !isTestFinished && <Testing finishTesting={finishTesting}/>}
      {isTestStarted && isTestFinished && <ResultPage /> }
    </div>
  );
}

export default App;

