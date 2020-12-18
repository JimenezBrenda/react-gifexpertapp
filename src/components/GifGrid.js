import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// useEffect te permite correr cierto código de manera condicional

export const GifGrid = ( {category} ) => {


    const {data: images, loading} = useFetchGifs( category);//usando mi hook

    return (
        <>
        <h3 className="animate__fadeIn"> {category} </h3>
        {loading && <p className="animate__flash"> Loading...</p>}


        <div className="card-grid">          
                {
                    images.map(img =>(
                        <GifGridItem 
                        key={ img.id }
                        {...img}
                        />
                    ))
                }

            
        </div>
        </>
    )
}
