import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useUser } from '../../context/UserContext';
import { GlobalStyles } from '../Theme/globalStyles';
import { darkTheme, lightTheme } from '../Theme/Themes';

export const Header = () => {
  const { user, logout } = useUser();
  const [theme, setTheme] = useState('light');
  const history = useHistory();
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const handleLogout = () => {
    logout(() => history.push('/login'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button className="mode-button" onClick={themeToggler}>
        Switch Mode
      </button>
      <p>
        <NavLink to="/">go back</NavLink>
      </p>
      <header>
        {user ? (
          <h2 className="fade">
            Thank you for signing, <span>{user.email}</span>.
            <button onClick={handleLogout}>Log Out</button>
          </h2>
        ) : (
          <h2>Welcome to Meow's and Meow's Guestbook</h2>
        )}
      </header>
    </ThemeProvider>
  );
};
