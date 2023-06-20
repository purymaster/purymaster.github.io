import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <h1>
        CHANGKEUN, KOO
        <span>UI Developer</span>
      </h1>
    </Container>
  );
}

const Container = styled.header`
  padding: 1em 0;
  font-size: 1.5em;
  text-align: center;
  h1 {
    font-weight: 700;
    span {
      margin-left: 0.5em;
      color: #f07171;
    }
  }
  @media (max-width: 1024px) {
    padding: 0.5em 0;
    font-size: 1.35em;
  }
`;
