import { GuestbookView } from './views/Guestbook/GuestbookView';
import './App.css';
import { Header } from './components/Guestbook/Header';
import { fetchApi } from './services/api.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Theme/globalStyles';
import { darkTheme, lightTheme } from './components/Theme/Themes';
import { useState } from 'react';
import Login from './views/Login/Login';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/guestbook">
              <GuestbookView />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
