import * as types from './types';

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

