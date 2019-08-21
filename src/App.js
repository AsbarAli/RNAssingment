/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';

import RootNavigation from '../src/navigation/root';
import {postActions} from './storage/realm';
import Config from 'react-native-config';

import styles from './App.styles';
import {setBaseURL} from '../android/app/api/RestService';

setBaseURL(Config.BASE_URL);

const App = () => {
  console.log('Config.BASE_URL', Config.BASE_URL);
  const post = {id: 1, title: 'title', description: 'description'};
  postActions.createPosts(post);
  console.log('postActions.getPosts()', postActions.getPosts());

  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
};

export default App;
