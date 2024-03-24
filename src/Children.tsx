import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from './components/General/MainLayout';
import HighlightsLayout from './components/General/HighlightsLayout';
import CharacterDesignSketches from './components/CharacterdesignSketches';
import ChildrensIllustrations from './components/ChildrensIllustrations';
import Book4 from '../src/assets/images/Book4.webp?preset=small&srcset';
import SpreadEating from '../src/assets/images/SpreadpageEating.webp?preset=normal&srcset';
import SpreadBlowing from '../src/assets/images/SpreadpageBlowing.webp?preset=normal&srcset';
import SpreadWiese from '../src/assets/images/SpreadpageWiese.webp?preset=normal&srcset';
import SpreadForest from '../src/assets/images/SpreadpageForest.webp?preset=normal&srcset';
import SpreadShadow1 from '../src/assets/images/SpreadpageShadow1.webp?preset=normal&srcset';
import SpreadShadow2 from '../src/assets/images/SpreadpageShadow2.webp?preset=normal&srcset';
import Theo from '../src/assets/images/Theo.webp?preset=small&srcset';
import illuBiene from '../src/assets/images/Biene.webp?preset=small&srcset';

const Childrensbooks = () => {
    const { t } = useTranslation('pages', { keyPrefix: 'children' });

    const imgsBook1 = [
        {
            figcaption: `${t('book1.img1')}`,
            srcSet: SpreadWiese,
            alt: `${t('book1.img2')}`,
        },
        {
            figcaption: `${t('book1.img2')}`,
            srcSet: SpreadForest,
            alt: `${t('book1.img3')}`,
        },
    ];

    const imgsBook2 = [
        {
            figcaption: `${t('book2.img1')}`,
            srcSet: SpreadEating,
            alt: `${t('book2.img1')}`,
        },
        {
            figcaption: `${t('book2.img2')}`,
            srcSet: SpreadBlowing,
            alt: `${t('book2.img2')}`,
        },
    ];

    const imgsBook3 = [
        {
            figcaption: `${t('book3.img1')}`,
            srcSet: SpreadShadow1,
            alt: `${t('book3.img1')}`,
        },
        {
            figcaption: `${t('book3.img2')}`,
            srcSet: SpreadShadow2,
            alt: `${t('book3.img2')}`,
        },
    ];

    return (
        <>
            <MainLayout>
                <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t('title1')}
                    </h1>
                    <p
                        className="font-serif"
                        dangerouslySetInnerHTML={{ __html: t('text1') }}
                    />
                </div>
                <div className="md:col-start-3 md:col-span-1">
                    <div className="flex justify-center">
                        <img
                            srcSet={Theo}
                            alt="Characterdesign eines Hundes"
                            loading="lazy"
                        />
                    </div>
                </div>

                <ChildrensIllustrations />

                <div className="md:col-start-2 md:col-span-1">
                    <div className="flex justify-center">
                        <img
                            srcSet={Book4}
                            alt={t('book1.img1')}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t('title2')}
                    </h1>
                    <p
                        className="font-serif"
                        dangerouslySetInnerHTML={{ __html: t('text2a') }}
                    />
                    <p className="font-serif">{t('text2b')}</p>
                </div>

                <HighlightsLayout
                    cols={2}
                    imgs={imgsBook3}
                    title={t('book3.title')}
                />

                <div className="md:col-start-3 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t('title3')}
                    </h2>
                    <p className="font-serif">{t('text3')}</p>
                </div>

                <CharacterDesignSketches />

                <HighlightsLayout
                    cols={2}
                    imgs={imgsBook2}
                    title={t('book2.title')}
                />

                <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                    <h2 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                        {t('title4')}
                    </h2>
                    <p className="font-serif">{t('text4')}</p>
                </div>

                <HighlightsLayout
                    cols={2}
                    imgs={imgsBook1}
                    title={t('book1.title')}
                />

                <div className="md:col-start-2 md:col-span-2">
                    <div className="flex justify-center">
                        <img
                            srcSet={illuBiene}
                            alt="Illustration Biene in Wasserfarben"
                            loading="lazy"
                            className="animate-flying mb-6 max-w-[15rem]"
                        />
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Childrensbooks;
