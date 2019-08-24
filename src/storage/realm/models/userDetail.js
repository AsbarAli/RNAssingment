// @flow
/**
 * User Detail Realm model
 */
export default class UserDetail {
  /**
   * Getter for the class name
   * @return {String} Class name
   */
  static get() {
    return UserDetail.schema.name;
  }

  /**
   * Gets the model primary key
   * @return {String} Primary key of the UserDetail model
   */
  static primaryKey() {
    return UserDetail.schema.primaryKey;
  }

  /**
   * Class (Realm) schema
   * @type {Object}
   */
  static schema = {
    name: 'UserDetail',
    primaryKey: 'id',

    properties: {
      id: 'int',
      name: 'string',
      website: 'string',
    },
  }
}

/**
 * UserDetail model definition
 */
export type UserDetailTypeInterface = {
  id: number,
  title: string,
  description: string,
};
