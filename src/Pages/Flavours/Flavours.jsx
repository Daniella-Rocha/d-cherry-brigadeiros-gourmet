import { useState, useEffect } from 'react';

import CardBrigadeiros from '../../components/CardBrigadeiros/CardBrigadeiros';

import useData from '../../hooks/useData';

import styles from './Flavours.module.css';

const Flavours = () => {

  const { brigadeiros } = useData();

  const brigadeirosRow1 = brigadeiros.slice(0, 3);
  const brigadeirosRow2 = brigadeiros.slice(3, 6);
  const brigadeirosRow3 = brigadeiros.slice(6, 9);

  const [trigerAnimate, setTrigerAnimate] = useState(false);

  useEffect(() => {
    setTrigerAnimate(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`
      ${styles.brigadeiro_list}
      ${styles.animate_1}
      `}>
        {
          brigadeirosRow1.map(item =>
            <CardBrigadeiros key={item.id} item={item} />
          )
        }
      </div>
      <div className={`
      ${styles.brigadeiro_list}
      ${styles.animate_2}
      `}>
        {
          brigadeirosRow2.map(item =>
            <CardBrigadeiros key={item.id} item={item} />
          )
        }
      </div>
      <div className={`
      ${styles.brigadeiro_list}
      ${styles.animate_3}
      `}>
        {
          brigadeirosRow3.map(item =>
            <CardBrigadeiros item={item} key={item.id} />
          )
        }
      </div>
    </div>
  )
}

export default Flavours;
