import { useState, useEffect } from 'react';

import { getData } from '../config/config';

const useData = () => {

    const [reviews, setReviews] = useState([]);

    const [brigadeiros, setBrigadeiros] = useState([]);

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const reviews = getData.get('/v1/all-coments');
                const brigadeiros = getData.get('/v1/all-brigadeiros');
                const gallery = getData.get('/v1/gallery');

                // Cria um array de promessas
                const promises = [reviews, brigadeiros, gallery];

                // Aguarda todas as promessas serem resolvidas usando Promise.all
                const responses = await Promise.all(promises);

                // Extrai os dados das respostas
                const dataReviews = responses[0].data;
                const dataBrigadeiros = responses[1].data;
                const dataGallery = responses[2].data;

                setReviews(dataReviews);
                setBrigadeiros(dataBrigadeiros);
                setGallery(dataGallery);

            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    return {
        reviews,
        brigadeiros,
        gallery
    }
}

export default useData;
