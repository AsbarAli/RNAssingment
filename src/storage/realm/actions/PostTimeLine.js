// @flow
import PostTimeLine from '../models/PostTimeLine';
import type {PostTimeLineTypeInterface} from './models/Post';

/**
 * Flow type of Post actions
 * @type {Object}
 */
export type PostActionsInterface = {
  createPostTimeLine(PostTimeLine: PostActionsInterface): Promise<PostTimeLine>,
  getPostTimeLine(): PostTimeLine,
};

/**
 * Creates post realm actions
 * @param  {Realm} realmInstance Realm instance
 * @return {Object}               [description]
 */
export default (realmInstance: any): any => {
  return {
    /**
     * Create posts
     * @param  {any} postTimeLine                             Post response from server
     * @return {Promise<PostTimeLineTypeInterface>}           Created post object
     */
    createPostTimeLine: (postTimeLine: PostTimeLine): Promise<any> => {
      return new Promise((resolve, reject) => {
        try {
          realmInstance.write(() => {
            const createdPost: PostTimeLine = realmInstance.create(PostTimeLine.get(), postTimeLine, true);
            console.log('createdPost', createdPost);
            resolve(createdPost);
          });
        } catch (err) {
          reject(err);
        }
      });
    },

    /**
     * Get the all posts
      * @return {PostTimeLineTypeInterface}
     */
    getPostTimeLine: (): PostTimeLineTypeInterface<any> => {
      return realmInstance
        .objects(PostTimeLine.get());
    },
  };
};
