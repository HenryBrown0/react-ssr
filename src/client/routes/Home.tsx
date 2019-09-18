import React from 'react';
import { Container, Link } from '../styles';

const Home: React.FC = () => (
	<Container>
		<h1>Home</h1>
		<Link to='/about/'>About</Link>
	</Container>
);

export default Home;
