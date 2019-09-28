import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 425px) {
    flex-direction: row
    max-width: 425px;
  }
`;

export default ButtonContainer;
