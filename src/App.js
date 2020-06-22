import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogsPage from './BlogsPage';
import Guestbook from './Guestbook';
import { Route } from 'react-router-dom';
import KoffeeBlogContext from './KoffeeBlogContext';

class App extends Component {
  state = {
    error: null,
    contentIsLoaded: false,
    blogs: [],
    guestbooks: [],
  };

  addGuestbook = (gb) => {
    this.setState({
      gb: [...this.state.guestbooks, gb],
    });
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/contents', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            contentIsLoaded: true,
            blogs: result,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            contentIsLoaded: false,
            error,
          });
        }
      );

    fetch('http://localhost:8000/api/guestbook', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            contentIsLoaded: true,
            guestbooks: result,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            contentIsLoaded: false,
            error,
          });
        }
      );
  }

  render() {
    const contextValue = {
      blogs: this.state.blogs,
      guestbooks: this.state.guestbooks,
      addGuestbook: this.addGuestbook,
    };

    return (
      <KoffeeBlogContext.Provider value={contextValue}>
        <Header />
        <Route exact path="/" component={BlogsPage} />
        <Route exact path="/guestbook" component={Guestbook} />
        <Footer />
      </KoffeeBlogContext.Provider>
    );
  }
}

export default App;
