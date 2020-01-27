import React from 'react';
import basketPicture from '../../assets/images/basket.svg';
import checkPicture from '../../assets/images/check.svg';
import Title from '../Title/Title';
import cx from 'classnames';
import s from './Basket.module.scss';
import Button from '../Button/Button';

const Basket = ({list, isLoading, isSaved, isError, handleResetBasket, handleSaveBasket}) => {
    return (
        <div className={cx(s.Basket, {[s.BasketLoading]: isLoading})}>
            <div className={s.BasketHeader}>
                <img src={basketPicture} alt="Корзина"/>
                <Title>Корзина</Title>
                <strong>{list.length}</strong>
                {isSaved && <img className={s.BasketCheck} src={checkPicture} alt="Saved"/>}
                {isError && 'Произошла ошибка'}
            </div>
            <div className={s.BasketControls}>
                {!isSaved && <Button handleClick={handleSaveBasket} isLoading={isLoading}>Сохранить</Button>}
                <Button handleClick={handleResetBasket}>Очистить корзину</Button>
            </div>
        </div>
    )
};

export default Basket;


