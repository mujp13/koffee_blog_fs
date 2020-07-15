import React, { Component } from 'react';
import './GuestPost.css';

export default class GuestPost extends Component {
  render() {
    return (
      <div className="guest-post">
        <h3>{this.props.name}</h3>
        <p>{this.props.comment}</p>
        <p>{this.props.date}</p>
      </div>
    );
  }
}
