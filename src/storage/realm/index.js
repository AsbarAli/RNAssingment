// @flow
import Realm from 'realm';

import Post from './models/Post';
import UserDetail from './models/userDetail';

import createPostActions from './actions/Post';
import createPostTimeLineActions from './actions/PostTimeLine';
import PostTimeLine from './models/PostTimeLine';
import type {PostActionsInterface} from './actions/Post';

const realmInstance = new Realm({
  schema: [PostTimeLine, Post, UserDetail],
});

/**
 * Get a singleton realm instance
 * @return {Realm} Realm instance
 */
export const getRealmInstance = () => realmInstance;

/**
 * Available post actions
 * @type {PostActionsInterface}
 */
export const postTimeLineActions: PostActionsInterface = createPostTimeLineActions(realmInstance);
export const postActions: PostActionsInterface = createPostActions(realmInstance);

