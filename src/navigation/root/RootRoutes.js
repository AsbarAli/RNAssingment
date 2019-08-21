import PostScreen from '../../module/screens/post/PostScreen';
import PostDetailsScreen from '../../module/screens/postDetail/PostDetailScreen';

export const POST = 'POST';
export const POST_DETAIL = 'POST_DETAIL';

export const ROUTES = {
  [POST]: {
    screen: PostScreen,
    path: `${POST}`,
  },
  [POST_DETAIL]: {
    screen: PostDetailsScreen,
    path: `${POST_DETAIL}`,
  },
};
