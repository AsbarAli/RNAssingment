import {GET} from './RestService';

const urlFactory = {
  albums: (): string => `albums`,
  photoes: (): string => `photos`, // /photos?album=1 end point doesn't filter by album. so i have to fetch all photoes
};

const AlbumService = {
  getAllAlbums: async (userId: string): Promise<any> => {
    const endpoint: string = urlFactory.albums();
    const urlParams = {};
    const headers = {};

    return GET(endpoint, headers, urlParams);
  },
  getAllPhotoes: async (userId: string): Promise<any> => {
    const endpoint: string = urlFactory.photoes();
    const urlParams = {};
    const headers = {};

    return GET(endpoint, headers, urlParams);
  },
};

export default AlbumService;
