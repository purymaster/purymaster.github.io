import { useContext } from 'react';
import { Moon, Sun } from 'react-feather';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Box from '@views/shared/box';
import { ThemeContext } from '@/App';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Container>
      <Box>
        <h1>
          <Link to="/">
            CHANGKEUN, KOO
            <span>UI Developer</span>
          </Link>
        </h1>
        <button type="button" className="theme" onClick={toggleDarkMode}>
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </Box>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  background: ${(props) => props.theme.backgroundColor};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.backgroundColor} 0%,
    ${(props) => props.theme.backgroundColor} 90%,
    rgba(0, 0, 0, 0) 100%
  );
  font-size: 1.5em;
  text-align: center;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    span {
      margin-left: 0.5em;
      color: ${(props) => props.theme.primaryColor};
    }
  }
  .theme {
    position: absolute;
    top: 50%;
    right: 30px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    padding: 0;
    border: 0;
    background: none;
    color: ${(props) => props.theme.secondaryColor};
    @media (max-width: 599px) {
      right: 15px;
    }
  }
  @media (max-width: 1024px) {
    height: 50px;
    font-size: 1.35em;
  }
`;
