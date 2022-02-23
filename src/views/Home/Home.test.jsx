import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import { GuestbookView } from '../Guestbook/GuestbookView';

import Home from './Home';

test('renders detail when routing', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <Home />
      </Route>
    </MemoryRouter>
  );
  const text = screen.getByText('click on slides for details');
  expect(text).toBeInTheDocument();
});

// test('goes to guestbook', () => {
//   render(
//     <MemoryRouter initialEntries={['/']}>
//       <Route path="/">
//         <Home />
//       </Route>
//     </MemoryRouter>
//   );
//   const link = screen.getByText('Guestbook');
//   userEvent.click(link);
//   render(
//     <MemoryRouter>
//       <UserProvider>
//         <GuestbookView />
//       </UserProvider>
//     </MemoryRouter>
//   );
//   const header = screen.getByText(/Welcome to Meow's and Meow's Guestbook/i);
//   expect(header).toBeInTheDocument();
// });

test('slideshow renders', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <Home />
      </UserProvider>
    </MemoryRouter>
  );
  expect(container.getElementsByClassName('slideshow').length).toBe(1);
});
