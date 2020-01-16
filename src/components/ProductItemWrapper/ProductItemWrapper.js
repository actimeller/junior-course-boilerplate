import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card/src';
import {formatMoney} from 'csssr-school-utils';
import RatingComponent from '../RatingComponent/RatingComponent';

const ProductItemWrapper = (item, isLoading) => {
    console.info(item);
    return (
<div>1</div>
    )
};

ProductItemWrapper.propTypes = {
    text: PropTypes.node
};

export default ProductItemWrapper;


