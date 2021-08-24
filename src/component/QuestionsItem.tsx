import React from 'react';
import { Button } from 'reactstrap';
import { TestQuestionsItemType, TestQuestionsType } from '../types/types';

type QuestionsItemType = {
  question: TestQuestionsItemType
  quantity: number
  index: number
};

export const QuestionsItem: React.FC<QuestionsItemType> = ({ question,
                                                             quantity,
                                                             index }) => {
  return <>
    <div>
      {question.questionText}
    </div>
    <Button>Да</Button>
    <Button>Нет</Button>
    <div>
      Вопрос {index + 1} из {quantity}.
    </div>
  </>
}