import express from 'express';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { HelmetProvider } from "react-helmet-async";
import fs from 'fs';
import path from 'path';
import App from '../client/App';

const app: express.Application = express();
const port: string = '8080' || process.env.PORT;
const indexHtmlPath: string = path.join(__dirname, './static/index.html');
const baseHtml: string = fs.readFileSync(indexHtmlPath).toString();

const generateMarkUp = (url: string) => {
	const sheet = new ServerStyleSheet()
	const helmetContext: any = {};
	const context: StaticRouterContext = {};

	let markUp: string = ReactDOMServer.renderToString(
		<StyleSheetManager sheet={sheet.instance}>
			<HelmetProvider context={helmetContext}>
				<StaticRouter
					location={url}
					context={context}
				>
					<App />
			</StaticRouter>
			</HelmetProvider>
		</StyleSheetManager>
	);
	const styleTags = sheet.getStyleTags()
	sheet.seal()

	const head = Object.keys(helmetContext.helmet).reduce((head, key) => {
		return head + helmetContext.helmet[key].toString()
	}, '');

	let html = baseHtml.replace('<!-- HEAD -->', (head + styleTags));
	html = html.replace('<!-- BODY -->', markUp);

	return { html, context };
};

app.use('/static', express.static(path.join(__dirname, './static')));

app.get('/*', (request, response) => {
	const { html, context } = generateMarkUp(request.url);

	if (context.statusCode) {
		return response.status(context.statusCode).send(html);
	}

	if (context.url) {
		return response.redirect(301, context.url);
	}

	return response.send(html);
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
});
