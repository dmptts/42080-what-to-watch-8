import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  authStatus: AuthStatus
}

function PrivateRoute (props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, authStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => authStatus === AuthStatus.Auth ? render() : <Redirect to={AppRoute.SignIn} />}
    />
  );
}

export {PrivateRoute};
