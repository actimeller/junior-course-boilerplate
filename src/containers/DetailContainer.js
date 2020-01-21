import React from 'react';
import {connect} from 'react-redux';
import {getFilteredProducts} from '../utils/getFilteredProducts';
import {productsActions} from '../store/products';
import {withRouter} from 'react-router';
import Detail from '../pages/Detail/Detail';


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

class DetailContainer extends React.Component {
    componentDidMount() {
        this.fetchProducts('https://course-api.csssr.school/products')
    }

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

    render() {
        const {products, router, isLoading, match} = this.props;

        const item = products[+this.props.match.params.id - 1];
        return (
            <Detail
                isLoading={isLoading}
                item={item}
            />
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailContainer));

