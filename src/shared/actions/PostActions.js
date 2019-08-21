import {
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,

  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from './Types';

export const getAllPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getAllPostsSuccess = (response) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: response,
  };
};

export const getAllPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error,
  };
};

export const getAllUsers = () => {
  return {
    type: GET_USERS,
  };
};

export const getAllUsersSuccess = (response) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: response,
  };
};

export const getAllUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};

export default {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess,

  getAllUsers,
  getAllUsersFailure,
  getAllUsersSuccess,
};
