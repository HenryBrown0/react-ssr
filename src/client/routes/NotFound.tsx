import { Helmet } from 'react-helmet-async';
import React from 'react';
import { ButtonContainer, Container, Link } from '../styles';

const NotFound: React.FC = () => (
	<Container centreItems pageHeight={100}>
		<Helmet>
			<title>Page not found | Henry Brown</title>
		</Helmet>
		<h1>Page not found</h1>
		<ButtonContainer>
			<Link to='/'>Home</Link>
		</ButtonContainer>
	</Container>
);

export default NotFound;
