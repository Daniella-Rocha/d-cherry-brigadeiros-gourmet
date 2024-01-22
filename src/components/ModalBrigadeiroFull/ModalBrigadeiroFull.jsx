import { useState, useRef, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import styles from './ModalBrigadeiroFull.module.css';

import './ModalBrigadeiroFull.css';

const ModalBrigadeiroFull = ({ item }) => {

    const { flavour_name, flavour_description, flavour_imgs } = item;

    const [modalShow, setModalShow] = useState(false);

    const [imgIndex, setImgIndex] = useState(0);

    const [currentImg, setCurrentImg] = useState(flavour_imgs[imgIndex]);

    const seeNextImg = () => {
        if (imgIndex >= flavour_imgs.length - 1) {
            setImgIndex(0);
            setCurrentImg(flavour_imgs[0]);
        } else {
            setImgIndex(prevState => prevState + 1);
            setCurrentImg(flavour_imgs[imgIndex + 1]);
        }
    }

    const seePreviusImg = () => {
        if (imgIndex <= 0) {
            setImgIndex(flavour_imgs.length - 1);
            setCurrentImg(flavour_imgs[imgIndex]);
        } else {
            setCurrentImg(prevState => prevState - 1);
            setCurrentImg(flavour_imgs[imgIndex - 1]);
        }
    }

    return (
        <>
            <Button onClick={() => setModalShow(true)}>
                {flavour_name}
            </Button>
            <Modal
                show={modalShow}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {flavour_name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.flavour_img}>
                        <span
                            onClick={seePreviusImg}
                        >
                            <FaChevronLeft />
                        </span>
                        <img
                            className={styles.img}
                            src={currentImg}
                            alt={flavour_description}
                        />
                        <span
                            onClick={seeNextImg}
                        >
                            <FaChevronRight />
                        </span>
                    </div>
                    <div className={styles.flavour_description}>
                        {flavour_description}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBrigadeiroFull;
