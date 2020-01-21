import React from 'react';
import {connect} from 'react-redux';
import {basketActions} from '../store/basket';
import AddToBasket from '../components/AddToBasket/AddToBasket';

const mapStateToProps = ({basket}) => ({
    list: basket.list
});

const mapDispatchToProps = (dispatch) => ({
    handleAddToBasket: (value) => dispatch(basketActions.addToBasket(value)),
    handleRemoveFromBasket: (value) => dispatch(basketActions.removeFromBasket(value)),
});

class AddToBasketContainer extends React.Component {

    handleAddToBasket = (item) => {
        this.props.handleAddToBasket(item)
    };
    handleRemoveFromBasket = (item) => {
        this.props.handleRemoveFromBasket(item)
    };

    render() {
        const {list, item, handleAddToBasket, handleRemoveFromBasket} = this.props;
        if (!list.includes(item)) {
            return (
                <AddToBasket handleClick={this.handleAddToBasket} item={item}>Добавить</AddToBasket>
            )
        } else {
            return (
                <AddToBasket handleClick={this.handleRemoveFromBasket} item={item}>Удалить</AddToBasket>
            )
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToBasketContainer);

