import { useState, createContext } from 'react';
import { GlobalStyle } from '@assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import Routes from '@/router/Routes';
import { lightTheme, darkTheme } from './assets/styles/theme';

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
