import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List/List';
import ListEmpty from '../components/ListEmpty/ListEmpty';
import {splitEvery} from 'csssr-school-utils';
import {getFilteredProducts} from '../utils/getFilteredProducts';
import {productsActions} from '../store/products';
import {withRouter} from 'react-router';


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
    componentDidMount() {
        this.fetchProducts('https://course-api.csssr.school/products')
    }

    fetchProducts = (url) => {
        this.props.loadProductsStart();

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(response => {
                this.props.loadProductsSuccess(response.products);

            })
            .catch(error => {
                this.props.loadProductsFail(error.message);
            })
    };

    render() {
        const {products, router, itemsPerPage, isLoading} = this.props;

        const paginationActivePage = router.location.query.page || 1;
        const activePageProducts = splitEvery(itemsPerPage, products)[paginationActivePage - 1] || [];

        if (!isLoading && activePageProducts < 1) {
            return (
                <ListEmpty/>
            )
        } else {
            return (
                <List
                    isLoading={isLoading}
                    products={activePageProducts}
                    itemsPerPage={itemsPerPage}
                />
            )
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer));

