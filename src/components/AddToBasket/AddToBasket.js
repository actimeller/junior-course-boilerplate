import React from 'react';
import cx from 'classnames';
import s from './AddToBasket.module.scss'

const AddToBasket = ({children, item, handleClick, isLoading}) => {
    return (
        <button
            className={cx(s.AddToBasket, {[s.AddToBasketLoading]: isLoading})}
            type="button"
            onClick={e => handleClick(item)}
        >
            {children}
        </button>
    )
};

export default AddToBasket;
