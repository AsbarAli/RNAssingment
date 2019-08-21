// @flow
import React from 'react';
// import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import Service from './Service';
import {createAppContainer, createStackNavigator, NavigationScreenProp} from 'react-navigation';

import {ROUTES, POST} from './RootRoutes';

const STACK_CONFIG = {
  initialRouteName: POST,
  navigationOptions: {
    gesturesEnabled: false,
  },
};

export const RootStackNavigation = createAppContainer(
  createStackNavigator(ROUTES, STACK_CONFIG)
);

type RootStackProps = {};
type RootStackState = {};

class RootStackComponent extends React.PureComponent<RootStackProps, RootStackState> {
  static defaultProps: any

  constructor(props: RootStackProps) {
    super(props);
  }

   handleRef = (navigatorRef: NavigationScreenProp<any, any>): void => {
     Service.setStackNavigator(navigatorRef);
   }

  renderContent = (): ReactElement<any> => {
    return (
      <RootStackNavigation
        ref={this.handleRef}
      />
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

RootStackComponent.propTypes = {};

RootStackComponent.defaultProps = {};

export default RootStackComponent;
