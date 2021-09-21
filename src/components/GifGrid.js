import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: gifItem, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__delay-2s">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="cards">
                {

                    gifItem.map(gif =>
                        <GifGridItem
                            key={gif.id}
                            {...gif}
                        />
                    )
                }

            </div>
        </>
    )
}
