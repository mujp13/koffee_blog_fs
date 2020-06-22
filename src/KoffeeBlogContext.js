import React from 'react';

const KoffeeBlogContext = React.createContext({
  blogs: [],
  deleteBlog: () => {},
});

export default KoffeeBlogContext;
