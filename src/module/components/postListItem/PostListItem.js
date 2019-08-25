/* eslint-disable react/static-property-placement */
// @flow
import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './PostListItem.styles';

type PostListItemProps = {
  postDetail: Object,
  onPostClick: Function
};
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

  renderProfile = (): ReactElement<any> => {
    return (
      <Image
        source={{uri: anonymousProfile}}
        style={styles.profileImage}
      />
    );
  }

  renderProfileDetail = (): ReactElement<any> => {
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

  renderBody = (): ReactElement<any> => {
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

  renderHeader = (): ReactElement<any> => {
    return (
      <View style={styles.headerWrapper}>
        {this.renderProfile()}
        {this.renderProfileDetail()}
      </View>
    );
  }

  renderContent = (): ReactElement<any> => {
    const {postDetail: {title, id}} = this.props;
    const testID = title + id;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handlePost}
          style={styles.postWrapper}
          testID={testID}
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
    id: PropTypes.number,
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
