import React, { Component } from 'react';
import Blog from './Blog';

export default class BlogsPage extends Component {
  render() {
    return (
      <div className="blog-list">
        <Blog />
        <Blog />
        <Blog />
      </div>
    );
  }
}
