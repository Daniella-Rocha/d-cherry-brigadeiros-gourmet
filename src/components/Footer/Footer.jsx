import {
  FaSquareInstagram,
  FaSquareFacebook
} from "react-icons/fa6";

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container_footer}>
      <div>
        <img src="/DCherry-crop.png" alt="D'Cherry" />
      </div>
      <div>
        <ul>
          <li><FaSquareInstagram /></li>
          <li><FaSquareFacebook /></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Política de privacidade</li>
          <li>Trabalhe conosco</li>
          <li>Termos e condições</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer
