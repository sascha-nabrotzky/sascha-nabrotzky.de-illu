import React from 'react';
import { useTranslation } from 'react-i18next';
import HighlightsLayout from './General/HighlightsLayout';
import Vogel from '../assets/images/Vogel_festgekettet.webp?preset=thumbnail&srcset';
import Katze from '../assets/images/Katze_Maus.webp?preset=thumbnail&srcset';
import Karte from '../assets/images/Karte.webp?preset=thumbnail&srcset';

const EditorialDigitalIllustrations_4 = () => {
    const { t } = useTranslation('highlights', {
        keyPrefix: 'editorialDigitalIllustrations_4',
    });

    const imgs = [
        {
            figcaption: `${t('img1')}`,
            srcSet: Vogel,
            alt: `${t('img1')}`,
        },
        {
            figcaption: `${t('img2')}`,
            srcSet: Karte,
            alt: `${t('img2')}`,
        },
        {
            figcaption: `${t('img3')}`,
            srcSet: Katze,
            alt: `${t('img3')}`,
        },
    ];

    return (
        <HighlightsLayout
            cols={3}
            imgs={imgs}
            title={`${t('title')}`}
        />
    );
};

export default EditorialDigitalIllustrations_4;
