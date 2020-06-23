import React, { Component } from 'react';
import './GuestPost.css';
import KoffeeBlogContext from './KoffeeBlogContext';

export default class GuestPost extends Component {
  static contextType = KoffeeBlogContext;

  render() {
    //const { guestbooks } = this.context;
    return (
      <div className="guest-post">
        <h3>{this.context.guestbooks.name}</h3>
        <p>{this.context.guestbooks.comment}</p>
        <p>{this.context.guestbooks.date_published}</p>
      </div>
    );
  }
}
