import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

function NotFound (): JSX.Element {
  return (
    <>
      <p>404 Not found</p>
      <Link to={AppRoute.Main}>Go to main page</Link>
    </>
  );
}

export {NotFound};
