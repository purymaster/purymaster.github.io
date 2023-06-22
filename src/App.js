import { useState, useEffect, createContext } from 'react';
import { GlobalStyle } from '@assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import Routes from '@/router/Routes';
import { lightTheme, darkTheme } from './assets/styles/theme';

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const toggleDarkMode = () => {
    const theme = !isDarkMode;
    setIsDarkMode(theme);
    localStorage.setItem('isDarkMode', theme);
  };

  useEffect(() => {
    const userTheme = localStorage.getItem('isDarkMode');
    if (userTheme !== null) {
      setIsDarkMode(userTheme === 'true');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
