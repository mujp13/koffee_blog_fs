import React from 'react';
import ReactDOM from 'react-dom';
import Guestbook from './Guestbook';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Guestbook />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Guestbook />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
