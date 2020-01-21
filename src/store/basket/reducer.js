import * as types from './types';

const initialState = {
    list: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_BASKET :
            return {
                ...state,
                list: Array.from(new Set([...state.list, action.payload]))
            };
        case types.REMOVE_FROM_BASKET :
            return {
                ...state,
                list: state.list.filter(item => item !== action.payload)
            };
        case types.RESET_BASKET :
            return {
                ...initialState
            };
        default:
            return state
    }
};

export default reducer;
