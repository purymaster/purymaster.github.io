import styled from 'styled-components';

export default function Box({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 599px) {
    padding: 0 15px;
  }
`;
