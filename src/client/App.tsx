import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, About, Status, NotFound } from './routes';

const App: React.FC = () => {
	return (
		<Fragment>
			<Helmet>
				<title>Henry Brown</title>
			</Helmet>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about/' component={About} />
				<Status code={404}><NotFound /></Status>
			</Switch>
		</Fragment>
	);
};

export default App;
