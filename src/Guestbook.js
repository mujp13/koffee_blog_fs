import React, { Component } from 'react';

function GuestPost() {
  return (
    <div className="guest-post">
      <h3>Kevin Park</h3>
      <p>Your website is awesome. Thanks! I will visit your website next time!</p>
      <p id="date">05.10.2020</p>
    </div>
  );
}

export default class Guestbook extends Component {
  render() {
    return (
      <>
        <form className="Login__form">
          <div>
            <label htmlFor="person_name" />
            <input type="text" name="person_name" id="person_name" placeholder="Name" required />
          </div>
          <div>
            <label htmlFor="comment" />
            <textarea name="comment" id="comment" placeholder="Put your precious comments here" required></textarea>
          </div>
          <div className="send__button">
            <button type="submit">Send</button>
          </div>
        </form>
        <GuestPost />
        <GuestPost />
      </>
    );
  }
}
