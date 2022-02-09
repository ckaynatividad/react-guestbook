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

  const header = screen.getByText(/write in guestbook to sign in/i);
  expect(header).toBeInTheDocument();

  const input = screen.getByLabelText(/Guest Entry/i);
  expect(input).toBeInTheDocument();
});

test('renders list', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
  const name = screen.getByLabelText(/Guest Name/i);
  userEvent.type(name, 'meow');

  const entry = screen.getByLabelText(/Guest Entry/i);
  userEvent.type(entry, 'meows entry');

  const button = screen.getByRole('button');
  userEvent.click(button);

  const msg = screen.getByRole('list');
  expect(msg).toBeInTheDocument();
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
