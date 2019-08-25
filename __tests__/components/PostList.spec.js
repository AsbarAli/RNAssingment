// @flow
import React from 'react';
import {shallow} from 'enzyme';

import PostListItem from '../../src/module/components/postListItem/PostListItem';

describe('Photo List Item', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const mockOnPress = jest.fn();
      const postDetail = {body: 'body', title: 'title', userDetail: {name: 'name', website: 'website'}};

      const photoListItem = shallow(
        <PostListItem
          item={{thumbnailUrl: 'some'}}
          onPostClick={mockOnPress}
          postDetail={{...postDetail}}
        />
      );
      expect(photoListItem).toMatchSnapshot();
    });
  });

  describe('Interaction', () => {
    describe('handle Photo Press', () => {
      const mockOnPress = jest.fn();
      // Instance of component
      let instance;

      const postDetail = {body: 'body', title: 'title', userDetail: {name: 'name', website: 'website'}};

      // preparing a reusable shallow rendered instance
      beforeEach(() => {
        instance = shallow(
          <PostListItem
            item={{thumbnailUrl: 'some'}}
            onPostClick={mockOnPress}
            postDetail={{...postDetail}}
          />
        ).instance();
        jest.clearAllMocks();
      });

      it('should call onPress', () => {
        instance.handlePost();

        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
      });
    });
  });
});

