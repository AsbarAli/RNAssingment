/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import {applyMiddleware, createStore} from 'redux';

import PostReducer from '../src/module/reducers/PostReducer';
import {middleware} from '../src/store/ConfigureStore';

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

  return propsError;
};

export const propsWithNavigation = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

export const testStore = (INITIAL_STATE) => {
  const createdStoreMiddlewares = applyMiddleware(...middleware)(createStore);

  return createdStoreMiddlewares(PostReducer, INITIAL_STATE);
};
