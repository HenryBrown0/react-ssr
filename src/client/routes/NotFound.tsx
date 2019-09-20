import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Link } from '../styles';

const NotFound: React.FC = () => (
	<Container>
		<Helmet>
			<title>Page not found | Henry Brown</title>
		</Helmet>
		<h1>Page not found</h1>
		<Link to='/'>Home</Link>
	</Container>
);

export default NotFound;
