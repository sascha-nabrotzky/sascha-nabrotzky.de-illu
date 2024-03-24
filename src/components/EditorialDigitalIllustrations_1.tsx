import React from 'react';
import { useTranslation } from 'react-i18next';
import HighlightsLayout from './General/HighlightsLayout';
import UsaFlag from '../assets/images/USA-Flagge.webp?preset=normal&srcset';
import Handelskrieg from '../assets/images/Handelskrieg.webp?preset=normal&srcset';

const EditorialDigitalIllustrations_1 = () => {
    const { t } = useTranslation('highlights', {
        keyPrefix: 'editorialDigitalIllustrations_1',
    });

    const imgs = [
        {
            figcaption: `${t('img1')}`,
            srcSet: UsaFlag,
            alt: `${t('img1')}`,
        },
        {
            figcaption: `${t('img2')}`,
            srcSet: Handelskrieg,
            alt: `${t('img2')}`,
        },
    ];

    return (
        <HighlightsLayout
            cols={2}
            imgs={imgs}
            title={`${t('title')}`}
        />
    );
};

export default EditorialDigitalIllustrations_1;
