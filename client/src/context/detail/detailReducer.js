import {
    ADD_DETAIL,
    DELETE_DETAIL,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_DETAIL,
    FILTER_DETAILS,
    CLEAR_FILTER,
    DETAIL_ERROR,
    GET_DETAILS,
    CLEAR_DETAILS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload,
                loading: false
            }
        case ADD_DETAIL:
            return {
                ...state,
                details: [action.payload, ...state.details],
                loading: false

            };
        case UPDATE_DETAIL:
            return {
                ...state,
                details: state.details.map(detail => detail._id === action.payload._id ? action.payload : detail),
                loading: false

            };
        case DELETE_DETAIL:
            return {
                ...state,
                details: state.details.filter(detail => detail._id !== action.payload),
                loading: false

            };
        case CLEAR_DETAILS:
            return {
                ...state,
                details: null,
                filtered: null,
                error: null,
                current: null
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case FILTER_DETAILS:
            return {
                ...state,
                filtered: state.details.filter(detail => {
                    const regex = new RegExp(`${action.payload}`, 'gi')//g:global  i:insensitive
                    return detail.name.match(regex) || detail.email.match(regex) || detail.designation.match(regex) || detail.department.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case DETAIL_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
