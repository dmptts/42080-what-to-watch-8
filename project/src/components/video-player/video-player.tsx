import {useEffect, useRef} from 'react';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute, VideoStatus} from '../../const';
import {Film} from '../../types/films';

type VideoPlayerProps = {
  film: Film,
  videoStatus: VideoStatus,
  setVideoStatus(status: VideoStatus): void
  controls?: true,
  muted?: true,
  autoPlay?: true
}

function VideoPlayer ({film, videoStatus, setVideoStatus, controls, muted, autoPlay}: VideoPlayerProps): JSX.Element {
  const {id, name, videoLink, previewVideoLink} = film;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      switch(videoStatus) {
        case VideoStatus.Playing:
          videoRef.current.play();
          break;
        case VideoStatus.Paused:
          videoRef.current.pause();
          break;
        case VideoStatus.Stopped:
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          videoRef.current.load();
          break;
      }
    }
  }, [videoStatus]);

  return (
    <>
      <video className="player__video" ref={videoRef} poster={previewVideoLink} muted={muted} autoPlay={autoPlay}>
        <source src={videoLink} type="video/mp4" />
      </video>

      {controls ? (
        <>
          <Link to={generatePath(AppRoute.Movie, {id})} className="player__exit">Exit</Link>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100"></progress>
                <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
              </div>
              <div className="player__time-value">1:30:29</div>
            </div>

            <div className="player__controls-row">
              {videoStatus === VideoStatus.Playing ?
                <button type="button" className="player__play" onClick={() => setVideoStatus(VideoStatus.Paused)}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button> :
                <button type="button" className="player__play" onClick={() => setVideoStatus(VideoStatus.Playing)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>}
              <div className="player__name">{name}</div>

              <button type="button" className="player__full-screen" onClick={() => document.querySelector('.player__video')?.requestFullscreen()}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </>
      ) : ''}
    </>
  );
}

export {VideoPlayer};
