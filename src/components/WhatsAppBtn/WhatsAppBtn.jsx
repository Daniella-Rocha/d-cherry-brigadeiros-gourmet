import { Link } from "react-router-dom";

import { FaWhatsappSquare } from "react-icons/fa";

import styles from './WhatsAppBtn.module.css';

const WhatsAppBtn = () => {
    return (
        <div className={styles.whats_btn}>
            <Link to={"https://api.whatsapp.com/send?phone=5547988974621&text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."} target="_blank">
                <FaWhatsappSquare />
            </Link>
        </div>
    )
}

export default WhatsAppBtn;
