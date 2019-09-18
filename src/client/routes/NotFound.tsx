import React from 'react';
import { Container, Link } from '../styles';

const NotFound: React.FC = () => (
	<Container>
		<h1>Page not found</h1>
		<Link to='/'>Home</Link>
	</Container>
);

export default NotFound;
