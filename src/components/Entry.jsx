import React from 'react';
import './Entry.css';

export default function Entry({ entry: { name, message } }) {
  return (
    <div>
      <p className="msg">"{message}"</p>
      <p className="name">- {name}</p>
    </div>
  );
}
