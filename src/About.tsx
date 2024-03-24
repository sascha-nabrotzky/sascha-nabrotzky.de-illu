import React from 'react';
import { useTranslation } from 'react-i18next';
import Profilfoto from '../src/assets/images/Sascha_Nabrotzky_sw.webp?preset=normal&srcset';
import MainLayout from './components/General/MainLayout';

const About = () => {
    const { t } = useTranslation('pages', { keyPrefix: 'about' });

    return (
        <MainLayout>
            <div className="md:col-start-2 md:col-span-1 max-md:px-4 text-lg tracking-wider">
                <h1 className="mb-4 uppercase tracking-widest text-2xl font-bold">
                    {t('title')}
                </h1>
                <p className="font-serif">{t('text1a')}</p>
                <p className="font-serif">{t('text1b')}</p>
            </div>
            <div className="md:col-start-3 md:col-span-2">
                <div className="md:rounded-l-xl overflow-hidden w-full max-h-[32rem]">
                    <img
                        srcSet={Profilfoto}
                        alt="Foto von Sascha Nabrotzky"
                        loading="lazy"
                        className="w-full"
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default About;
