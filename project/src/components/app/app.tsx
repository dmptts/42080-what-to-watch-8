import {MainPage} from '../pages/main-page/main-page';

type AppProps = {
  title: string,
  genre: string,
  releaseDate: string
}

function App({title, genre, releaseDate}: AppProps): JSX.Element {
  return (
    <MainPage
      title={title}
      genre={genre}
      releaseDate={releaseDate}
    />
  );
}

export default App;
