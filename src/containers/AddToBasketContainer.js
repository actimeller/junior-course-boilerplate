import React from 'react';
import {connect} from 'react-redux';
import {basketActions} from '../store/basket';
import Button from '../components/Button/Button';

class AddToBasketContainer extends React.Component {
    handleAddToBasket = () => {
        this.props.handleAddToBasket(this.props.item)
    };
    handleRemoveFromBasket = () => {
        this.props.handleRemoveFromBasket(this.props.item)
    };

    render() {
        const {list, item} = this.props;
        if (!list.includes(item)) {
            return (
                <Button handleClick={this.handleAddToBasket}>Добавить</Button>
            )
        } else {
            return (
                <Button handleClick={this.handleRemoveFromBasket}>Убрать</Button>
            )
        }
    }
}

const mapStateToProps = ({basket}) => ({
    list: basket.list,
});

const mapDispatchToProps = (dispatch) => ({
    handleAddToBasket: (value) => dispatch(basketActions.addToBasket(value)),
    handleRemoveFromBasket: (value) => dispatch(basketActions.removeFromBasket(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToBasketContainer);

