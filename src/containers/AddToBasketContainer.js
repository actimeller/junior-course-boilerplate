import React from 'react';
import {connect} from 'react-redux';
import {basketActions} from '../store/basket';
import AddToBasket from '../components/AddToBasket/AddToBasket';

const mapStateToProps = ({basket}) => ({
    list: basket.list,
    isLoading: basket.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    handleAddToBasket: (value) => dispatch(basketActions.addToBasket(value)),
    handleRemoveFromBasket: (value) => dispatch(basketActions.removeFromBasket(value)),
    loadBasketStart: () => dispatch(basketActions.loadBasketStart()),
    loadBasketFail: () => dispatch(basketActions.loadBasketFail()),
});

class AddToBasketContainer extends React.Component {

    fetchBasket = (url, id) => {
        this.props.loadBasketStart();

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(id),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.props.loadBasketFail(response.message);
            }
        })
    };

    handleAddToBasket = (id) => {
        this.fetchBasket('https://course-api.csssr.school/save', id)
            .then(data => {
                this.props.handleAddToBasket(id)
            })
            .catch(error => {
                this.props.loadBasketFail(error.message);
            });
    };
    handleRemoveFromBasket = (id) => {
        this.fetchBasket('https://course-api.csssr.school/save', id)
            .then(data => {
                this.props.handleRemoveFromBasket(id)
            })
            .catch(error => {
                this.props.loadBasketFail(error.message);
            });
    };

    render() {
        const {list, item, handleAddToBasket, handleRemoveFromBasket, isLoading} = this.props;
        if (!list.includes(item.id)) {
            return (
                <AddToBasket handleClick={this.handleAddToBasket} item={item.id} isLoading={isLoading}>Добавить</AddToBasket>
            )
        } else {
            return (
                <AddToBasket handleClick={this.handleRemoveFromBasket} item={item.id} isLoading={isLoading}>Убрать</AddToBasket>
            )
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToBasketContainer);

