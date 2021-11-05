import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {VideoStatus} from '../../const';
import {Film} from '../../types/films';
import {VideoPlayer} from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  setActiveCard(id: number): void;
  isActive: boolean;
}

function FilmCard ({film, setActiveCard, isActive}: FilmCardProps): JSX.Element {
  const {id, name} = film;

  const VIDEO_DELAY = 1;

  const [videoStatus, setVideoStatus] = useState(VideoStatus.Stopped);


  useEffect(() => {
    let delay: ReturnType<typeof setTimeout> | undefined;

    if (isActive) {
      delay = setTimeout(() => {
        setVideoStatus(VideoStatus.Playing);
      }, VIDEO_DELAY * 1000);
    }

    return () => {
      if (delay !== undefined) {
        clearTimeout(delay);
      }
      setVideoStatus(VideoStatus.Stopped);
    };
  }, [isActive]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCard(id)}
      onMouseOut={() => setActiveCard(0)}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} videoStatus={videoStatus} setVideoStatus={setVideoStatus} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export {FilmCard};
