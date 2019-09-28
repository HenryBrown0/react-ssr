import { Helmet } from 'react-helmet-async';
import React from 'react';
import { ButtonContainer, Container, Link } from '../styles';

const Home: React.FC = () => (
  <Container centreItems pageHeight={100}>
    <Helmet>
      <title>Home | Henry Brown</title>
    </Helmet>
    <h1>Home</h1>
    <ButtonContainer>
      <Link to='/readme/'>Read Me</Link>
    </ButtonContainer>
  </Container>
);

export default Home;
