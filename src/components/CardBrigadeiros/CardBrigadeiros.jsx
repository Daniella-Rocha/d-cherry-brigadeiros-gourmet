import ModalBrigadeiroFull from '../ModalBrigadeiroFull/ModalBrigadeiroFull';

import styles from './CardBrigadeiros.module.css';

const CardBrigadeiros = ({item}) => {

    const { flavour_imgs, flavour_description } = item;
    
    return (
        item &&
        <div className={styles.card_brigadeiro}>
            <div className={styles.brigadeiro_img}>
                <img src={flavour_imgs[0]} alt={flavour_description} />
            </div>
            
            <div className={styles.brigadeiro_description}>
                <p>{flavour_description}</p>
            </div>
            <ModalBrigadeiroFull
                item={item}
                onHide={() => setModalShow(false)}
              />
        </div>
        ||
        <div className={styles.card_brigadeiro}>
            <h3>Enrolando brigadeiros...</h3>
        </div>
    )
}

export default CardBrigadeiros
