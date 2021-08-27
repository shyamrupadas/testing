import React from 'react';
import './App.css';
import { Introduction } from './component/Introduction';
import { Testing } from './component/Testing';
import { ResultPage } from './component/ResultPage';
import { TestQuestionsType } from './types/types';
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

  const { testState } = useAppState();

  return <div className="app">
    {testState === 'init' && <Introduction testDescription={testDescription} />}
    {testState === 'start' && <Testing testQuestions={testQuestions} />}
    {testState === 'finished' && <ResultPage finishedTestDescription={finishedTestDescription} />}
  </div>
}

export default App;