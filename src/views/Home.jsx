import Entries from '../components/Entries';
import GuestBook from '../components/GuestBook';
import { EntryProvider } from '../context/EntryContext';
//import { EntryProvider } from '../context/EntryContext';

export const Home = () => {
  return (
    <EntryProvider>
      <GuestBook />
      <Entries />
    </EntryProvider>
  );
};
