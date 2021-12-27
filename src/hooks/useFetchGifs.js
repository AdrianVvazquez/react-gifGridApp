import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) => {

    const [state, setstate] = useState({
        data : [],
        loading: true
    });

    useEffect( () => {
        getGifs(categoria)
            .then( imgs => {
                setstate({
                    data: imgs, // Arreglo de imagenes
                    loading: false
                }); 

        })

    }, [categoria]) // Arreglo de dependencias


    return state;
}