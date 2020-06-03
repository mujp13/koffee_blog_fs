import React from 'react';
import { Link } from 'react-router-dom';
import KoffeeBlogContext from './KoffeeBlogContext';
import './Blog.css';

export default function Blog({ blog }) {
  return (
    <KoffeeBlogContext.Consumer>
      {(context) => (
        <div className="blog-item">
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>
            this is a image of person. this is a image of person. this is a image of person. this is a image of person.
          </p>
          <p>2020-05-10</p>
        </div>
      )}
    </KoffeeBlogContext.Consumer>
  );
}
