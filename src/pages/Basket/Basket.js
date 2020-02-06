import React from 'react';

import Title from '../../components/Title/Title';
import {Link} from 'react-router-dom';
import iconBack from '../../assets/images/icon-back.svg';
import BasketContainer from '../../containers/BasketContainer';
import BasketListContainer from '../../containers/BasketListContainer';

export const Basket = () => {
    return (
        <div>
            <div className="AppHeader">
                <Link to="/"><img src={iconBack} alt="Назад"/></Link><Title>Корзина</Title>
            </div>
            <div className="AppBody">
                <main className="AppMain">
                    <BasketListContainer/>
                </main>
                <aside className="AppBasket">
                    <BasketContainer/>
                </aside>
            </div>
        </div>
    );
};

export default Basket;
