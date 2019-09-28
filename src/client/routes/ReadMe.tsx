import React, {
  Fragment, useContext, useEffect, useState
} from 'react';
import { Helmet } from 'react-helmet-async';
import { ButtonContainer, Container, Link } from '../styles';
import ServerSideDate from '../../contexts/serverSideDataContext';

const ReactMe: React.FC = () => {
  const { readme: ServerSideReadMe } = useContext(ServerSideDate || null);
  const [readMe, setReadMe] = useState(ServerSideReadMe);

  const [error, setError] = useState();

  const getReadMe = async (signal: AbortSignal) => {
    const response = await fetch('/api/readme', { signal });

    if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);

    return response.json();
  };

  useEffect(() => {
    const controller = new AbortController();

    if (!readMe) {
      getReadMe(controller.signal)
        .then((response) => setReadMe(response))
        .catch((responseError) => {
          const errorMessage = responseError.message || responseError.toString();
          setError(errorMessage);
        });
    }

    return () => {
      if (!readMe) controller.abort();
    };
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Read Me | Henry Brown</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css' />
      </Helmet>
      <Container centreItems pageHeight={60}>
        <h1>Read Me</h1>
        <ButtonContainer>
          <Link to='/'>Home</Link>
        </ButtonContainer>
      </Container>
      { error && (
        <Container centreItems>
          {error}
        </Container>
      )}
      { readMe && (
        <Container>
          {readMe && <div dangerouslySetInnerHTML={{ __html: readMe }} />}
        </Container>
      )}
    </Fragment>
  );
};

export default ReactMe;
