import React from 'react';
import {shallow} from 'enzyme';

import PhotoListItem from '../../src/module/components/photoListItem/PhotoListItem.component';
import {checkProps} from '../../Utils';

describe('Photo List Item', () => {
  describe('Rendering', () => {
    const mockOnPress = jest.fn();
    const photoListItem = shallow(
      <PhotoListItem
        item={{thumbnailUrl: 'some'}}
        onPhotoClick={mockOnPress}
      />
    );

    it('should match to snapshot', () => {
      expect(photoListItem).toMatchSnapshot();
    });

    it('should render without errors', () => {
      expect(photoListItem.length).toBe(1);
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

  describe('Prop types', () => {
    describe('Checking Prop types', () => {
      it('it should not throw warning', () => {
        const mockOnPress = jest.fn();

        const expectedPropTypes = {item: {thumbnailUrl: 'http://something', url: 'http://blahblab'}, onPhotoClick: mockOnPress};

        const propsError = checkProps(PhotoListItem, expectedPropTypes);
        expect(propsError).toBeUndefined();
      });
    });
  });
});

