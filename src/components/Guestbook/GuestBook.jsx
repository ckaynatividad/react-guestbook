import React, { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
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
        Name: &nbsp;
        <input
          id="guestName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {user ? <p>Your entry has been submitted.</p> : guestForm}
        {!user && (
          <label>
            Your Entry:&nbsp;
            <input
              className="yeah"
              type="text"
              id="entry-box"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
          </label>
        )}
        <p>
          {!user && (
            <button className="submit" type="submit">
              Submit
            </button>
          )}
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
        </p>
      </form>
    </div>
  );
}
