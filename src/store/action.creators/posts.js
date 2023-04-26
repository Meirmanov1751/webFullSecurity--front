import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
} from './../const';
import instance from "../api";

export const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({

    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchPostsFailure = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
});

export const fetchPosts = () => async (dispatch) => {
    dispatch(fetchPostsRequest());
    debugger
    try {
        const response = await instance.get(`/api/posts/posts/`);
        dispatch(fetchPostsSuccess(response.data));
        debugger
    } catch (error) {
        dispatch(fetchPostsFailure(error));
    }
};