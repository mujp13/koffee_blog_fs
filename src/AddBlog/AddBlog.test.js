import React from 'react';
import ReactDOM from 'react-dom';
import AddBlog from './AddBlog';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

//smoke
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

//snapshot
it('renders correctly', () => {
  const tree = renderer.create(<AddBlog />).toJSON();
  expect(tree).toMatchSnapshot();
});
