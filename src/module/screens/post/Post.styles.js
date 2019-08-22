// @flow
import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import metrics from '../../../themes/metrics';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.coolWhite,
    flex: 1,
  },
  flatListWrapper: {
    flex: 11,
  },
  headerText: {
    fontSize: metrics.fontSize.large,
  },
  headerWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default style;
