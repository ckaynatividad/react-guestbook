import { GuestbookView, Home } from './views/Guestbook/GuestbookView';
import './App.css';
import { Header } from './components/Guestbook/Header';
import { fetchApi } from './services/api.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  const hi = fetchApi();
  console.log(hi);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <p>hi</p>
          </Route>
          <Route path="/guestbook">
            <Header />
            <GuestbookView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
