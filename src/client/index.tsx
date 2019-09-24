import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const app = document.getElementById('app');

const Client = () => (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

if (app.innerHTML === '<!-- BODY -->') {
  render(<Client />, app);
} else {
  hydrate(<Client />, app);
}
