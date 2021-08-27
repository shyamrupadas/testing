import React from 'react';
import './App.css';
import { Introduction } from './component/Introduction';
import { Testing } from './component/Testing';
import { ResultPage } from './component/ResultPage';
import { TestDataPropsType } from './types/types';
import { useAppState } from './state/context';

const App: React.FC<TestDataPropsType> = ({ testData }) => {


  const { testState } = useAppState();

  return <div className="app">
    {testState === 'init' && <Introduction testDescription={testData.initTestDescription} />}
    {testState === 'start' && <Testing testQuestions={testData.testQuestions} />}
    {testState === 'finished' && <ResultPage finishedTestDescription={testData.finishedTestDescription} />}
  </div>
}

export default App;