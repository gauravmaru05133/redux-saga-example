import { combineReducers } from 'redux';
const initialState = {
    loading: false,
    data: [],
    error: '',
};
export function userList(state = initialState, action) {
    switch (action.type) {
        case USER_LIST_LOADING:
            return {
                ...state,
                loading: true,
            };
        case USER_LIST_SUCCESS:
            let concatList = state?.data.concat(action.data)
            return {
                loading: false,
                data: concatList,
            };
        case USER_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export const USER_LIST_LOADING = 'USER_LIST_LOADING'
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
export const USER_LIST_FAILED = 'USER_LIST_FAILED'

const reducer = combineReducers({
    userList
});
export default reducer;
