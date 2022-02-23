import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { UserProvider } from '../../context/UserContext';
import Login from './Login';

test('login render', () => {
  const container = render(
    <MemoryRouter>
      <UserProvider>
        <Login />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});

test('can login', () => {
  const container = render(
    <MemoryRouter>
      <UserProvider>
        <Login email="test@test.com" password="password" />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
