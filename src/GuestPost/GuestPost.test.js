import React from 'react';
import ReactDOM from 'react-dom';
import GuestPost from './GuestPost';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <GuestPost />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

//snapshot
it('renders correctly', () => {
  const tree = renderer.create(<GuestPost />).toJSON();
  expect(tree).toMatchSnapshot();
});
