import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export default function Work() {

  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <Container>
      {data && (
        <>
          <h1>{data.name}</h1>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`

`;