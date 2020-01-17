import React from 'react';
import s from './ListEmpty.module.scss'
import Title from '../Title/Title';
import planetPicture from '../../assets/images/ill-planet.svg';

const ListEmpty = () => {
    return (
        <div className={s.ListEmpty}>
            <Title>Товары не найдены!</Title>
            <img src={planetPicture} alt="Товар не найден"/>
        </div>
    );
};

export default ListEmpty;
