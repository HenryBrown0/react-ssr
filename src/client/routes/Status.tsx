import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom'; 

const Status: React.FC<{ code: number, children: ReactNode }> = (props) => {
	const { code, children } = props;
	return (
		<Route render={({ staticContext }) => {
			if (staticContext) {
				staticContext.statusCode = code;
			}
			return children;
		}} />
	);
}

export default Status;
