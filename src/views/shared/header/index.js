import { useContext } from 'react';
import { Moon, Sun } from 'react-feather';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ThemeContext } from '@/App';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Container>
      <h1>
        <Link to="/">
          CHANGKEUN, KOO
          <span>UI Developer</span>
        </Link>
      </h1>
      <button type="button" className="theme" onClick={toggleDarkMode}>
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  padding: 1em 0;
  font-size: 1.5em;
  text-align: center;
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
    right: 0;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    border: 0;
    background: none;
    color: ${(props) => props.theme.secondaryColor};
  }
  @media (max-width: 1024px) {
    padding: 0.5em 0;
    font-size: 1.35em;
  }
`;
