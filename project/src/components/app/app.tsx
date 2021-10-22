import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Main} from '../pages/main/main';
import {SignIn} from '../pages/sign-in/sign-in';
import {MyList} from '../pages/my-list/my-list';
import {Movie} from '../pages/movie/movie';
import {AppRoute, AuthStatus} from '../../const';
import {AddReview} from '../pages/add-review/add-review';
import {Player} from '../pages/player/player';
import {PrivateRoute} from '../private-route/private-route';
import {NotFound} from '../pages/not-found/not-found';
import {Films} from '../../types/films';

type AppProps = {
  title: string,
  genre: string,
  releaseDate: string,
  films: Films
}

function App({title, genre, releaseDate, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            films={films}
          />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          path={AppRoute.MyList}
          render={() => <MyList films={films} />}
          authStatus={AuthStatus.Auth}
          exact
        />
        <Route path={AppRoute.Movie} exact>
          <Movie />
        </Route>
        <PrivateRoute
          path={AppRoute.AddReview}
          render={() => <AddReview films={films} />}
          authStatus={AuthStatus.Auth}
          exact
        />
        <Route path={AppRoute.Player} exact>
          <Player films={films}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
