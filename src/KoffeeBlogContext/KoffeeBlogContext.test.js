import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import KoffeeBlogContext from './KoffeeBlogContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <KoffeeBlogContext />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <KoffeeBlogContext />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
