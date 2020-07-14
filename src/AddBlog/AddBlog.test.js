// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import AddBlog from './AddBlog';

import { MemoryRouter } from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<AddBlog />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

//snapshot
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <AddBlog />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
