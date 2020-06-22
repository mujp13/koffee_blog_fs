import React, { Component } from 'react';
import './Guestbook.css';
import GuestPost from './GuestPost';

export default class Guestbook extends Component {
  state = {
    guestPosts: [
      {
        name: 'Mario',
        comment: 'hello world',
        date: new Date(),
      },
      {
        name: 'Kevin',
        comment: 'hello world',
        date: new Date(),
      },
    ],
  };

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
            <button className="button" type="submit">
              Send
            </button>
          </div>
        </form>
        <section classsName="guest-comment">
          {this.state.guestPosts.map((post) => (
            <GuestPost name={post.name} comment={post.comment} date={post.date} />
          ))}
        </section>
      </>
    );
  }
}
