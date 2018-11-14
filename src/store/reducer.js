import { combineReducers } from 'redux';
import appReducer from './reducers/app';
import postReducer from './reducers/posts';

const rootReducer = combineReducers({
    app: appReducer,
    posts: postReducer
});

export default rootReducer;