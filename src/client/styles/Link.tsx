import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
	padding: 0.25em 1em;
	text-decoration: none;
`;

export default Button;
