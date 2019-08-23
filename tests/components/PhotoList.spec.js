import React from 'react';
import {shallow} from 'enzyme';

import PhotoListItem from '../../src/module/components/photoListItem/PhotoListItem.component';

describe('Photo List Item', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const mockOnPress = jest.fn();

      const photoListItem = shallow(
        <PhotoListItem
          item={{thumbnailUrl: 'some'}}
          onPhotoClick={mockOnPress}
        />
      );
      expect(photoListItem).toMatchSnapshot();
    });
  });

  describe('Interaction', () => {
    describe('handle Photo Press', () => {
      const mockOnPress = jest.fn();
      let instance;

      beforeEach(() => {
        instance = shallow(
          <PhotoListItem
            item={{thumbnailUrl: 'some'}}
            onPhotoClick={mockOnPress}
          />
        ).instance();
        jest.clearAllMocks();
      });

      it('should call onPress', () => {
        instance.handlePhotoPress();

        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
      });
    });
  });
});

