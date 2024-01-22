import RateReview from '../RateReview/RateReview';

import { ImQuotesLeft } from "react-icons/im";

import styles from './CardReview.module.css';

const CardReview = ({ item }) => {
  return (
    <div className={styles.container_card}>
      <div>
        <ImQuotesLeft />
      </div>
      <div className={styles.feedback}>
        {item.feedback}
      </div>
      <div className={styles.avatar}>
        <img src={item.avatar} alt="descrição da imagem" />
      </div>
      <div className={styles.name}>
        <span>{item.client}</span>
      </div>
      <RateReview />
    </div>
  )
}

export default CardReview;
