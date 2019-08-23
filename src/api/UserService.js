import {GET} from './RestService';

const urlFactory = {
  userList: (): string => `users`,
};

const UserService = {
  getAllUsers: async (): Promise<any> => {
    const endpoint: string = urlFactory.userList();
    const urlParams = {};
    const headers = {};

    return GET(endpoint, headers, urlParams);
  },
};

export default UserService;
