import { FaStar } from "react-icons/fa6";

import styles from './ReviewRate.module.css';

const RateReview = () => {

  return (
    <div className={styles.stars_review}>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
    </div>
  )
}

export default RateReview;
