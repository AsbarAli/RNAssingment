import {setBaseURL} from '../../src/api/RestService';
import UserService from '../../src/api/UserService';

setBaseURL('http://baseURL');

describe('test `UserService`', () => {
  it('Fetches User data from server when server returns a successful response', async () => {
    const mockSuccessResponse = [
      {
        id: 1,
        name: 'Leanne Graham',
        website: 'hildegard.org',
      },
    ];

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);

    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const response = await UserService.getAllUsers();
    expect(response[0].name).toBe('Leanne Graham');
    expect(response[0].website).toBe('hildegard.org');

    global.fetch.mockClear();
    delete global.fetch;
  });
});
