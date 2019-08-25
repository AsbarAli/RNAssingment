import {setBaseURL} from '../../src/api/RestService';
import AlbumService from '../../src/api/AlbumService';

setBaseURL('http://baseURL');

describe('test `AlbumService`', () => {
  it('Fetches album data from server when server returns a successful response', async () => {
    const mockSuccessResponse = [{id: 1, userId: 1, title: 'quidem molestiae enim'}];

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);

    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const response = await AlbumService.getAllAlbums();
    expect(response[0].userId).toBe(1);
    expect(response[0].title).toBe('quidem molestiae enim');

    // Clear the mock
    global.fetch.mockClear();
    delete global.fetch;
  });
});
