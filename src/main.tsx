import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FrasesContextProvider } from './contexts/FrasesContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FrasesContextProvider>
      <App />
    </FrasesContextProvider>
  </React.StrictMode>,
);
