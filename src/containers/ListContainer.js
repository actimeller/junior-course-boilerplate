import React from 'react';

import {connect} from 'react-redux';
import {getFilteredProducts} from '../utils/getFilteredProducts';
import {withRouter} from 'react-router';
import {productsActions} from '../store/products';
import List from '../components/List/List';
import {splitEvery} from 'csssr-school-utils';


const mapStateToProps = ({filter, pagination, router, data}) => ({
    router,
    itemsPerPage: pagination.itemsPerPage,
    isLoading: data.isLoading,
    isError: false.isError,
    products: getFilteredProducts({
        ...filter,
        selectedCategories: router.location.query.category,
        products: data.products,
    })
});

const mapDispatchToProps = (dispatch) => ({
    loadProductsStart: () => dispatch(productsActions.loadProductsStart()),
    loadProductsSuccess: (value) => dispatch(productsActions.loadProductsSuccess(value)),
    loadProductsFail: (value) => dispatch(productsActions.loadProductsFail(value)),
});

class ListContainer extends React.Component {

    fetchProducts = (url) => {
        this.props.loadProductsStart();

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    this.props.loadProductsFail(response.message);
                }
            })
            .then(response => {
                this.props.loadProductsSuccess(response.products);

            })
            .catch(error => {
                this.props.loadProductsFail(error.message);
            })
    };

    componentDidMount() {
        this.fetchProducts('https://course-api.csssr.school/products')
    }

    render() {
        const {products, router, itemsPerPage, isLoading} = this.props;

        const paginationActivePage = router.location.query.page || 1;
        const activePageProducts = splitEvery(itemsPerPage, products)[paginationActivePage - 1] || [];

        return (
            <List
                isLoading={isLoading}
                products={activePageProducts}
                itemsPerPage={itemsPerPage}
            />
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer));
