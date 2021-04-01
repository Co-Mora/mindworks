import { combineReducers } from 'redux';
import posts from './dashboard/src/postReducer'
import singlePost from './dashboard/src/singlePostReducer';
import comments from './dashboard/src/commentReducer';

export default combineReducers({
    posts,
    comments,
    singlePost
});