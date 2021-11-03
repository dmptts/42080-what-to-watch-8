import {useEffect, useRef} from 'react';
import {Film} from '../../types/films';

type VideoPlayerProps = {
  film: Film,
  isVideoPlaying: boolean,
}

function VideoPlayer ({film, isVideoPlaying}: VideoPlayerProps): JSX.Element {
  const {videoLink, previewVideoLink} = film;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      if (isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.load();
      }
    }
  }, [isVideoPlaying]);

  return (
    <video ref={videoRef} poster={previewVideoLink} muted >
      <source src={videoLink} type="video/mp4" />
    </video>
  );
}

export {VideoPlayer};
