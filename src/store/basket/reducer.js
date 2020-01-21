import * as types from './types';

const initialState = {
    list: [],
    isLoading: false,
    isError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_BASKET_START:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case types.LOAD_BASKET_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case types.LOAD_BASKET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            };
        case types.ADD_TO_BASKET :
            return {
                ...state,
                isLoading: false,
                isError: false,
                list: Array.from(new Set([...state.list, action.payload]))
            };
        case types.REMOVE_FROM_BASKET :
            return {
                ...state,
                isLoading: false,
                isError: false,
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
