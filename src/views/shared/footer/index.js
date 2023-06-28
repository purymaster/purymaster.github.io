import styled from 'styled-components';
import { GitHub } from 'react-feather';

import Box from '@views/shared/box';

export default function Footer() {
  return (
    <Container>
      <Box>
        <p>Copyright 2023. CHANGKEUN KOO all rights reserved.</p>
        <ul className="sns">
          <li>
            <a href="https://github.com/purymaster" target="_blank" rel="noreferrer">
              <GitHub size={20} />
            </a>
          </li>
        </ul>
      </Box>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.backgroundColor};
  background: ${(props) => props.theme.backgroundColor};
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.backgroundColor} 0%,
    ${(props) => props.theme.backgroundColor} 90%,
    rgba(0, 0, 0, 0) 100%
  );
  font-size: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
  .sns {
    display: flex;
    position: absolute;
    top: 50%;
    right: 30px;
    gap: 0 5px;
    transform: translateY(-50%);
    li {
      width: 20px;
      height: 20px;
      color: ${(props) => props.theme.secondaryColor};
    }
    @media (max-width: 599px) {
      right: 15px;
    }
  }
`;
