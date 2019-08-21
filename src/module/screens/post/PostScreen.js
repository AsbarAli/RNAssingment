// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
// import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './Post.styles';
import {navigateToPostDetails} from '../../../navigation/root/Actions';

type PostProps = {};
type PostState = {};

class PostScreen extends React.PureComponent<PostProps, PostState> {
  static defaultProps: any

  constructor(props: PostProps) {
    super(props);
  }

  handleButtonPress = () => {
    navigateToPostDetails({id: 1});
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.handleButtonPress}
          title="Click Me"
        />
        <Text testID="welcome">Post screen</Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PostScreen.propTypes = {};

PostScreen.defaultProps = {};

export default PostScreen;
