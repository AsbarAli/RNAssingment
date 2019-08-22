// @flow
import {all, fork} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import PostSaga from '../shared/sagas/PostSaga';

const forkedSagas = function* root(): Saga<void> {
  const createdPostSaga = PostSaga();

  yield all([
    fork(createdPostSaga.watchGetAllPosts),
    fork(createdPostSaga.watchGetAllUsers),
  ]);
};

export default forkedSagas;
