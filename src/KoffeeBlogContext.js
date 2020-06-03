import React from 'react';

const KoffeeBlogContext = React.createContext({
  contents: [],
  deleteBlog: () => {},
});

export default KoffeeBlogContext;
