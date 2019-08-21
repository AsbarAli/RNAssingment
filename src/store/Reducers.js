// @flow
import {combineReducers} from 'redux';

import PostReducer, {POST_INITIAL_STATE} from '../module/reducers/PostReducer';

export const INITIAL_STATE = {
  post: POST_INITIAL_STATE,
};

export default combineReducers({
  post: PostReducer,
});
