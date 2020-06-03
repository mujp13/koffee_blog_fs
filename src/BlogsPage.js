import React, { Component } from 'react';
import Blog from './Blog';

function BlogSearch() {
  return <p>Search bar here</p>;
}

export default class BlogsPage extends Component {
  render() {
    return (
      <>
        <BlogSearch />
        <div className="blog-list">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </>
    );
  }
}
