import ActionTypes from './../utils/ActionTypes';

const usersReducer = (state = {
    userList: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS_SUCCESS: {
            state = {
                ...state,
                fetching: false,
                userList: action.payload
            }
            break;
        }
        case ActionTypes.GET_USERS_ERROR: {
            state = {
                ...state,
                fetching: false,
                status: 'error'
            }
            break;
        }
        default: return state;
    }
    return state;
}

export default usersReducer;