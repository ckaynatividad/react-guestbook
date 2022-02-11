import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { EntryProvider } from '../../context/EntryContext';
import { UserProvider } from '../../context/UserContext';
import { GuestbookView } from './GuestbookView';
import userEvent from '@testing-library/user-event';
import Home from '../Home/Home';

test('renders guestbooks in app', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <GuestbookView />
      </UserProvider>
    </MemoryRouter>
  );

  const header = screen.getByText(/Welcome to Meow's and Meow's Guestbook/i);
  expect(header).toBeInTheDocument();

  const input = screen.getByLabelText(/Your Entry/i);
  expect(input).toBeInTheDocument();
});

test('renders signout', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <GuestbookView />
      </UserProvider>
    </MemoryRouter>
  );
  const name = screen.getByLabelText(/Name/i);
  userEvent.type(name, 'meow');

  const entry = screen.getByLabelText(/Your Entry/i);
  userEvent.type(entry, 'meows entry');

  const button = screen.getByText('Submit');
  userEvent.click(button);

  const signOut = screen.getByText('Not meow?');
  expect(signOut).toBeInTheDocument();
});

test('guestbook works', () => {
  const container = render(
    <MemoryRouter>
      <UserProvider>
        <EntryProvider>
          <GuestbookView name="meow" entry="meows entry" />
        </EntryProvider>
      </UserProvider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('goes back home', () => {
  render(
    <MemoryRouter initialEntries={['/guestbook']}>
      <UserProvider>
        <Route path="/guestbook">
          <GuestbookView />
        </Route>
      </UserProvider>
    </MemoryRouter>
  );
  const back = screen.getByText('go back');
  userEvent.click(back);
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const header = screen.getByText(/Welcome to Meow Meow Wedding Planning/i);
  expect(header).toBeInTheDocument();
});
