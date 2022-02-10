import React from 'react';
import { useEntries } from '../../context/EntryContext';
import './Entries.css';
import FakeEntries from './FakeEntries';
import Entry from './Entry';

export default function Entries() {
  const { entries } = useEntries();
  return (
    <div>
      <h2>All Entries</h2>
      <FakeEntries />
      <ul className="list">
        {entries.map((entry) => {
          return (
            <div className="fade" key={`"${entry.message} -${entry.name}"`}>
              <Entry entry={entry} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
