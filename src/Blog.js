import React from 'react';
import { Link } from 'react-router-dom';
import KoffeeBlogContext from './KoffeeBlogContext';
import './Blog.css';

export default function Blog({ blog }) {
  return (
    <>
      <div className="blog-item">
        <h2>Blog title</h2>
        <p>
          this is a image of person. this is a image of person. this is a image of person. this is a image of person.
        </p>
        <p>2020-05-10</p>
      </div>
      <img class="cover" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/object-fit2.jpg"></img>
    </>
  );
}
