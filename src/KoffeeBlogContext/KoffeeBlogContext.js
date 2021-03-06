import React from 'react';

const KoffeeBlogContext = React.createContext({
  blogs: [],
  guestbooks: [],
  addGuestbook: () => {},
  loadData: () => {},
});

export default KoffeeBlogContext;
