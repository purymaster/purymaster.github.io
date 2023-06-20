import styled from 'styled-components';
import { GitHub } from 'react-feather';

export default function Footer() {
  return (
    <Container>
      <p>Copyright 2023. CHANGKEUN KOO all rights reserved.</p>
      <ul className="sns">
        <li>
          <a href="https://github.com/purymaster" target="_blank" rel="noreferrer">
            <GitHub size={20} />
          </a>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.footer`
  position: relative;
  margin: 30px 0;
  font-size: 14px;
  text-align: center;
  .sns {
    display: flex;
    position: absolute;
    top: 50%;
    right: 0;
    gap: 0 5px;
    transform: translateY(-50%);
    li {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 1024px) {
    margin: 15px 0;
    font-size: 12px;
  }
`;
