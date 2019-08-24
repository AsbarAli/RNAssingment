/* eslint-disable react/static-property-placement */
// @flow
import React from 'react';
import {View, Text, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import {navigateToPostDetails} from '../../../navigation/root/Actions';
import {getAllPosts} from '../../../shared/actions/PostActions';
import PostListItemComponent from '../../components/postListItem/PostListItem';
import {getAllAlbums} from '../../../shared/actions/album/AlbumAction';

import styles from './Post.styles';
import {ALL_100_POSTS} from '../../../shared/strings';
import colors from '../../../themes/colors';

type PostProps = {};
type PostState = {};

class PostScreen extends React.PureComponent<PostProps, PostState> {
  static defaultProps: any

  constructor(props: PostProps) {
    super(props);
    props.dispatch(getAllPosts());
  }

  handlePost = (postDetail) => {
    navigateToPostDetails(postDetail);
    this.props.dispatch(getAllAlbums(postDetail.userId));
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

  renderSimpleLoadingIndicator = () => {
    return (
      <View style={styles.loadingWrapperSmall}>
        <ActivityIndicator
          color={colors.coolBlue}
          size="large"
        />
        <Text style={styles.loadingLabel}>Loading from server..</Text>
      </View>
    );
  }

  renderFlatList = () => {
    const refreshControl = (
      <RefreshControl
        colors={[colors.coolBlue]}
        onRefresh={this.handlePullRefresh}
        refreshing={this.props.getPostListLoading}
        tintColor={colors.coolBlue}
      />
    );

    return (
      <View style={styles.flatListWrapper}>
        <FlatList
          data={this.props.postList}
          keyExtractor={this._keyExtractor}
          refreshControl={refreshControl}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  renderContent = (): ReactElement<any> => {
    const {getPostListLoading} = this.props;

    const renderElement = getPostListLoading ? this.renderSimpleLoadingIndicator() : this.renderFlatList();

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
        {renderElement}
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
