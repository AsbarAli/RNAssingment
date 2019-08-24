import Post from './Post';

// @flow
/**
 * Post Time Line Realm model
 */
export default class PostTimeLine {
  /**
   * Getter for the class name
   * @return {String} Class name
   */
  static get() {
    return PostTimeLine.schema.name;
  }

  /**
   * Gets the model primary key
   * @return {String} Primary key of the PostTimeLine model
   */
  static primaryKey() {
    return PostTimeLine.schema.primaryKey;
  }

  /**
   * Class (Realm) schema
   * @type {Object}
   */
  static schema = {
    name: 'PostTimeLine',
    primaryKey: 'id',

    properties: {
      id: 'int',
      post: `${Post.get()}[]`,
    },
  }
}

/**
 * Post model definition
 */
export type PostTimeLineTypeInterface = {
  id: number,
  post: Array<any>,
};
