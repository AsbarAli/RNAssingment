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
    color: colors.orange,
    flex: 1,
    fontSize: metrics.fontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerWrapper: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  loadingLabel: {
    alignSelf: 'center',
    paddingTop: 10,
  },
  loadingWrapperSmall: {
    flex: 11,
    justifyContent: 'center',
  },
});

export default style;
