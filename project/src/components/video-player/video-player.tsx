import {Film} from '../../types/films';

type VideoPlayerProps = {
  film: Film,
}

function VideoPlayer ({film}: VideoPlayerProps): JSX.Element {
  const {videoLink} = film;

  return (
    <video>
      <source src={videoLink} type="video/mp4" />
    </video>
  );
}

export {VideoPlayer};
