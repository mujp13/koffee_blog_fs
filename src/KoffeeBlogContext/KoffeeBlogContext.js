import React from 'react';

const KoffeeBlogContext = React.createContext({
  blogs: [],
  guestbooks: [],
  addGuestbook: () => {},
});

export default KoffeeBlogContext;
