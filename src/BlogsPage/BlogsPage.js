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

  componentDidMount() {
    this.context.loadData();
  }

  render() {
    return (
      <>
        <div className="blog-type">
          {this.state.types.map((type, index) => (
            <button key={index} className="type-button" onClick={(e) => this.changeType(type)}>
              {type}
            </button>
          ))}
          <div className="ph-clear"></div>
        </div>
        <div className="blog-list">
          {this.state.filteredType
            ? this.context.blogs
                .filter((type) => type.typeid === this.state.filteredType)
                .map((blog, index) => (
                  <Blog
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    imageurl={blog.imageurl}
                    date={blog.date_published}
                  />
                ))
            : this.context.blogs.map((blog, index) => (
                <Blog
                  key={index}
                  title={blog.title}
                  content={blog.content}
                  imageurl={blog.imageurl}
                  rating={blog.rating}
                  location={blog.location}
                />
              ))}
        </div>
      </>
    );
  }
}
