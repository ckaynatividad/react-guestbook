import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

test('header renders', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const header = await screen.findByText(
    /Welcome to Meow Meow Wedding Planning/i
  );
  expect(header).toBeInTheDocument();
});

test('link renders guestbook', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  const link = await screen.findByRole('link', { name: /guestbook/i });
  userEvent.click(link);
  const header = screen.getByText(/Welcome to Meow's and Meow's Guestbook/i);
  expect(header).toBeInTheDocument();
});
