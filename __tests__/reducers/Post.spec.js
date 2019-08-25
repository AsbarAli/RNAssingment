import {GET_POSTS} from '../../src/shared/actions/Types';
import PostReducer from '../../src/module/reducers/PostReducer';

describe('Post reducer', () => {
  const expectedInitialState = {postList: null, getPostListLoading: false, getPostListError: null,
    photoList: null, getAlbumListLoading: false, getAlbumListError: null};

  it('Should return default state', () => {
    const newState = PostReducer(expectedInitialState, {});
    expect(newState).toEqual(expectedInitialState);
  });

  it('Should return new state if receiving type', () => {
    const expectedOutput = {postList: null, getPostListLoading: true, getPostListError: null,
      photoList: null, getAlbumListLoading: false, getAlbumListError: null};

    const newState = PostReducer(expectedInitialState, {
      type: GET_POSTS,
    });

    expect(newState).toEqual(expectedOutput);
  });
});
