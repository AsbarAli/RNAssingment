// @flow
import {StyleSheet} from 'react-native';
import metrics from '../../../themes/metrics';
import colors from '../../../themes/colors';

const style = StyleSheet.create({
  body: {
    fontSize: metrics.fontSize.medium,
    // textAlign: 'center',
  },
  bodyWrapper: {
    margin: 10,
  },
  container: {
    flex: 1,
  },
  errorMessage: {
    color: colors.orange,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loading: {
    color: colors.orange,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photoAlbumName: {
    fontSize: metrics.fontSize.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photoAlbumWrapper: {
    padding: 10,
  },
  postDetail: {
    padding: 10,
  },
  title: {
    color: colors.coolBlue,
    fontFamily: 'Arial',
    fontSize: metrics.fontSize.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default style;
