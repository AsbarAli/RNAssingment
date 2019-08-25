import PostService from '../../src/api/PostService';

describe('test `PostService`', () => {
  it('Check happ path', () => {
    return PostService.getAllPosts().then((res) => {
      expect(res).toBe('ss');
    });
  });
});
