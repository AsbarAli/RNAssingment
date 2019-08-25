/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Provider} from 'react-redux';

import PhotoScreens from '../../src/module/screens/photo/Photo.screens';
import {testStore, propsWithNavigation} from '../../utils';

const store = testStore();

describe('Photo screen', () => {
  describe('Rendering', () => {
    let wrapper: ShallowWrapper;
    let props: any;

    beforeEach(() => {
      props = propsWithNavigation({});
      wrapper = shallow(
        <Provider store={store}>
          <PhotoScreens {...props} />
        </Provider>
      );
    });

    it('should match to snap shot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
