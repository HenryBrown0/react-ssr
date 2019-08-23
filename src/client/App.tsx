import React, { useState, Fragment } from 'react';

const App: React.FC = () => {
	const [count, setCounter] = useState(0);
	return (
		<Fragment>
			<h1 className="fadeIn">
				Hell World
				{count}
			</h1>
			<button onClick={() => setCounter(count + 1)}>Click me</button>
  </Fragment>
	);
};

export default App;
