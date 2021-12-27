import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategoria }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const inputChange = (e) => {
        setInputValue(e.target.value);
    }

    const inputSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // No es necesario traer el estado aterior, pues la función lo conoce
            setCategoria(cats => [ inputValue, ...cats, ]);
            setInputValue('');
        }

        console.log(inputValue,'submited')
    }

    return (
        <form onSubmit={ inputSubmit }>

            <input 
                type='text'
                value={ inputValue }
                onChange={ inputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
