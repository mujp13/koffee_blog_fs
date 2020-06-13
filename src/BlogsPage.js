import React, { Component } from 'react';
import Blog from './Blog';
import './BlogsPage.css';

export default class BlogsPage extends Component {
  render() {
    return (
      <>
        <div className="blog-list">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </>
    );
  }
}
