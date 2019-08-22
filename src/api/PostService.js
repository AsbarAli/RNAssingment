import {GET} from './RestService';

const urlFactory = {
  postList: (): string => `posts`,
  userList: (): string => `users`,
};

const PostService = {
  getAllPosts: async (): Promise<any> => {
    const endpoint: string = urlFactory.postList();
    const urlParams = {};
    const headers = {};

    return GET(endpoint, headers, urlParams);
  },

  getAllUsers: async (): Promise<any> => {
    const endpoint: string = urlFactory.userList();
    const urlParams = {};
    const headers = {};

    return GET(endpoint, headers, urlParams);
  },
};

export default PostService;
