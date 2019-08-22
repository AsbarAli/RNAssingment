// @flow
import React from 'react';
import {View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './Post.styles';
import {navigateToPostDetails} from '../../../navigation/root/Actions';
import {getAllPosts, getAllUsers} from '../../../shared/actions/PostActions';

type PostProps = {};
type PostState = {};

class PostScreen extends React.PureComponent<PostProps, PostState> {
  static defaultProps: any

  constructor(props: PostProps) {
    super(props);
  }

  handleButtonPress = () => {
    navigateToPostDetails({id: 1});
    this.props.dispatch(getAllPosts());
    this.props.dispatch(getAllUsers());
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

const mapStateToProps = (state: any, ownProps: PostProps) => {
  return {
    // TODO: Map additional props here
  };
};

export default connect(mapStateToProps)(PostScreen);
