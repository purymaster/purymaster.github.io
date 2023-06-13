import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Works() {
  return (
    <Container>
      Works
      <ul>
        <li>
          <Link to={"works/1"}>Link</Link>
        </li>
      </ul>
    </Container>
  )
};

const Container = styled.div`

`;