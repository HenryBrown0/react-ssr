import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Link } from '../styles';

const Home: React.FC = () => (
  <Container>
    <Helmet>
      <title>Home | Henry Brown</title>
    </Helmet>
    <h1>Home</h1>
    <Link to='/about/'>About</Link>
  </Container>
);

export default Home;
