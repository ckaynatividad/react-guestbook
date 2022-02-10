import { NavLink } from 'react-router-dom';
import Entries from '../../components/Guestbook/Entries';
import GuestBook from '../../components/Guestbook/GuestBook';

import { EntryProvider } from '../../context/EntryContext';
import './GuestbookView.css';

export const GuestbookView = () => {
  return (
    <EntryProvider>
      <div className="meow">
        <GuestBook />
      </div>

      <div className="entries">
        <Entries />
      </div>
    </EntryProvider>
  );
};
