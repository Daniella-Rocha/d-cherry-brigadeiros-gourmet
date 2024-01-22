import { useState } from 'react';

import useData from '../../hooks/useData';

import Lightbox from "yet-another-react-lightbox";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";

import "yet-another-react-lightbox/plugins/thumbnails.css";

import styles from './GalleryComponent.module.css';

const Gallery = () => {

	const { gallery } = useData();
	
	const [open, setOpen] = useState(false);

	return (
		<>
			<button 
			className={styles.open_gallery}
			type="button" 
			onClick={() => setOpen(true)}
			>
				Galeria
			</button>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={gallery}
				plugins={[Thumbnails]}
			/>
		</>
	)
}

export default Gallery;
