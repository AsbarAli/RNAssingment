import {createReducer} from 'reduxsauce';
import {
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,

  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from '../../shared/actions//Types';

export const POST_INITIAL_STATE = {
  postList: null,
  getPostListLoading: false,
  getPostListError: null,

  userList: null,
  getUsersLoading: false,
  getUsersError: null,
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
    postList: payload,
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

export const getUserList = (state: any = POST_INITIAL_STATE) => {
  return ({
    ...state,
    getUsersLoading: true,
    getUsersError: null,
  });
};

export const getUserListSuccess = (state: any = POST_INITIAL_STATE, {payload}: any) => {
  return ({
    ...state,
    userList: payload,
    getUsersLoading: false,
    getUsersError: null,
  });
};

export const getUserListFailure = (state: any = POST_INITIAL_STATE, {error}: any) => {
  return ({
    ...state,
    getUsersLoading: false,
    getUsersError: error,
  });
};

const ACTION_HANDLERS = {
  [GET_POSTS]: getPostList,
  [GET_POSTS_FAILURE]: getPostListFailure,
  [GET_POSTS_SUCCESS]: getPostListSuccess,

  [GET_USERS]: getUserList,
  [GET_USERS_FAILURE]: getUserListFailure,
  [GET_USERS_SUCCESS]: getUserListSuccess,
};

export default createReducer(POST_INITIAL_STATE, ACTION_HANDLERS);
