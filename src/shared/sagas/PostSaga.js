// @flow
import {takeLatest, call, put} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import {GET_POSTS} from '../actions/Types';
import Actions from '../actions/PostActions';
import PostService from '../../api/PostService';

export default () => {
  function* getAllPosts() {
    try {
      const results = yield call(PostService.getAllPosts);
      yield put(Actions.getAllPostsSuccess(results));
    } catch (error) {
      yield put(Actions.getOrderItemsFailure(error));
    }
  }

  function* watchGetAllPosts(): Saga<void> {
    yield takeLatest(GET_POSTS, getAllPosts);
  }

  return {
    watchGetAllPosts,
  };
};
