import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MainPage} from '../pages/main-page/main-page';
import {SignInPage} from '../pages/sign-in-page/sign-in-page';
import {MyListPage} from '../pages/my-list-page/my-page-list';
import {MoviePage} from '../pages/movie-page/movie-page';
import {AppRoute, AuthStatus} from '../../const';
import {AddReviewPage} from '../pages/add-review-page/add-review-page';
import {PlayerPage} from '../pages/player-page/player-page';
import {PrivateRoute} from '../private-route/private-route';
import {NotFoundPage} from '../pages/not-found-page/not-found-page';

type AppProps = {
  title: string,
  genre: string,
  releaseDate: string
}

function App({title, genre, releaseDate}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MainPage} exact>
          <MainPage
            title='The Grand Budapest Hotel'
            genre='Drama'
            releaseDate='2014'
          />
        </Route>
        <Route path={AppRoute.SignInPage} exact>
          <SignInPage />
        </Route>
        <PrivateRoute
          path={AppRoute.MyListPage}
          render={() => <MyListPage />}
          authStatus={AuthStatus.UnAuth}
          exact
        />
        <Route path={AppRoute.MoviePage} exact>
          <MoviePage />
        </Route>
        <Route path={AppRoute.AddReviewPage} exact>
          <AddReviewPage />
        </Route>
        <Route path={AppRoute.PlayerPage} exact>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
