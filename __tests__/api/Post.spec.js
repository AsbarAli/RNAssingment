import PostService from '../../src/api/PostService';
import {setBaseURL} from '../../src/api/RestService';

setBaseURL('http://baseURL');

describe('test `PostService`', () => {
  it('Fetches post data from server when server returns a successful response', async () => {
    // mock response
    const mockSuccessResponse = [{userId: 1, id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit'},
    ];

    // Since we await the call to getAllPosts() in PostService.js,
    // we Promise.resolve it in the test to a mockSuccessResponse object.
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);

    // Since we are awaiting the call to fetch in Rest Service and expecting the returned object to contain a json function,
    // which returns another Promise, we Promise.resolve to an object containing such a json function.
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    // Spy on global.fetch and mock it’s implementation to return the Promise object
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    // Since we await the call to getAllPosts() in PostService.js,
    // we Promise.resolve it in the test to a mockSuccessResponse object.
    const response = await PostService.getAllPosts();
    expect(response[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    expect(response[0].body).toBe('quia et suscipit');

    // Clear the mock
    global.fetch.mockClear();
    delete global.fetch;
  });
});
