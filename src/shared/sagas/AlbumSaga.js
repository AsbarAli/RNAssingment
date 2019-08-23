// @flow
import {takeLatest, call, put} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';

import {GET_ALBUMS} from '../actions/album/Types';
import Actions from '../actions/album/AlbumAction';
import AlbumService from '../../api/AlbumService';

export default () => {
  function* getAllPhotoes(userPayload) {
    const {payload} = userPayload;

    try {
      const albumList = yield call(AlbumService.getAllAlbums);
      const photoList = yield call(AlbumService.getAllPhotoes);
      yield put(Actions.getAllAlbumsSuccess({albumList, photoList, userId: payload}));
    } catch (error) {
      yield put(Actions.getAllAlbumsFailure(error));
    }
  }

  function* watchGetAllPhotoes(): Saga<void> {
    yield takeLatest(GET_ALBUMS, getAllPhotoes);
  }

  return {
    watchGetAllPhotoes,
  };
};
