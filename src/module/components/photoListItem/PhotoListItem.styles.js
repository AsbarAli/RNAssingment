// @flow
import {StyleSheet, Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSize: {
    height: entireScreenWidth / 3,
    width: entireScreenWidth / 3,
  },
});

export default style;
