import React, { Component } from 'react';
import './Blog.css';

export default class Blog extends Component {
  state = {
    show: false,
  };

  clickShowMore = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <div className="blog-item">
          <h2>{this.props.title}</h2>
          <p className={this.state.show ? 'show-detail' : 'blog-content'}>{this.props.content}</p>
          <button onClick={this.clickShowMore}>{this.state.show ? 'Hide' : 'Show More'}</button>
          <p>{this.props.date_published}</p>
          <img className="blog-image" src={this.props.imageurl} />
        </div>
      </>
    );
  }
}
