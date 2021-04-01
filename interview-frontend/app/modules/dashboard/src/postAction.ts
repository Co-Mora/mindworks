import { FETCH_POSTS, FETCH_POST_COMMENTS, FETCH_SINGLE_POST } from "../../types";
import API from '../../../services/API';


export const fetchAllPosts = () => async dispatch => {
    const response = await API.getPosts()
    const { data } = response;

    try {
        dispatch({
            type: FETCH_POSTS,
            payload: data
        });

    } catch (e) {
        console.error(e.message);
    }
};

export const fetchSinglePost = (id) => async dispatch => {
    const response = await API.getSinglePost(id)
    const { data } = response;
    try {
        dispatch({
            type: FETCH_SINGLE_POST,
            payload: data
        });

    } catch (e) {
        console.error(e.message);
    }
};

export const fetchPostComments = (id) => async dispatch => {
    const response = await API.viewPostComments(id)
    const { data } = response;
    try {
        dispatch({
            type: FETCH_POST_COMMENTS,
            payload: data
        });

    } catch (e) {
        console.error(e.message);
    }
};