// @flow
import {takeLatest, call, put} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import {GET_POSTS} from '../actions/Types';
import Actions from '../actions/PostActions';
import PostService from '../../api/PostService';
import UserService from '../../api/UserService';

export default () => {
  function* getAllPosts() {
    try {
      const userList = yield call(UserService.getAllUsers);
      const postList = yield call(PostService.getAllPosts);
      yield put(Actions.getAllPostsSuccess({postList, userList}));
    } catch (error) {
      yield put(Actions.getAllPostsFailure(error));
    }
  }

  function* watchGetAllPosts(): Saga<void> {
    yield takeLatest(GET_POSTS, getAllPosts);
  }

  return {
    watchGetAllPosts,
  };
};
