import React, { Component } from 'react';
import KoffeeBlogContext from './KoffeeBlogContext';
import './Guestbook.css';
import GuestPost from './GuestPost';

export default class Guestbook extends Component {
  static contextType = KoffeeBlogContext;

  state = {
    error: null,
    guestbooks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // get the form fields from the event
    const { name, comment } = e.target;
    const guestbook = {
      name: name.value,
      comment: comment.value,
    };

    this.setState({ error: null });

    fetch('http://localhost:8000/api/guestbook', {
      method: 'POST',
      body: JSON.stringify(guestbook),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then((error) => {
            // then throw it
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        name.value = '';
        this.context.addGuestbook(data);
        this.props.history.push('/guestbook');
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <>
        <form className="Login__form" onSubmit={this.handleSubmit}>
          <div className="addGuestbook" role="alert">
            {error && <p>{error.messsage}</p>}
          </div>
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
          {this.state.guestbooks.map((post) => (
            <GuestPost name={post.name} comment={post.comment} date={post.date} />
          ))}
        </section>
      </>
    );
  }
}
