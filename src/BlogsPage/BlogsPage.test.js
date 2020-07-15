import React from 'react';
import ReactDOM from 'react-dom';
import BlogsPage from './BlogsPage';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <BlogsPage />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

//snapshot
it('renders correctly', () => {
  const tree = renderer.create(<BlogsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
