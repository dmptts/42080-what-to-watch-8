import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={films[0]}
      films = {films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
