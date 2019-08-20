// @flow
import Realm from 'realm';

import Post from "./models/Post";
import createPostActions from "./actions/Post";
import type {PostActionsInterface} from './actions/Post';

const realmInstance = new Realm({
  schema: [Post],
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
export const postActions: PostActionsInterface = createPostActions(realmInstance);

