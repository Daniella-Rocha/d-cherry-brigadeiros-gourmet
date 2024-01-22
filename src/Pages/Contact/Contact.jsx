import ContactForm from '../../components/ContactForm/ContactForm';

import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h2>Como podemos ajudar?</h2>
            <ContactForm />
        </div>
    )
}

export default Contact
