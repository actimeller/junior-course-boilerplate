import * as types from './types';

const initialState = {
    list: [],
    isLoading: false,
    isSaved: true,
    isError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_BASKET_START:
            return {
                ...state,
                isLoading: true,
                isSaved: false,
                isError: false
            };
        case types.SAVE_BASKET_FAIL:
            return {
                ...state,
                isLoading: false,
                isSaved: false,
                isError: true
            };
        case types.SAVE_BASKET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSaved: true,
                isError: false,
            };
        case types.ADD_TO_BASKET :
            return {
                ...state,
                isLoading: false,
                isSaved: false,
                isError: false,
                list: Array.from(new Set([...state.list, action.payload]))
            };
        case types.REMOVE_FROM_BASKET :
            return {
                ...state,
                isLoading: false,
                isSaved: false,
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
