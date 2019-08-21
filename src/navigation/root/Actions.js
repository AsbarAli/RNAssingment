import Services from './Service';
import {POST_DETAIL} from './RootRoutes';

type navParams = any;

export const goBack = Services.goBack;

export const navigateToPostDetails = (params?: navParams): void => {
  Services.navigate(POST_DETAIL, params);
};
