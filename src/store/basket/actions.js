import * as types from './types';

export const loadBasketStart = () => {
    return {
        type: types.LOAD_BASKET_START
    }
};

export const loadProBasketSuccess = (value) => {
    return {
        type: types.LOAD_BASKET_SUCCESS,
        payload: value
    }
};

export const loadBasketFail = (value) => {
    return {
        type: types.LOAD_BASKET_FAIL,
        payload: value
    }
};

export const resetBasket = () => {
    return {
        type: types.RESET_BASKET
    }
};

export const addToBasket = (value) => {
    return {
        type: types.ADD_TO_BASKET,
        payload: value
    }
};

export const removeFromBasket = (value) => {
    return {
        type: types.REMOVE_FROM_BASKET,
        payload: value
    }
};

