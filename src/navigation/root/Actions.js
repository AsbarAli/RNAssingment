import Services from './Service';
import {POST_DETAIL, PHOTO} from './RootRoutes';

type navParams = any;

export const goBack = Services.goBack;

export const navigateToPostDetails = (params?: navParams): void => {
  Services.navigate(POST_DETAIL, params);
};

export const navigateToPhoto = (params?: navParams): void => {
  Services.navigate(PHOTO, params);
};
