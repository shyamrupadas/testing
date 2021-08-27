import React from 'react';
import { Button } from 'reactstrap';

type IntroductionType = {
  startTesting: () => void
  testDescription: string
};

export const Introduction: React.FC<IntroductionType> = ({ startTesting, testDescription }) => {

  return <div className='mainBlock'>
    <div className='contentBlock'>
      <div dangerouslySetInnerHTML={{ __html: testDescription }} />
      <Button className='button' color='primary' onClick={startTesting}>Начать тест</Button>
    </div>
  </div>
};