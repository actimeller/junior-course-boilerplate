import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import {formatMoney} from 'csssr-school-utils';
import RatingComponent from '../RatingComponent/RatingComponent';
import s from './ProductItemWrapper.module.scss';

const ProductItemWrapper = ({item, isLoading}) => {

    if (isLoading) {
        return (
            <div className={s.productItemWrapperLoading}>
                <span className={s.productItemWrapperLoadingPhoto}></span>
                <span className={s.productItemWrapperLoadingText}><i></i><i></i><i></i></span>
            </div>
        )
    } else {
        return (
            <ProductItem
                isInStock={item.isInStock}
                img={item.imgUrl}
                title={item.name}
                price={formatMoney(item.price, 0, '.', ' ')}
                subPriceContent=""
                maxRating={5}
                rating={item.rating}
                ratingComponent={RatingComponent}
            />
        )
    }
};

ProductItemWrapper.propTypes = {
    text: PropTypes.node
};

export default ProductItemWrapper;


