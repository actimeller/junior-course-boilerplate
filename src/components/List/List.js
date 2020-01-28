import React from 'react';
import PropTypes from 'prop-types';
import logRenderComponent from '../../HOC/logRenderComponent';
import s from './List.module.scss';
import {Link} from 'react-router-dom';
import ProductItemWrapper from '../ProductItemWrapper/ProductItemWrapper';
import AddToBasketContainer from '../../containers/AddToBasketContainer';

class List extends React.Component {

    render() {
        const {products, isLoading, itemsPerPage} = this.props;
        if (isLoading) {
            return (
                <ul className={s.list}>
                    {[...Array(itemsPerPage)].map((item, key) => (
                        <li className={s.listItem} key={key}>
                            <div>
                                <ProductItemWrapper item={item} isLoading={isLoading}/>
                            </div>
                        </li>
                    ))}
                </ul>
            )
        } else {
            return (
                <ul className={s.list}>
                    {products.map((item) => {
                        return (
                            <li className={s.listItem} key={item.id}>
                                <div>
                                    <Link to={`products/${item.id}`}>
                                        <ProductItemWrapper item={item} isLoading={isLoading}/>
                                    </Link>
                                    <AddToBasketContainer item={item}/>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }
}

List.propTypes = {
    products: PropTypes.array,
    isLoading: PropTypes.bool,
    itemsPerPage: PropTypes.number,
};


export default logRenderComponent(List);
