import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const { data:images, loading } = useFetchGifs(categoria);

    return (
        <>
            <h3 className='animate__animated animate_fadeIn'>{ categoria }</h3>

            { loading && <p className='animate__animated animate__flash'>loading...</p> }

            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            { ...img }
                            />
                    ))
                }
            </div>
        </>
    )
}
