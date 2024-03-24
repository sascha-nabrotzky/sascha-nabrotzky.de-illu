import React from 'react';
import { useTranslation } from 'react-i18next';
import HighlightsLayout from './General/HighlightsLayout';
import seiMutig from '../assets/images/Sei_mutig.webp?preset=normal&srcset';
import seiNett from '../assets/images/Sei_nett.webp?preset=normal&srcset';
import seiFrech from '../assets/images/Sei_frech.webp?preset=normal&srcset';
import seiEntspannt from '../assets/images/Sei_entspannt.webp?preset=normal&srcset';

const ChildrensSketchbookIllustrations = () => {
    const { t } = useTranslation('highlights', {
        keyPrefix: 'childrensIllustrations',
    });

    const imgs = [
        {
            figcaption: `${t('img1')}`,
            srcSet: seiMutig,
            alt: `${t('img1')}`,
        },
        {
            figcaption: `${t('img2')}`,
            srcSet: seiFrech,
            alt: `${t('img2')}`,
        },
        {
            figcaption: `${t('img3')}`,
            srcSet: seiEntspannt,
            alt: `${t('img3')}`,
        },
        {
            figcaption: `${t('img4')}`,
            srcSet: seiNett,
            alt: `${t('img4')}`,
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

export default ChildrensSketchbookIllustrations;
