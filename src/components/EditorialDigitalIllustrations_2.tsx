import React from 'react';
import { useTranslation } from 'react-i18next';
import HighlightsLayout from './General/HighlightsLayout';
import Moth from '../assets/images/Motte.webp?preset=small&srcset';
import Squid from '../assets/images/Tintenfisch.webp?preset=small&srcset';
import Beard from '../assets/images/Bart.webp?preset=small&srcset';
import Tree from '../assets/images/Baum_wandern.webp?preset=small&srcset';

const EditorialDigitalIllustrations_2 = () => {
    const { t } = useTranslation('highlights', {
        keyPrefix: 'editorialDigitalIllustrations_2',
    });

    const imgs = [
        {
            figcaption: `${t('moth')}`,
            srcSet: Moth,
            alt: `${t('moth')}`,
        },
        {
            figcaption: `${t('beard')}`,
            srcSet: Beard,
            alt: `${t('beard')}`,
        },
        {
            figcaption: `${t('squid')}`,
            srcSet: Squid,
            alt: `${t('squid')}`,
        },
        {
            figcaption: `${t('tree')}`,
            srcSet: Tree,
            alt: `${t('tree')}`,
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

export default EditorialDigitalIllustrations_2;
