import {Link} from 'react-router-dom';

function NotFoundPage (): JSX.Element {
  return (
    <>
      <p>404 Not found</p>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export {NotFoundPage};