export type TestQuestionsItemType = {
  id: number
  questionText: string
};

export type TestQuestionsType = Array<TestQuestionsItemType>;

export type TestResultsItemType = {
  id: number | null
  questionResult: 'да' | 'нет'
};
export type TestResultsType = Array<TestResultsItemType>;

export type State = {
  testState: 'init' | 'start' | 'finished'
  currentQuestion: number
  testResult: Array<TestResultsItemType>
};