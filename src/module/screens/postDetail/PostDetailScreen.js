// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './PostDetail.styles';

type PostDetailProps = {};
type PostDetailState = {};

class PostDetailScreen extends React.PureComponent<PostDetailProps, PostDetailState> {
  static defaultProps: any

  constructor(props: PostDetailProps) {
    super(props);
  }

  renderPostDetail = () => {
    const {title, body} = this.props.navigation.state.params;
    const upperCaseTitle = title.toUpperCase();

    return (
      <View>
        <Text>{upperCaseTitle}</Text>
        <Text>{body}</Text>
      </View>
    );
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {this.renderPostDetail()}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PostDetailScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

PostDetailScreen.defaultProps = {};

const mapStateToProps = (state: any, ownProps: PostDetailProps) => {
  return {
    // TODO: Map additional props here
  };
};

export default connect(mapStateToProps)(PostDetailScreen);
