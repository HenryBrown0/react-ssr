import express, { Application } from 'express';
import ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import fs from 'fs';
import path from 'path';
import App from '../client/App';

const app: Application = express();
const port = 8080 || process.env.PORT;
const indexHtmlPath = path.join(__dirname, './static/index.html');
const baseHtml = fs.readFileSync(indexHtmlPath);

app.get('/', (_, response) => {
	const jsx = (<App />);
	const html = ReactDOMServer.renderToString(jsx);

	response.send(baseHtml.toString().replace('replace-me', html));
});

app.use('/static', express.static(path.join(__dirname, './static')));

app.listen(port, () => console.log(`Listening on port ${port}`));
