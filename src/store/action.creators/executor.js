import {
    FETCH_EXECUTORS_REQUEST,
    FETCH_EXECUTORS_SUCCESS,
    FETCH_EXECUTORS_FAILURE,
} from './../const';
import instance from "../api";

export const fetchExecutorsRequest = () => ({

    type: FETCH_EXECUTORS_REQUEST,
});

export const fetchExecutorsSuccess = (executors) => ({

    type: FETCH_EXECUTORS_SUCCESS,
    payload: executors,
});

export const fetchExecutorsFailure = (error) => ({
    type: FETCH_EXECUTORS_FAILURE,
    payload: error,
});

export const fetchExecutors = () => async (dispatch) => {
    dispatch(fetchExecutorsRequest());
    debugger
    try {
        const response = await instance.get(`/api/employee/employee/`);
        // const data = await response.json();
        // console.log(data)
        dispatch(fetchExecutorsSuccess(response.data.results));
    } catch (error) {
        dispatch(fetchExecutorsFailure(error));
    }
};