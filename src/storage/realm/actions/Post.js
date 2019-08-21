// @flow
import Post from '../models/Post';
import type {PostTypeInterface} from './models/Post';

/**
 * Flow type of Post actions
 * @type {Object}
 */
export type PostActionsInterface = {
  createPosts(post: PostActionsInterface): Promise<Post>,
  getPosts(): Post,
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
     * @param  {any} post                             Post response from server
     * @return {Promise<PostTypeInterface>}           Created post object
     */
    createPosts: (post: Post): Promise<any> => {
      return new Promise((resolve, reject) => {
        try {
          realmInstance.write(() => {
            const createdPost: Post = realmInstance.create(Post.get(), post, true);
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
      * @return {PostTypeInterface}
     */
    getPosts: (): PostTypeInterface<any> => {
      return realmInstance
        .objects(Post.get());
    },
  };
};
