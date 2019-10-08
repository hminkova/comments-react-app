import comments from '../apis/comments';
import history from '../history';

import {
    FETCH_COMMENTS,
    FETCH_COMMENT,
    CREATE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT
} from './types';

export const fetchComments = () => async dispatch => {
    const response = await comments.get('/comments');
    
    dispatch({
        type: FETCH_COMMENTS,
        payload: response.data
    });
};

export const fetchComment = (id) => async dispatch => {
    const response = await comments.get(`/comments/${id}`);

    dispatch({
        type: FETCH_COMMENT,
        payload: response.data
    });
};

export const createComment = formValues => async dispatch => {
    const response = await comments.post('/comments', formValues);

    dispatch({
        type: CREATE_COMMENT,
        payload: response.data
    });
}

export const editComment = (id, formValues) => async dispatch => {
    const response = await comments.patch(`/comments/${id}`, formValues);

    dispatch({
        type: EDIT_COMMENT,
        payload: response.data
    });

    history.push('/');
}

export const deleteComment = id => async dispatch => {
    await comments.delete(`/comments/${id}`);

    dispatch({
        type: DELETE_COMMENT,
        payload: id
    });
}