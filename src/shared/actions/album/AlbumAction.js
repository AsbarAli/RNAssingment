import {
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE,
} from './Types';

export const getAllAlbums = (userId) => {
  return {
    type: GET_ALBUMS,
    payload: userId,
  };
};

export const getAllAlbumsSuccess = (response) => {
  return {
    type: GET_ALBUMS_SUCCESS,
    payload: response,
  };
};

export const getAllAlbumsFailure = (error) => {
  return {
    type: GET_ALBUMS_FAILURE,
    payload: error,
  };
};

export default {
  getAllAlbums,
  getAllAlbumsFailure,
  getAllAlbumsSuccess,
};
