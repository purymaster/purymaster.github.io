import { useState } from 'react';
import { GlobalStyle } from '@assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import Routes from '@/router/Routes';
import { lightTheme, darkTheme } from './assets/styles/theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
}

export default App;
