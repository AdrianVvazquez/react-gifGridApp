// rafc
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategoria] = useState(['Chocolate']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategoria = { setCategoria }
            />
            <hr />

            <ol>
                {
                    categorias.map( (categoria, i) => ( // Parentesis para regresar un objeto
                        <GifGrid // Colección de elementos de una categoría
                            key = { i }
                            categoria = { categoria }
                        />
                    ))
                }
            </ol>

        </>
    )
}