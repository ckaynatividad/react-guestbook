import React from 'react';
import { NavLink } from 'react-router-dom';
import './Head.css';

export default function Header() {
  return (
    <div className="head">
      <h2>Welcome to Meow Meow Wedding Planning</h2>
      <NavLink to="/guestbook">Guestbook</NavLink>
    </div>
  );
}
