import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Highlights = ({
    cols,
    imgs,
    title,
}: {
    cols: 2 | 3 | 4;
    imgs: { alt: string; srcSet?: string; figcaption: string }[];
    title: string;
}) => {
    const [columns, setColumns] = useState('');
    const [headlineColumns, setHeadlineColumns] = useState('');
    const location = useLocation();
    const isEditorialPage = location.pathname === '/';

    console.log(isEditorialPage);

    switch (cols) {
        case 3: {
            useEffect(() => {
                setColumns('md:grid-cols-2 lg:grid-cols-3');
                setHeadlineColumns('md:col-span-2 lg:col-span-3');
            }, []);
            break;
        }
        case 4: {
            useEffect(() => {
                setColumns('md:grid-cols-3 lg:grid-cols-4');
                setHeadlineColumns('md:col-span-3 lg:col-span-4');
            }, []);
            break;
        }
        default: {
            useEffect(() => {
                setColumns('');
                setHeadlineColumns('');
            }, []);
            break;
        }
    }

    return (
        <section className="md:col-span-4">
            {!isEditorialPage && (
                <div className="col-span-4 bg-line-top bg-repeat-space h-[30px]" />
            )}
            <div
                className={`col-start-1 p-4 md:p-6 ${
                    isEditorialPage
                        ? 'bg-pelorous-700 text-stone-100'
                        : 'bg-pharlap-200 text-stone-700'
                }  `}
            >
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto gap-4 ${columns}`}
                >
                    <h3
                        className={`col-span-1 sm:col-span-2 ${headlineColumns} mb-2 text-2xl`}
                    >
                        {title}
                    </h3>
                    {imgs.map(
                        (img: {
                            alt: string;
                            srcSet?: string;
                            figcaption: string;
                        }) => (
                            <figure key={img.alt}>
                                <img
                                    className="w-full"
                                    srcSet={img.srcSet}
                                    alt={img.alt}
                                    loading="lazy"
                                />
                                <figcaption className="mt-2 text-sm">
                                    {img.figcaption}
                                </figcaption>
                            </figure>
                        ),
                    )}
                </div>
            </div>
            {!isEditorialPage && (
                <div className="col-span-4 bg-line-bottom bg-repeat-space h-[30px]" />
            )}
        </section>
    );
};

export default Highlights;
