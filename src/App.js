import { useState } from 'react';
import { GlobalStyle } from '@assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Routes from '@/router/Routes';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = {
    backgroundColor: '#fff',
    textColor: '#333',
    primaryColor: '#f07171',
  };

  const darkTheme = {
    backgroundColor: '#252525',
    textColor: '#fff',
    primaryColor: '#eb64ac',
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider key={isDarkMode ? 'dark' : 'light'} theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
}

export default App;
