// @flow
import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import metrics from '../../../themes/metrics';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    flex: 1,
    margin: 10,
    padding: 10,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  postBodyWrapper: {
    flex: 7,
    paddingTop: 10,
  },
  profieDetailWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '80%',
  },
  profileImage: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  titleText: {
    fontSize: metrics.fontSize.medium,
    paddingBottom: 5,
  },
  userNameText: {
    fontSize: metrics.fontSize.medium,
  },
  userWebsite: {
    color: colors.blue,
    fontSize: metrics.fontSize.small,
  },
});

export default style;
