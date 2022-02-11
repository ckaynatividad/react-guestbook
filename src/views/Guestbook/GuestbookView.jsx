import { NavLink } from 'react-router-dom';
import Entries from '../../components/Guestbook/Entries';
import GuestBook from '../../components/Guestbook/GuestBook';
import { Header } from '../../components/Guestbook/Header';

import { EntryProvider } from '../../context/EntryContext';
import './GuestbookView.css';

export const GuestbookView = () => {
  return (
    <EntryProvider>
      <Header />
      <div className="fade">
        <div className="meow">
          <GuestBook />
        </div>

        <div className="entries">
          <Entries />
        </div>
      </div>
    </EntryProvider>
  );
};
