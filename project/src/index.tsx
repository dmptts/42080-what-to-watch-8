import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Films} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      title = "The Grand Budapest Hotel"
      genre = "Drama"
      releaseDate = "2014"
      films = {Films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
