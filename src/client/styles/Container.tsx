import styled from 'styled-components';

type IContainer = {
  pageHeight?: number,
  centreItems?: Boolean
};

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.centreItems ? 'center' : 'initial')};
  align-items: ${(props) => (props.centreItems ? 'center' : 'initial')};
  min-height: ${(props) => (props.pageHeight ? `${props.pageHeight}vh` : '0')};
  font-family: sans-serif;
  margin: 0.5rem;
`;

export default Container;
