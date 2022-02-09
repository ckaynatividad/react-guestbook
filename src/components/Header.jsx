import { useUser } from '../context/UserContext';

export const Header = () => {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <h2>
          signed in as <span>{user}</span>
        </h2>
      ) : (
        <h2>write in guestbook to sign in</h2>
      )}
    </header>
  );
};
