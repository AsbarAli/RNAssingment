// @flow
import {takeLatest, call, put} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import {GET_POSTS, GET_USERS} from '../actions/Types';
import Actions from '../actions/PostActions';
import PostService from '../../api/PostService';

export default () => {
  function* getAllPosts() {
    try {
      const results = yield call(PostService.getAllPosts);
      yield put(Actions.getAllPostsSuccess(results));
    } catch (error) {
      yield put(Actions.getAllPostsFailure(error));
    }
  }

  function* getAllUsers() {
    try {
      const results = yield call(PostService.getAllUsers);
      yield put(Actions.getAllUsersSuccess(results));
    } catch (error) {
      yield put(Actions.getAllUsersFailure(error));
    }
  }

  function* watchGetAllPosts(): Saga<void> {
    yield takeLatest(GET_POSTS, getAllPosts);
  }

  function* watchGetAllUsers(): Saga<void> {
    yield takeLatest(GET_USERS, getAllUsers);
  }

  return {
    watchGetAllPosts,
    watchGetAllUsers,
  };
};
