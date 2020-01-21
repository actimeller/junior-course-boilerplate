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

    handleAddToBasket = (id) => {
        this.props.handleAddToBasket(id)
    };
    handleRemoveFromBasket = (id) => {
        this.props.handleRemoveFromBasket(id)
    };

    render() {
        const {list, item, handleAddToBasket, handleRemoveFromBasket} = this.props;
        if (!list.includes(item.id)) {
            return (
                <AddToBasket handleClick={this.handleAddToBasket} item={item.id}>Добавить</AddToBasket>
            )
        } else {
            return (
                <AddToBasket handleClick={this.handleRemoveFromBasket} item={item.id}>Удалить</AddToBasket>
            )
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToBasketContainer);

