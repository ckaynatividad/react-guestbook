import { render, screen } from '@testing-library/react';
import App from './App';
import GuestBook from './components/GuestBook';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';
import userEvent from '@testing-library/user-event';

test('renders guestbooks in app', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );

  const header = screen.getByText(/Welcome to Meow's and Meow's Guestbook/i);
  expect(header).toBeInTheDocument();

  const input = screen.getByLabelText(/Your Entry/i);
  expect(input).toBeInTheDocument();
});

test('renders signout', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
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
    <UserProvider>
      <EntryProvider>
        <GuestBook name="meow" entry="meows entry" />
      </EntryProvider>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
