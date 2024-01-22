import { useState } from "react";

import { Link } from "react-router-dom";

import styles from './Header.module.css';

import Gallery from "../GalleryComponent/GalleryComponent";

const Header = () => {
  
  return (
    <header className={styles.container_header}>
      <div className={styles.logo}>
        <img src="/DCherry-crop.png" alt="D'Cherry" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to={'/flavours'}>
              Nossos sabores
            </Link>
          </li>
          <li>
            <Gallery/>
          </li>
          <li>
            <Link to={'/contact'}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
