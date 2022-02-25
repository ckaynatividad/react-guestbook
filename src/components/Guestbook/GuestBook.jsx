import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './GuestBook.css';

export default function GuestBook() {
  const [entry, setEntry] = useState('');
  const { user } = useUser();
  const { entries, setEntries } = useEntries();

  function updateList() {
    if (!entry) return;
    setEntries([...entries, { user, message: entry }]);
    setEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
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

        <p>
          <button className="submit" type="submit">
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
