import React from 'react';
import { ContextProvider } from './state/context';
import App from './App';
import { TestDataType } from './types/types';

export const TestingApp = () => {

  const testData: TestDataType = {
    initTestDescription:
      `<h3>Здравствуйте!</h3> <p>Предлагаем пройти наше <strong>тестирование</strong></p>`,
    finishedTestDescription:
      `Спасибо большое, что приняли участие в нашем <strong>тестировании</strong>.<br />Всего вам доброго!`,
    testQuestions: [
      {
        id: 1, questionText: `Это первый вопрос.<br /> Пожалуйста, ответьте "да" или "нет".`
      },
      {
        id: 2,
        questionText: `Это второй вопрос.<br /> Пожалуйста, ответьте <strong>"да"</strong> или <strong>"нет"</strong>. Описание этого вопроса более длинное.`
      },
      {
        id: 3,
        questionText: `Это третий вопрос.<br /> Пожалуйста, ответьте <strong>"да"</strong> или <strong>"нет"</strong>. Описание этого вопроса еще более длинное.`
      }
    ]
  };

  return <ContextProvider>
    <App testData={testData}/>
  </ContextProvider>
}