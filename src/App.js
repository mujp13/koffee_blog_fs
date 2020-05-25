import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogsPage from './BlogsPage';
import Guestbook from './Guestbook';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={BlogsPage} />
        <Route exact path="/guestbook" component={Guestbook} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
