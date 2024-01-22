import { useState } from 'react';

import useData from '../../hooks/useData';

import CardReview from '../CardReview/CardReview';

import styles from './Review.module.css';

const Reviews = () => {
  const { reviews } = useData();

  const someReviews = reviews.slice(0, 3);

  const restReviews = reviews.slice(3, reviews.length);

  const [moreComentVisible, setMoreComentVisible] = useState(false);

  return (
    <div className={styles.review_container}>
      <h3>O que nossos clientes dizem sobre nós</h3>
      <div className={styles.users}>
        {
          someReviews.map(item =>
            <CardReview
              item={item}
              key={item.client}
            />
          )}
      </div>
      <button
        onClick={() => setMoreComentVisible(!moreComentVisible)}
      >
        {moreComentVisible ? 'Ocultar ' : 'Ver todos'}
      </button>
      <div className={`
      ${styles.view_more}
      ${moreComentVisible ? styles.view_more_visible : ''}
      `}>
        {
          restReviews.map(item => <CardReview item={item} key={item.client}/>)
        }
      </div>
    </div>
  )
}

export default Reviews;
