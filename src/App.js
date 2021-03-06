import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BlogsPage from './BlogsPage/BlogsPage';
import Guestbook from './Guestbook/Guestbook';
import AddBlog from './AddBlog/AddBlog';
import { Route } from 'react-router-dom';
import KoffeeBlogContext from './KoffeeBlogContext/KoffeeBlogContext';

class App extends Component {
  state = {
    error: null,
    contentIsLoaded: false,
    blogs: [],
    guestbooks: [],
  };

  addGuestbook = (gb) => {
    this.setState({
      guestbooks: [...this.state.guestbooks, gb],
    });
  };

  addBlog = (up) => {
    this.setState({
      blogsss: [...this.state.blogs, up],
    });
  };

  loadData = () => {
    fetch('https://friendly-donair-37840.herokuapp.com/api/contents', {
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

    fetch('https://friendly-donair-37840.herokuapp.com/api/guestbook', {
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
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const contextValue = {
      blogs: this.state.blogs,
      guestbooks: this.state.guestbooks,
      addGuestbook: this.addGuestbook,
      addBlog: this.addBlog,
      loadData: this.loadData,
    };

    return (
      <KoffeeBlogContext.Provider value={contextValue}>
        <Header />
        <Route exact path="/" component={BlogsPage} />
        <Route exact path="/guestbook" component={Guestbook} />
        <Route exact path="/addblog" component={AddBlog} />
        <Footer />
      </KoffeeBlogContext.Provider>
    );
  }
}

export default App;
