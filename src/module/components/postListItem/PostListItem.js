/* eslint-disable react/static-property-placement */
// @flow
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './PostListItem.styles';

type PostListItemProps = {};
type PostListItemState = {};

const anonymousProfile = 'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024';

class PostListItemComponent extends React.PureComponent<PostListItemProps, PostListItemState> {
  static defaultProps: any

  constructor(props: PostListItemProps) {
    super(props);
  }

  handlePost = () => {
    const {onPostClick, postDetail} = this.props;
    onPostClick(postDetail);
  }

  renderProfile = () => {
    return (
      <Image
        source={{uri: anonymousProfile}}
        style={styles.profileImage}
      />
    );
  }

  renderProfileDetail = () => {
    const {userDetail} = this.props.postDetail;

    return (
      <View style={styles.profieDetailWrapper}>
        <Text style={styles.userNameText}>
          {userDetail.name}
        </Text>
        <Text style={styles.userWebsite}>
          {userDetail.website}
        </Text>
      </View>
    );
  }

  renderBody = () => {
    const {title, body} = this.props.postDetail;

    return (
      <View style={styles.postBodyWrapper}>
        <Text
          numberOfLines={1}
          style={styles.titleText}
        >
          {title.toUpperCase()}
        </Text>
        <Text
          numberOfLines={4}
          style={styles.bodyText}
        >
          {body}
        </Text>
      </View>
    );
  }

  renderHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        {this.renderProfile()}
        {this.renderProfileDetail()}
      </View>
    );
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handlePost}
          style={styles.postWrapper}
        >
          {this.renderHeader()}
          {this.renderBody()}
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PostListItemComponent.propTypes = {
  onPostClick: PropTypes.func.isRequired,
  postDetail: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
    userDetail: PropTypes.shape({
      name: PropTypes.string,
      website: PropTypes.string,
    }),
  }).isRequired,
};

PostListItemComponent.defaultProps = {};

export default PostListItemComponent;
