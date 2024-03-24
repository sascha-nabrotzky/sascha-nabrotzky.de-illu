import React from 'react';
import { useTranslation } from 'react-i18next';
import HighlightsLayout from './General/HighlightsLayout';
import Plant from '../assets/images/Zimmerpflanze.webp?preset=small&srcset';
import Tower from '../assets/images/Wolken_Turm.webp?preset=small&srcset';
import Sword from '../assets/images/Schwert_Krone_Herz.webp?preset=small&srcset';
import Birdhouse from '../assets/images/Vogelhaus.webp?preset=small&srcset';

const EditorialDigitalIllustrations_3 = () => {
    const { t } = useTranslation('highlights', {
        keyPrefix: 'editorialDigitalIllustrations_3',
    });

    const imgs = [
        {
            figcaption: `${t('sword')}`,
            srcSet: Sword,
            alt: `${t('sword')}`,
        },
        {
            figcaption: `${t('plant')}`,
            srcSet: Plant,
            alt: `${t('plant')}`,
        },
        {
            figcaption: `${t('birdhouse')}`,
            srcSet: Birdhouse,
            alt: `${t('birdhouse')}`,
        },
        {
            figcaption: `${t('tower')}`,
            srcSet: Tower,
            alt: `${t('tower')}`,
        },
    ];

    return (
        <HighlightsLayout
            cols={4}
            imgs={imgs}
            title={`${t('title')}`}
        />
    );
};

export default EditorialDigitalIllustrations_3;
