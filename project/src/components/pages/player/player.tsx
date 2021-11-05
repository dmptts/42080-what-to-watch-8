import {useState} from 'react';
import {VideoStatus} from '../../../const';
import {Films} from '../../../types/films';
import {VideoPlayer} from '../../video-player/video-player';

type PlayerProps = {
  films: Films
}

function Player ({films}: PlayerProps): JSX.Element {
  const [videoStatus, setVideoStatus] = useState(VideoStatus.Stopped);

  const film = films[0];

  return (
    <div className="player">
      <VideoPlayer film={film} videoStatus={videoStatus} setVideoStatus={setVideoStatus} controls />
    </div>
  );
}

export {Player};
