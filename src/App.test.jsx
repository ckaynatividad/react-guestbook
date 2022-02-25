import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import Home from './views/Home/Home';

test('header renders', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const header = await screen.findByText(
    /Welcome to Meow Meow Wedding Planning/i
  );
  expect(header).toBeInTheDocument();
});

test('goes straight to guest book now', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  const header = screen.getByText(/login before seeing/i);
  expect(header).toBeInTheDocument();
});
