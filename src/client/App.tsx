import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
	Home, NotFound, ReadMe, Status
} from './routes';

const App: React.FC = () => (
	<Fragment>
		<Helmet>
			<title>Henry Brown</title>
		</Helmet>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/readme/' component={ReadMe} />
			<Status code={404}><NotFound /></Status>
		</Switch>
	</Fragment>
);

export default App;
