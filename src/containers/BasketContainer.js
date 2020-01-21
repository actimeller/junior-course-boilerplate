import {connect} from 'react-redux';
import {basketActions} from '../store/basket';
import Basket from '../components/Basket/Basket';

const mapStateToProps = ({basket}) => ({
    list: basket.list
});

const mapDispatchToProps = (dispatch) => ({
    handleResetBasket: () => dispatch(basketActions.resetBasket())
});

const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);

export default BasketContainer
