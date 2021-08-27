import React from 'react';
import { Button } from 'reactstrap';
import { useAppDispatch } from '../state/context';

type IntroductionType = {
  testDescription: string
};

export const Introduction: React.FC<IntroductionType> = ({ testDescription }) => {

  const appDispatch = useAppDispatch();

  return <div className='mainBlock'>
    <div className='contentBlock'>
      <div dangerouslySetInnerHTML={{ __html: testDescription }} />
      <Button className='button' color='primary' onClick={
        () => appDispatch({ type: 'TEST_START' })}>Начать тест</Button>
    </div>
  </div>
};