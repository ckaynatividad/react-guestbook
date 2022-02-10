import Entries from '../components/Entries';
import GuestBook from '../components/GuestBook';

import { EntryProvider } from '../context/EntryContext';
import './Home.css';

export const Home = () => {
  return (
    <EntryProvider>
      <div className="meow"></div>
      <div className="meow">
        <GuestBook />
      </div>

      <div className="entries">
        <Entries />
      </div>
    </EntryProvider>
  );
};
