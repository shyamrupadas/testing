import React from 'react';
import { Button } from 'reactstrap';

type IntroductionType = {
  finishTesting: () => void
};

export const Testing: React.FC<IntroductionType> = ({ finishTesting }) => {
  return <>
    <h1>
      Testing
    </h1>
    <Button onClick={finishTesting}>Закончить тест</Button>
  </>
};