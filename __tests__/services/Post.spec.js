import {updatePostList} from '../../src/service/PostService';

describe('testing `Post Services`', () => {
  it('should handle happy scenario', () => {
    const payload = {
      postList: [{userId: 1, id: 1, title: 'title', body: 'body'}],
      userList: [{id: 1, name: 'name', website: 'http://web'}]};

    const expectedResult = [{userId: 1, id: 1, title: 'title', body: 'body',
      userDetail: {id: 1, name: 'name', website: 'http://web'}}];

    const postObject = updatePostList(payload);
    expect(postObject).toEqual(expectedResult);
  });

  it('should handle for undefined scenarios in user list', () => {
    const payload = {postList: [{userId: 1, id: 1, title: 'title', body: 'body'}], userList: undefined};
    const expectedResult = [{userId: 1, id: 1, title: 'title', body: 'body', userDetail: undefined}];

    const postObject = updatePostList(payload);
    expect(postObject).toEqual(expectedResult);
  });

  it('should handle all undefined scenarios', () => {
    const payload = {postList: undefined, userList: undefined};

    const postObject = updatePostList(payload);
    expect(postObject).toBeUndefined();
  });
});
