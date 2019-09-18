import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Status, NotFound } from './routes';

const App: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about/' component={About} />
			<Status code={404}><NotFound /></Status>
		</Switch>
	);
};

export default App;
