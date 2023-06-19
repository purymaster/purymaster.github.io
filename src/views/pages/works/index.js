import styled from 'styled-components';
import { Link } from 'react-router-dom';
import List from '@/data/work';

export default function Works() {
  return (
    <Container>
      Works
      <ul>
        {List.data.map((data) => (
          <li key={data.id}>
            <Link to={`/works/${data.acronym}`} state={data}>
              <img src={data.image?.url} alt="" />
              <div className="cover">{data.acronym}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div``;
