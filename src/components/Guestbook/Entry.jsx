import React from 'react';
import './Entry.css';

export default function Entry({ entry: { user, message } }) {
  return (
    <div>
      <p className="msg">"{message}"</p>
      <p className="name">- {user.email}</p>
    </div>
  );
}
