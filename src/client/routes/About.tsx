import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Link } from '../styles';

const About: React.FC = () => (
	<Container>
		<Helmet>
			<title>About | Henry Brown</title>
		</Helmet>
		<h1>About</h1>
		<Link to='/'>Home</Link>
	</Container>
);

export default About;
