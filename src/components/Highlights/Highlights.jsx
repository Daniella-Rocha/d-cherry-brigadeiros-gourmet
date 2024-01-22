import { Link } from 'react-router-dom';

import useData from '../../hooks/useData';

import styles from './Highlights.module.css';

const Highlights = () => {
    const { brigadeiros } = useData();

    const nutella = brigadeiros.find(item => item.flavour_name == 'Nutella');
    const ninho = brigadeiros.find(item => item.flavour_name == 'Ninho');
    const morandoChanpagne = brigadeiros.find(item => item.flavour_name == 'Morango com Champagne');

    return (
        <div className={styles.highlights}>
            <div>
                <h3>Mais Populares</h3>
            </div>
            <div className={styles.highlights_flavours}>
                {
                    morandoChanpagne &&
                    <div className={styles.flavour}>
                        <Link to={'/flavours'}>
                            <div>
                                <img src={morandoChanpagne.flavour_imgs[0]} alt={morandoChanpagne.flavour_description} />
                            </div>
                            <div>
                                <p>{morandoChanpagne.flavour_name}</p>
                            </div>
                        </Link>
                    </div>
                }
                {
                    nutella &&
                    <div className={styles.flavour}>
                        <Link to={'/flavours'}>
                            <div>
                                <img src={nutella.flavour_imgs[0]} alt={nutella.flavour_description} />
                            </div>
                            <div>
                                <p>{nutella.flavour_name}</p>
                            </div>
                        </Link>
                    </div>
                }

                {
                    ninho &&
                    <div className={styles.flavour}>
                        <Link to={'/flavours'}>
                            <div>
                                <img src={ninho.flavour_imgs[0]} alt={ninho.flavour_description} />
                            </div>
                            <div>
                                <p>{ninho.flavour_name}</p>
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Highlights
