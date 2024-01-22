import { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';

import styles from './CarouselBanner.module.css';

const CarouselBanner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}
      className={`${styles.brigadeiros_banner}`}
      indicators={false}
    >
      <Carousel.Item>
        <img src="/cherry-doces-finos/carousel1.jpg" alt="bigadeiro gourmet" />
        <Carousel.Caption>
          <h4>Experimente os sabores incrivelmente ricos e cremosos dos nossos brigadeiros gourmet artesanais - satisfação garantida!</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/cherry-doces-finos/carousel2.jpg" alt="bigadeiro gourmet" />
        <Carousel.Caption>
          <h4>Encomendas abertas! Garanta os melhores brigadeiros gourmet na sua celebração.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/cherry-doces-finos/carousel3.jpg" alt="bigadeiro gourmet" />
        <Carousel.Caption>
          <h4>Seja você amante de chocolate ou esteja procurando por um presente único, nossos brigadeiros gourmet são a escolha perfeita.
          Solicite uma degustação!
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/cherry-doces-finos/carousel4.jpg" alt="bigadeiro gourmet" />
        <Carousel.Caption>
          <h4>Aprecie a perfeição em forma de brigadeiros - ingredientes nobres, sabor incomparável.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBanner;
