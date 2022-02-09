import { useUser } from '../context/UserContext';

export const Header = () => {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <p>
          signed in as <span>{user}</span>
        </p>
      ) : (
        <p>write in guestbook to sign in</p>
      )}
    </header>
  );
};
