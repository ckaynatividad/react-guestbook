import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Entries from '../components/Entries';
import GuestBook from '../components/GuestBook';
import { Header } from '../components/Header';
import { GlobalStyles } from '../components/Theme/globalStyles';
import { darkTheme, lightTheme } from '../components/Theme/Themes';
import { EntryProvider } from '../context/EntryContext';
//import { EntryProvider } from '../context/EntryContext';

export const Home = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="main">
        <button onClick={themeToggler}>Switch</button>
        <EntryProvider>
          <Header />
          <GuestBook />
          <Entries />
        </EntryProvider>
      </div>
    </ThemeProvider>
  );
};
