import React from 'react';
import './GuestPost.css';

export default function GuestPost(props) {
  return (
    <div className="guest-post">
      <h3>{props.name}</h3>
      <p>{props.comment}</p>
      <p>{props.date.toString()}</p>
    </div>
  );
}
