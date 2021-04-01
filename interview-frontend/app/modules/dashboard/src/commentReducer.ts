import {
    FETCH_POST_COMMENTS
} from '../../types';
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POST_COMMENTS:
            return action.payload
        default:
            return state;
    }
};