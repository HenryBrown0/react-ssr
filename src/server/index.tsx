import express from 'express';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import fs from 'fs';
import path from 'path';
import App from '../client/App';

const app: express.Application = express();
const port: string = '8080' || process.env.PORT;
const indexHtmlPath: string = path.join(__dirname, './static/index.html');
const baseHtml: string = fs.readFileSync(indexHtmlPath).toString();

const generateUp = (url: string) => {
	const sheet = new ServerStyleSheet()
	const context: StaticRouterContext = {};

	let markUp: string = ReactDOMServer.renderToString(
		<StyleSheetManager sheet={sheet.instance}>
			<StaticRouter
				location={url}
				context={context}
			>
				<App />
			</StaticRouter>
		</StyleSheetManager>
	);
	const styleTags = sheet.getStyleTags()
	sheet.seal()

	let html = baseHtml.replace('<!-- HEAD -->', styleTags);
	html = html.replace('<!-- BODY -->', markUp);

	return { html, context };
};

app.use('/static', express.static(path.join(__dirname, './static')));

app.get('/*', (request, response) => {
	const { html, context } = generateUp(request.url);

	if (context.statusCode) {
		return response.status(context.statusCode).send(html);
	}

	if (context.url) {
		return response.redirect(301, context.url);
	}

	return response.send(html);
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
