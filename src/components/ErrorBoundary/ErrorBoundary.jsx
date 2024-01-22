import { Link, useRouteError } from "react-router-dom";

import styles from './ErrorBoundary.module.css';

const ErrorBoundary = () => {

  const error = useRouteError();

  console.log(error);

  return (
    <div className={styles.error_page}>
      <h5>Ooops!</h5>
      <p>Desculpe! Os brigadeiros ainda não estão prontos.</p>
      <img src="/page-error.jpg" alt="chef com expressão melancólica, pois alguns erro ocorreu na página" />
      <Link to={'/'}>
        Voltar para Home
      </Link>
    </div>
  )
}

export default ErrorBoundary;
