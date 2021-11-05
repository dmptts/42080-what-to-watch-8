import {useState} from 'react';
import {FilmCard} from '../film-card/film-card';
import {Films} from '../../types/films';

type FilmListProps = {
  films: Films
}

function FilmList ({films}: FilmListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film): JSX.Element => (
        <FilmCard
          key={film.id}
          film={film}
          setActiveCard={setActiveCard}
          isActive = {film.id === activeCard}
        />
      ))}
    </div>
  );
}

export {FilmList};
