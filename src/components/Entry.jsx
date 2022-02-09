import React from 'react';

export default function Entry({ entry: { name, message } }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{message}</p>
    </div>
  );
}
