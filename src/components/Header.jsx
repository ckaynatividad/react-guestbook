import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useUser } from '../context/UserContext';
import { GlobalStyles } from './Theme/globalStyles';
import { darkTheme, lightTheme } from './Themes';

export const Header = () => {
  const { user } = useUser();
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button className="mode-button" onClick={themeToggler}>
        Switch Mode
      </button>
      <header>
        {user ? (
          <h2 className="fade">
            Thank you for signing, <span>{user}</span>.
          </h2>
        ) : (
          <h2>Welcome to Meow's and Meow's Guestbook</h2>
        )}
      </header>
    </ThemeProvider>
  );
};
