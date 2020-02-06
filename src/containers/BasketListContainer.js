import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List/List';
import ListEmpty from '../components/ListEmpty/ListEmpty';
import {productsActions} from '../store/products';
import {withRouter} from 'react-router';

class BasketListContainer extends React.Component {
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
        const {products, isLoading} = this.props;

        if (!isLoading && products < 1) {
            return (
                <ListEmpty/>
            )
        } else {
            return (
                <List
                    isLoading={isLoading}
                    products={products}
                />
            )
        }
    }
}

const mapStateToProps = ({filter, pagination, router, data, basket}) => ({
    isLoading: data.isLoading,
    isError: false.isError,
    products: basket.list
});

const mapDispatchToProps = (dispatch) => ({
    loadProductsStart: () => dispatch(productsActions.loadProductsStart()),
    loadProductsSuccess: (value) => dispatch(productsActions.loadProductsSuccess(value)),
    loadProductsFail: (value) => dispatch(productsActions.loadProductsFail(value)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasketListContainer));

