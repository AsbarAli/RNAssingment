import {createReducer} from 'reduxsauce';

import {
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  UPDATE_POST,
} from '../../shared/actions//Types';
import {GET_ALBUMS, GET_ALBUMS_FAILURE, GET_ALBUMS_SUCCESS} from '../../shared/actions/album/Types';
import {updatePostList, updateAlbumList} from '../../service/PostService';

export const POST_INITIAL_STATE = {
  postList: null,
  getPostListLoading: false,
  getPostListError: null,

  photoList: null,
  getAlbumListLoading: false,
  getAlbumListError: null,
};

export const getPostList = (state: any = POST_INITIAL_STATE) => {
  return ({
    ...state,
    getPostListLoading: true,
    getPostListError: null,
  });
};

export const getPostListSuccess = (state: any = POST_INITIAL_STATE, {payload}: any) => {
  return ({
    ...state,
    postList: updatePostList(payload),
    getPostListLoading: false,
    getPostListError: null,
  });
};

export const getPostListFailure = (state: any = POST_INITIAL_STATE, {error}: any) => {
  return ({
    ...state,
    getPostListLoading: false,
    getPostListError: error,
  });
};

export const getAlbumList = (state: any = POST_INITIAL_STATE) => {
  return ({
    ...state,
    getAlbumListLoading: true,
    getAlbumListError: null,
  });
};

export const getAlbumListSuccess = (state: any = POST_INITIAL_STATE, {payload}: any) => {
  return ({
    ...state,
    photoList: updateAlbumList(payload),
    getPostListLoading: false,
    getPostListError: null,
  });
};

export const getAlbumListFailure = (state: any = POST_INITIAL_STATE, {error}: any) => {
  return ({
    ...state,
    getPostListLoading: false,
    getPostListError: error,
  });
};

export const updateAllPost = (state: any = POST_INITIAL_STATE, {payload}: any) => {
  return ({
    ...state,
    postList: payload,
  });
};

const ACTION_HANDLERS = {
  [GET_POSTS]: getPostList,
  [GET_POSTS_FAILURE]: getPostListFailure,
  [GET_POSTS_SUCCESS]: getPostListSuccess,

  [GET_ALBUMS]: getAlbumList,
  [GET_ALBUMS_FAILURE]: getAlbumListFailure,
  [GET_ALBUMS_SUCCESS]: getAlbumListSuccess,

  [UPDATE_POST]: updateAllPost,
};

export default createReducer(POST_INITIAL_STATE, ACTION_HANDLERS);
