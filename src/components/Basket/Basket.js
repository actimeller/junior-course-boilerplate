import React from 'react';
import basketPicture from '../../assets/images/basket.svg';
import Title from '../Title/Title';
import s from './Basket.module.scss';


const Basket = ({list, handleResetBasket}) => {
    return (
        <div className={s.Basket}>
            <div className={s.BasketHeader}>
                <img src={basketPicture} alt="Корзина"/>
                <Title>Корзина</Title>
                <strong>{list.length}</strong>
            </div>
            <div className={s.BasketControls}>
                <button
                    className={s.BasketButton}
                    type="button"
                    onClick={handleResetBasket}
                >
                    Очистить корзину
                </button>
            </div>
        </div>
    )
};

export default Basket;


