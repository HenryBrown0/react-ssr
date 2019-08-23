import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';

const app = document.getElementById('app');

app.innerHTML === 'replace-me' 
	? render(<App />, app)
	: hydrate(<App />, app);
