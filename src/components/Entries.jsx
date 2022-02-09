import React from 'react';
import { useEntries } from '../context/EntryContext';
import Entry from './Entry';

export default function Entries() {
  const { entries } = useEntries();
  return (
    <div>
      <ul className="list">
        {entries.map((entry) => {
          return (
            <li key={`"${entry.message} -${entry.name}"`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
