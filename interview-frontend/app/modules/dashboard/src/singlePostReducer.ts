import {
   FETCH_SINGLE_POST,
   CLEAR_POST
} from '../../types';
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SINGLE_POST:
            return action.payload
        case CLEAR_POST:
            return []
        default:
            return state;
    }
};