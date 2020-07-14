import React, { Component } from 'react';
import KoffeeBlogContext from '../KoffeeBlogContext/KoffeeBlogContext';
import './AddBlog.css';

export default class AddBlog extends Component {
  static contextType = KoffeeBlogContext;

  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // get the form fields from the event
    const { typeid, title, imageurl, content, rating, location } = e.target;
    const contents = {
      typeid: typeid.value,
      title: title.value,
      imageurl: imageurl.value,
      content: content.value,
      rating: rating.value,
      location: location.value,
    };

    this.setState({ error: null });

    fetch('https://friendly-donair-37840.herokuapp.com/api/contents', {
      method: 'POST',
      body: JSON.stringify(contents),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then((error) => {
            // then throw it
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.context.addBlog(data);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <>
        <h2>Add your own blog post here!</h2>
        <form className="add-blog-form" onSubmit={this.handleSubmit}>
          <div className="add-blog" role="alert">
            {error && <p>{error.messsage}</p>}
          </div>
          <p>Type</p>
          <select name="typeid" id="typeid">
            <option value="Bean">Bean</option>
            <option value="Iced Coffee">Iced Coffee</option>
            <option value="Brewing">Brewing</option>
            <option value="Drinks">Drinks</option>
          </select>
          <div>
            {' '}
            <p>Title</p>
            <textarea name="title" id="title" placeholder="(i.e. Delicious Coffe)" required></textarea>
          </div>
          <div>
            <p>Image URL(i.e. "...nameofphoto.jpg")</p>
            <textarea name="imageurl" id="imageurl" placeholder="(i.e. www.webiste.com/photo.jpg)"></textarea>
          </div>
          <div>
            {' '}
            <p>Description</p>
            <textarea name="content" id="content" placeholder="Put your description" required></textarea>
          </div>
          <div>
            {' '}
            <p>Rating(1~5)</p>
            <textarea
              name="rating"
              id="rating"
              placeholder="(1: worst, 2: bad, 3: so-so, 4: great, 5: best)"
            ></textarea>
          </div>
          <div>
            {' '}
            <p>Location</p>
            <textarea name="location" id="location" placeholder="(i.e. CA, TX, WA)"></textarea>
          </div>
          <br></br>
          <input className="submit-button" type="submit" value="Submit"></input>
        </form>
      </>
    );
  }
}
