/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import RootNavigation from '../src/navigation/root';
import Config from 'react-native-config';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import configureStore from './store/ConfigureStore';

import styles from './App.styles';
import {setBaseURL} from './api/RestService';

setBaseURL(Config.BASE_URL);

const store: Store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
