import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import ServerSideData from '../contexts/serverSideDataContext';

const app = document.getElementById('app');

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line
delete window.__PRELOADED_STATE__; // eslint-disable-line

const Client: React.FC = () => (
  <HelmetProvider>
    <BrowserRouter>
      <ServerSideData.Provider value={preloadedState || {}}>
        <App />
      </ServerSideData.Provider>
    </BrowserRouter>
  </HelmetProvider>
);

if (app.innerHTML === '<!-- BODY -->') {
  render(<Client />, app);
} else {
  hydrate(<Client />, app);
}
