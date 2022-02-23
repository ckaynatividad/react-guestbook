import React from 'react';
import { useEntries } from '../../context/EntryContext';
import './Entries.css';
import FakeEntries from './FakeEntries';
import Entry from './Entry';
import { useUser } from '../../context/UserContext';

export default function Entries() {
  const { entries } = useEntries();
  const {
    user: { email },
  } = useUser();
  return (
    <div>
      <h2>All Entries</h2>
      <FakeEntries />
      <ul className="list">
        {entries.map((entry) => {
          return (
            <div className="fade" key={`"${entry.message} -${email}"`}>
              <Entry entry={entry} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
