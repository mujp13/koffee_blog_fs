import React, { Component } from 'react';

export default class Guestbook extends Component {
  render() {
    return (
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
    );
  }
}
