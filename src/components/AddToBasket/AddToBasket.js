import React from 'react';
import s from './AddToBasket.module.scss'

const AddToBasket = ({children, item, handleClick, handleAddToBasket, handleRemoveFromBasket}) => {
    return (
        <button
            className={s.AddToBasket}
            type="button"
            onClick={e => handleClick(item)}
        >
            {children}
        </button>
    )
};

export default AddToBasket;
