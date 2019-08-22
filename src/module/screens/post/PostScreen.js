// @flow
import React from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import {navigateToPostDetails} from '../../../navigation/root/Actions';
import {getAllPosts} from '../../../shared/actions/PostActions';
import PostListItemComponent from '../../components/postListItem/PostListItem';

import styles from './Post.styles';
import {ALL_100_POSTS} from '../../../shared/strings';
import colors from '../../../themes/colors';

type PostProps = {};
type PostState = {};

class PostScreen extends React.PureComponent<PostProps, PostState> {
  static defaultProps: any

  constructor(props: PostProps) {
    super(props);
    this.props.dispatch(getAllPosts());
  }

  handlePost = (postDetail) => {
    navigateToPostDetails(postDetail);
  }

  handlePullRefresh = () => {
    this.props.dispatch(getAllPosts());
  }

  renderItem = (listItem) => {
    const {item: {post}} = listItem;

    return (
      <PostListItemComponent
        onPostClick={this.handlePost}
        postDetail={post}
      />
    );
  }

  _keyExtractor = (item, index) => index.toString();

  renderContent = (): ReactElement<any> => {
    const refreshControl = (
      <RefreshControl
        colors={[colors.coolBlue]}
        onRefresh={this.handlePullRefresh}
        refreshing={this.props.getPostListLoading}
        tintColor={colors.coolBlue}
      />
    );

    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text
            style={styles.headerText}
            testID="welcome"
          >
            {ALL_100_POSTS}
          </Text>
        </View>
        <View style={styles.flatListWrapper}>
          <FlatList
            data={this.props.postList}
            keyExtractor={this._keyExtractor}
            refreshControl={refreshControl}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PostScreen.propTypes = {
  dispatch: PropTypes.any.isRequired,
  getPostListLoading: PropTypes.bool.isRequired,
  postList: PropTypes.array,
};

PostScreen.defaultProps = {
  postList: null,
};

const mapStateToProps = (state: any, ownProps: PostProps) => {
  return {
    postList: state.post.postList,
    getPostListLoading: state.post.getPostListLoading,
  };
};

export default connect(mapStateToProps)(PostScreen);
