import Entries from '../components/Entries';
import GuestBook from '../components/GuestBook';
import { Header } from '../components/Header';
import { EntryProvider } from '../context/EntryContext';
//import { EntryProvider } from '../context/EntryContext';

export const Home = () => {
  return (
    <EntryProvider>
      <Header />
      <GuestBook />
      <Entries />
    </EntryProvider>
  );
};
