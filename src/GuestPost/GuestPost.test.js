import React from 'react';
import ReactDOM from 'react-dom';
import GuestPost from './GuestPost';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GuestPost />, div);

  ReactDOM.unmountComponentAtNode(div);
});

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
