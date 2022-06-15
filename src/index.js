import { createRoot } from 'react-dom/client';
import React from 'react';
import './scss/main.scss';
import App from './components/App';
import { AppProvider } from './components/context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
