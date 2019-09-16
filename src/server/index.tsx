import express from 'express';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import fs from 'fs';
import path from 'path';
import App from '../client/App';

const app: express.Application = express();
const port: string = '8080' || process.env.PORT;
const indexHtmlPath: string = path.join(__dirname, './static/index.html');
const baseHtml: string = fs.readFileSync(indexHtmlPath).toString();

const generateUp = (url: string) => {
	const context: StaticRouterContext = {};
	let markUp: string = ReactDOMServer.renderToString(
		<StaticRouter
			location={url}
			context={context}
		>
			<App />
		</StaticRouter>
	);
	markUp = baseHtml.replace('replace-me', markUp);

	return { markUp, context };
};

app.get('/*', (request, response) => {
	const { markUp, context } = generateUp(request.url);

	if (context.statusCode) {
		return response.status(context.statusCode).send(markUp);
	}

	if (context.url) {
		return response.redirect(301, context.url);
	}

	return response.send(markUp);
});

app.use('/static', express.static(path.join(__dirname, './static')));

app.listen(port, () => console.log(`Listening on port ${port}`));
