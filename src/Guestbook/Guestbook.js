import React, { Component } from 'react';
import KoffeeBlogContext from './KoffeeBlogContext/KoffeeBlogContext';
import './Guestbook.css';
import GuestPost from './GuestPost/GuestPost';

export default class Guestbook extends Component {
  static contextType = KoffeeBlogContext;

  state = {
    error: null,
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

    fetch('https://friendly-donair-37840.herokuapp.com/api/guestbook', {
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
        console.log(data);
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
        <h2>Thanks for visiting! Please come again!</h2>
        <form className="Login__form" onSubmit={this.handleSubmit}>
          <div className="addGuestbook" role="alert">
            {error && <p>{error.messsage}</p>}
          </div>
          <div>
            <label htmlFor="name" />
            <input type="text" name="name" id="name" placeholder="Name" required />
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
        <section className="guest-comment">
          {this.context.guestbooks.map((post) => (
            <GuestPost name={post.name} comment={post.comment} date={post.date_published} />
          ))}
        </section>
      </>
    );
  }
}
