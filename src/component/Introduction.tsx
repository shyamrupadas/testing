import React from 'react';
import { Button } from 'reactstrap';

type IntroductionType = {
  startTesting: () => void
  testDescription: string
};

export const Introduction: React.FC<IntroductionType> = ({ startTesting, testDescription }) => {

  const createMarkup = () => {
    return { __html: testDescription };
  }

  return <div className='mainBlock'>
    <div className='contentBlock'>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <Button className='button' color='primary' onClick={startTesting}>Начать тест</Button>
    </div>
  </div>
};