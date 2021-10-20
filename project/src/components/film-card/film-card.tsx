import {Link} from 'react-router-dom';
import {Film} from '../../types/films';

type FilmCardProps = {
  film: Film;
  setActiveCard(id: number): void;
}

function FilmCard ({film, setActiveCard}: FilmCardProps): JSX.Element {
  const {id, name, previewImage} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCard(id)}
      onMouseOut={() => setActiveCard(0)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="/films/{id}">{name}</Link>
      </h3>
    </article>
  );
}

export {FilmCard};
