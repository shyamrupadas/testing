import React from 'react';
import { State, TestResultsItemType } from '../types/types';

type Action = { type: 'TEST_START' } |
  { type: 'INCREMENT_CURRENT_QUESTION', payload: number } |
  { type: 'SET_RESULTS', payload: TestResultsItemType } |
  { type: 'TEST_FINISH' } |
  { type: 'TEST_INIT' };
type Dispatch = (action: Action) => void
type StateProviderProps = { children: React.ReactNode };

const StateContext = React.createContext<State | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined)

const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TEST_START':
      return {
        ...state,
        testState: 'start',
        currentQuestion: 1,
        testResult: []
      }
    case 'INCREMENT_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.payload + 1
      }
    case 'SET_RESULTS':
      return {
        ...state, testResult: [...state.testResult, action.payload]
      }
    case 'TEST_FINISH':
      return {
        ...state,
        testState: 'finished'
      }
    case 'TEST_INIT':
      return {
        ...state,
        testState: 'init',
        currentQuestion: 0,
        testResult: []
      }

    default:
      return {
        ...state
      }
  }
};

const saveStateMiddleware = (state: State, action: Action) => {
  const newState = appReducer(state, action);
  if (newState !== state) {
    localStorage.setItem('state', JSON.stringify(newState));
  }
  return newState;
};

const initState = (testState: string, currentQuestion: number, testResult: Array<TestResultsItemType>) => {

  const initState = JSON.parse(localStorage.getItem('state') as string) ||
    {
      testState: testState,
      currentQuestion: currentQuestion,
      testResult: testResult
    }
  return { ...initState }
};

const ContextProvider = ({ children }: StateProviderProps) => {
  // @ts-ignore
  const [appState, appDispatch] = React.useReducer(saveStateMiddleware, ('init'), initState);

  return <DispatchContext.Provider value={appDispatch}>
    <StateContext.Provider value={appState}>
      {children}
    </StateContext.Provider>
  </DispatchContext.Provider>
};


const useAppState = () => {
  const context = React.useContext(StateContext)

  if (context === undefined) {
    throw new Error('useCountState must be used within a ContextProvider')
  }
  return context;
};

const useAppDispatch = () => {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a ContextProvider')
  }
  return context;
};

export { ContextProvider, useAppState, useAppDispatch }