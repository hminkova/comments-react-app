import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import commentsReducer from './commentsReducer';

export default combineReducers({
    form: formReducer,
    comments: commentsReducer
})