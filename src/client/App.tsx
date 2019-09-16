import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Status } from './routes';

const App: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about/' component={About} />
			<Status code={404}>
				<h1>404</h1>
			</Status>
		</Switch>
	);
};

export default App;
