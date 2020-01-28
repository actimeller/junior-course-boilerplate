import * as types from './types';

export const saveBasketStart = () => {
    return {
        type: types.SAVE_BASKET_START
    }
};

export const saveBasketSuccess = (value) => {
    return {
        type: types.SAVE_BASKET_SUCCESS,
        payload: value
    }
};

export const saveBasketFail = (value) => {
    return {
        type: types.SAVE_BASKET_FAIL,
        payload: value
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

export const resetBasket = () => {
    return {
        type: types.RESET_BASKET
    }
};
