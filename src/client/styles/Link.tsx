import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  flex: 1;
  background: transparent;
  text-align: center;
  border-radius: 0.2rem;
  border: 0.1rem solid palevioletred;
  color: palevioletred;
  padding: 0.25rem 1rem;
  text-decoration: none;
  margin: 0.1rem
`;

export default Button;
