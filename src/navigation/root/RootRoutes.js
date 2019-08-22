import PostScreen from '../../module/screens/post/PostScreen';
import PostDetailsScreen from '../../module/screens/postDetail/PostDetailScreen';
import PhotoScreens from '../../module/screens/photo/Photo.screens';

export const POST = 'POST';
export const POST_DETAIL = 'POST_DETAIL';
export const PHOTO = 'PHOTO';

export const ROUTES = {
  [POST]: {
    screen: PostScreen,
    path: `${POST}`,
  },
  [POST_DETAIL]: {
    screen: PostDetailsScreen,
    path: `${POST_DETAIL}`,
  },
  [PHOTO]: {
    screen: PhotoScreens,
    path: `${PHOTO}`,
  },
};
