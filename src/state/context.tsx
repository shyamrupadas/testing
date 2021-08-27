import React from 'react';
import { State } from '../types/types';

type Action = { type: 'TEST_START' }
  | { type: 'DELETE_GOAL' };
type Dispatch = (action: Action) => void
type StateProviderProps = { children: React.ReactNode };


const StateContext = React.createContext<State | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined)

const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TEST_START': {
      return {
        ...state,
        testState: 'start',
        currentQuestion: 1,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

const ContextProvider = ({ children }: StateProviderProps) => {
  // @ts-ignore
  const [appState, appDispatch] = React.useReducer(appReducer, {
    // JSON.parse(localStorage.getItem('state') as string) ||
    testState: 'introduce',
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