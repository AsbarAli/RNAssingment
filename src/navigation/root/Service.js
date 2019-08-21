import {
  NavigationActions,
  NavigationScreenProp,
  StackActions,
} from 'react-navigation';

let _navigator: NavigationScreenProp<any, any> | null = null;
type navParams = any;

const setStackNavigator = (
  navigatorRef: NavigationScreenProp<any, any>
): void => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params: navParams = {}): void => {
  _navigator &&
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
};

const goBack = (): void => {
  _navigator && _navigator.dispatch(NavigationActions.back());
};

const popToTop = (): void => {
  _navigator && _navigator.dispatch(StackActions.popToTop());
};

export default {
  popToTop,
  goBack,
  navigate,
  setStackNavigator,
};
