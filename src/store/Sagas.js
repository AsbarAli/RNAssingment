// @flow
import {all, fork} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import PostSaga from '../shared/sagas/PostSaga';
import AlbumSaga from '../shared/sagas/AlbumSaga';

const forkedSagas = function* root(): Saga<void> {
  const createdPostSaga = PostSaga();
  const createAlbumSaga = AlbumSaga();

  yield all([
    fork(createdPostSaga.watchGetAllPosts),
    fork(createAlbumSaga.watchGetAllPhotoes),
  ]);
};

export default forkedSagas;
