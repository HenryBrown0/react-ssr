import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const app = document.getElementById('app');

const Client = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
};

if (app.innerHTML === '<!-- BODY -->') {
	render(<Client />, app);
} else {
	hydrate(<Client />, app);
}
