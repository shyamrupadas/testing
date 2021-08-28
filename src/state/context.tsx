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
        currentQuestion: 1
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

const ContextProvider = ({ children }: StateProviderProps) => {
  // @ts-ignore
  const [appState, appDispatch] = React.useReducer(appReducer, {
    // JSON.parse(localStorage.getItem('state') as string) ||
    testState: 'init',
    currentQuestion: 0,
    testResult: []
  });

  return <StateContext.Provider value={appState}>
    <DispatchContext.Provider value={appDispatch}>
      {children}
    </DispatchContext.Provider>
  </StateContext.Provider>
};


const useAppState = () => {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a ContextProvider')
  }
  return context
};

const useAppDispatch = () => {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a ContextProvider')
  }
  return context
};

export { ContextProvider, useAppState, useAppDispatch }