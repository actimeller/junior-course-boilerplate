import React from 'react';
import {connect} from 'react-redux';
import {basketActions} from '../store/basket';
import Basket from '../components/Basket/Basket';

class BasketContainer extends React.Component {

    handleSaveBasket = () => {
        const {list, saveBasketStart, saveBasketFail, saveBasketSuccess} = this.props;
        saveBasketStart();
        fetch('https://course-api.csssr.school/save', {
            method: 'POST',
            body: JSON.stringify(list),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                saveBasketFail(response.message);
            }
        })
            .then(data => {
                if (data.result === 'ERROR') {
                    saveBasketFail(data.message);
                } else {
                    saveBasketSuccess()
                }
            })
            .catch(error => {
                saveBasketFail(error.message);
            });
    };

    render() {
        const {list, isLoading, isSaved, isError, handleResetBasket} = this.props;
        return (
            <Basket
                list={list}
                isLoading={isLoading}
                isSaved={isSaved}
                isError={isError}
                handleSaveBasket={this.handleSaveBasket}
                handleResetBasket={handleResetBasket}
            />
        )
    }
}

const mapStateToProps = ({basket}) => ({
    list: basket.list,
    isLoading: basket.isLoading,
    isSaved: basket.isSaved,
    isError: basket.isError
});

const mapDispatchToProps = (dispatch) => ({
    handleResetBasket: () => dispatch(basketActions.resetBasket()),
    saveBasketStart: () => dispatch(basketActions.saveBasketStart()),
    saveBasketFail: () => dispatch(basketActions.saveBasketFail()),
    saveBasketSuccess: () => dispatch(basketActions.saveBasketSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
