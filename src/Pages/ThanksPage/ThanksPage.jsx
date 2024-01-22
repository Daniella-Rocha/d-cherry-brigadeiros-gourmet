import { Link } from 'react-router-dom';

import styles from './Thankspage.module.css';

const ThanksPage = () => {
    return (
        <div className={styles.thanks_container}>
            <div>
                <h3>Obrigada pelo contato!</h3>
                <p>Retornaremos o mais breve possível.</p>
            </div>
            <img src="/brigadeiros/d-cherry-gallery/thanks-brigadeiro-art.jpeg" alt="um brigadeiro fofo sorindo e agradecendo" />
            <div>
                <Link to={'/'}>Voltar para Home</Link>
            </div>
        </div>
    )
}

export default ThanksPage
