// @flow
import React from 'react';
import {View, Text} from 'react-native';
// import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './PostDetails.styles';

type PostDetailsProps = {};
type PostDetailsState = {};

class PostDetailsScreen extends React.PureComponent<PostDetailsProps, PostDetailsState> {
  static defaultProps: any

  constructor(props: PostDetailsProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text>Post Details screen</Text>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PostDetailsScreen.propTypes = {};

PostDetailsScreen.defaultProps = {};

export default PostDetailsScreen;
