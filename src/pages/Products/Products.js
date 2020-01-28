import React from 'react';

import Title from '../../components/Title/Title';
import ListContainer from '../../containers/ListContainer';
import FilterContainer from '../../containers/FilterContainer';
import PaginationContainer from '../../containers/PaginationContainer';
import BasketContainer from '../../containers/BasketContainer';

export const Products = () => {
    return (
        <div>
            <div className="AppHeader">
                <Title>Список товаров</Title>
            </div>
            <div className="AppBody">
                <aside className="AppSidebar">
                    <FilterContainer/>
                </aside>
                <main className="AppMain">
                    <ListContainer/>
                    <PaginationContainer/>
                </main>
                <aside className="AppBasket">
                    <BasketContainer/>
                </aside>
            </div>
        </div>
    );
};

export default Products;
