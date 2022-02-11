import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { EntryProvider } from '../../context/EntryContext';
import { UserProvider } from '../../context/UserContext';
import { GuestbookView } from './GuestbookView';
import userEvent from '@testing-library/user-event';

test.skip('renders guestbooks in app', () => {
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

test.skip('renders signout', () => {
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

test.skip('guestbook works', () => {
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
