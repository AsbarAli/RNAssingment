// @flow
/**
 * Post Realm model
 */
export default class Post {
  /**
   * Getter for the class name
   * @return {String} Class name
   */
  static get() {
    return Post.schema.name;
  }

  /**
   * Gets the model primary key
   * @return {String} Primary key of the Post model
   */
  static primaryKey() {
    return Post.schema.primaryKey;
  }

  /**
   * Class (Realm) schema
   * @type {Object}
   */
  static schema = {
    name: 'Post',
    primaryKey: 'id',

    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
    },
  }
}

/**
 * Post model definition
 */
export type PostTypeInterface = {
  id: number,
  title: string,
  description: string,
};
