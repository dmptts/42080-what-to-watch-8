import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/films';
import {VideoPlayer} from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  setActiveCard(id: number): void;
  isActive: boolean;
}

function FilmCard ({film, setActiveCard, isActive}: FilmCardProps): JSX.Element {
  const {id, name} = film;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoDelay = 1;

  useEffect(() => {
    let delay: ReturnType<typeof setTimeout> | undefined;

    if (isActive) {
      delay = setTimeout(() => {
        setIsVideoPlaying(true);
      }, videoDelay * 1000);
    }

    return () => {
      if (delay !== undefined) {
        clearTimeout(delay);
      }
      setIsVideoPlaying(false);
    };
  }, [isActive]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCard(id)}
      onMouseOut={() => setActiveCard(0)}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} isVideoPlaying={isVideoPlaying} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export {FilmCard};
