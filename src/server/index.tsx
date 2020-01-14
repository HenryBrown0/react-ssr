import * as React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import MarkdownIt from 'markdown-it';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import axios from 'axios';
import express from 'express';
import fs from 'fs';
import hljs from 'highlight.js';
import path from 'path';
import App from '../client/App';
import ServerSideData from '../contexts/serverSideDataContext';

const app: express.Application = express();
const port: string = '8080' || process.env.PORT;
const indexHtmlPath: string = path.join(__dirname, './static/index.html');
const baseHtml: string = fs.readFileSync(indexHtmlPath).toString();
const md = new MarkdownIt({
	highlight: (str, lang) => {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(lang, str).value;
			} catch (error) {
        console.error(error); // eslint-disable-line
			}
		}

		return ''; // use external default escaping
	}
});

const generateMarkUp = (url: string, data: Object) => {
	const sheet = new ServerStyleSheet();
	const helmetContext: any = {};
	const context: any = {};

	const markUp: string = ReactDOMServer.renderToString(
		<StyleSheetManager sheet={sheet.instance}>
			<HelmetProvider context={helmetContext}>
				<StaticRouter location={url} context={context}>
					<ServerSideData.Provider value={data}>
						<App />
					</ServerSideData.Provider>
				</StaticRouter>
			</HelmetProvider>
		</StyleSheetManager>
	);
	const styleTags = sheet.getStyleTags();
	sheet.seal();

	const head = Object.keys(helmetContext.helmet)
		.reduce((acc, key) => acc + helmetContext.helmet[key].toString(), '');

	const preloadedState = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

	let html = baseHtml.replace('<!-- HEAD -->', (head + styleTags));
	html = html.replace('<!-- BODY -->', markUp);
	html = html.replace('<!-- PRELOADEDSTATE -->', data ? preloadedState : '');

	return { html, context };
};

const getReadMe = async () => {
	const githubRequest = await axios.get('https://raw.githubusercontent.com/HenryBrown0/react-ssr/master/README.md');
	return md.render(githubRequest.data);
};

app.use('/static', express.static(path.join(__dirname, './static')));

app.get('/api/readme', async (_, response) => {
	response.header('Cache-Control', 'public, max-age=500');

	let readme: string;
	try {
		readme = await getReadMe();
	} catch (error) {
		response.status(500).send();
		return;
	}

	response.send(JSON.stringify(readme));
});

app.get('/readme', async (request, response) => {
	response.header('Cache-Control', 'public, max-age=500');

	let readme: string;
	try {
		readme = await getReadMe();
	} catch (error) {
		response.status(500).send();
		return;
	}

	const { html } = generateMarkUp(request.url, { readme });

	response.send(html);
});

app.get('/*', (request, response) => {
	const { html, context } = generateMarkUp(request.url, null);

	if (context.statusCode) {
		return response.status(context.statusCode).send(html);
	}

	if (context.url) {
		return response.redirect(301, context.url);
	}

	return response.send(html);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // eslint-disable-line
});
