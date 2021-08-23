export type TestQuestionsItemType = {
  id: number
  questionText: string
};

export type TestQuestionsType = Array<TestQuestionsItemType>;

export type TestResultsItemType = {
  id: number
  questionResult: 'yes' | 'no'
};
export type TestResultsType = Array<TestResultsItemType>;
