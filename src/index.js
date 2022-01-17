import React from 'react';
import ReactDOM from 'react-dom';

import Books from './pages/Books';
import Categories from './pages/Categories';

ReactDOM.render(
  <React.StrictMode>
    <Books />
    <Categories />
  </React.StrictMode>,
  document.getElementById('root'),
);
