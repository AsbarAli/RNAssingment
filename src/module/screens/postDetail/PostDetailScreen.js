// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './PostDetail.styles';
import {navigateToPhoto} from '../../../navigation/root/Actions';

type PostDetailProps = {};
type PostDetailState = {};

class PostDetailScreen extends React.PureComponent<PostDetailProps, PostDetailState> {
  static defaultProps: any

  constructor(props: PostDetailProps) {
    super(props);
  }

  handleThumbnail = () => {
    navigateToPhoto();
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

  renderGridLayout = () => {
    return (
      <Button
        onPress={this.handleThumbnail}
        title="Go full"
      />
    );
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {this.renderPostDetail()}
        {this.renderGridLayout()}
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
