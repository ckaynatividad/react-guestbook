import React, { useState } from 'react';
import { useEntries } from '../context/EntryContext';
import { useUser } from '../context/UserContext';
import './GuestBook.css';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  function updateList() {
    if (!entry) return;
    setUser(name);
    setEntries([...entries, { name, message: entry }]);
    setEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  const guestForm = (
    <div>
      <label>
        Guest Name:
        <input
          id="guestName"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );

  const displayMsg = user
    ? `thanks ${user}, you can look at other entries if there are any`
    : 'please sign guest book';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {user ? null : guestForm}
        <label>
          Guest Entry:
          <input
            className="yeah"
            type="text"
            id="entry-box"
            value={entry}
            placeholder="Type here"
            onChange={(e) => setEntry(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        {user && (
          <button
            type="button"
            onClick={() => {
              setUser('');
              setName('');
            }}
          >
            Not {user}?
          </button>
        )}
      </form>
      <p>{displayMsg}</p>
    </div>
  );
}
