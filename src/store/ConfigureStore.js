// @flow
import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Config from 'react-native-config';

import Reducers, {INITIAL_STATE} from './Reducers';
import sagas from './Sagas';

// Apply Reactotron Dev tool initialization if running on development
const reactotronStoreAction = Config.ENABLE_REACTOTRON && Config.ENABLE_REACTOTRON == 'true' ?
  require('../../config/reactotron/reactotron.config').default : null;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const middleware = [
  sagaMiddleware,
];

export default (): Store => {
  // To get Reactotron working with redux, we need to use Reactotron.createStore instead of Redux createStore.
  // We are only using the Reactotron.createStore on development environment.
  const store = (reactotronStoreAction || createStore)(Reducers, INITIAL_STATE, applyMiddleware(...middleware));

  // Run the sagas middleware
  sagaMiddleware.run(sagas);

  return store;
};
