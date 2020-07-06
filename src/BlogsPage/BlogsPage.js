import React, { Component } from 'react';
import Blog from '../Blog/Blog';
import './BlogsPage.css';
import KoffeeBlogContext from '../KoffeeBlogContext/KoffeeBlogContext';

export default class BlogsPage extends Component {
  static contextType = KoffeeBlogContext;

  state = {
    types: ['Bean', 'Iced Coffee', 'Brewing', 'Drinks'],
    filteredType: null,
  };

  changeType = (type) => {
    this.setState({
      filteredType: type,
    });
  };

  render() {
    return (
      <>
        <div className="blog-type">
          {this.state.types.map((type) => (
            <button onClick={(e) => this.changeType(type)}>{type}</button>
          ))}
        </div>
        <div className="blog-list">
          {this.state.filteredType
            ? this.context.blogs
                .filter((type) => type.typeid === this.state.filteredType)
                .map((blog) => (
                  <Blog title={blog.title} content={blog.content} imageurl={blog.imageurl} date={blog.date_published} />
                ))
            : this.context.blogs.map((blog) => (
                <Blog title={blog.title} content={blog.content} imageurl={blog.imageurl} date={blog.date_published} />
              ))}
        </div>
      </>
    );
  }
}
