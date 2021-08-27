import React from 'react';
import { ContextProvider } from './state/context';
import App from './App';

export const TestingApp = () => {


  return <ContextProvider>
    <App />
  </ContextProvider>
}