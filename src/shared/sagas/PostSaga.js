// @flow
import {takeLatest, call, put} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import {GET_POSTS} from '../actions/Types';
import Actions from '../actions/PostActions';

export default () => {
  function* getAllPosts() {
    try {
      // const results = yield call(TodoService.getOrderItems, pageNum, pageSize, searchText);
      const results = null;
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
