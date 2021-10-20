import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

function NotFoundPage (): JSX.Element {
  return (
    <>
      <p>404 Not found</p>
      <Link to={AppRoute.MainPage}>Go to main page</Link>
    </>
  );
}

export {NotFoundPage};
