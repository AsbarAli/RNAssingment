/* eslint-disable react/static-property-placement */
// @flow
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './PostDetail.styles';
import {navigateToPhoto} from '../../../navigation/root/Actions';
import PhotoListComponent from '../../components/photoListItem/PhotoListItem.component';
import {FIRST_PHOTO_ALBUM, INTERNET_CONNECTION_IS_REQUIRED, LOADING_PHOTOES} from '../../../shared/strings';

type PostDetailProps = {
  navigation: Object,
  photoList: Object,
  getAlbumListError: Object,
  getAlbumListLoading: boolean,
};
type PostDetailState = {};

class PostDetailScreen extends React.PureComponent<PostDetailProps, PostDetailState> {
  static defaultProps: any

  constructor(props: PostDetailProps) {
    super(props);
  }

  handleThumbnail = () => {
    navigateToPhoto();
  }

  handlePhotoClick = (photoImage) => {
    navigateToPhoto(photoImage);
  }

  renderPostDetail = (): ReactElement<any> => {
    const {title, body} = this.props.navigation.state.params;
    const upperCaseTitle = title.toUpperCase();

    return (
      <View style={styles.postDetail}>
        <Text
          style={styles.title}
          testID="title"
        >
          {upperCaseTitle}
        </Text>
        <View style={styles.bodyWrapper}>
          <Text
            style={styles.body}
            testID="body"
          >
            {body}
          </Text>
        </View>
      </View>
    );
  }

  renderItem = (photoItem): ReactElement<any> => {
    return (
      <PhotoListComponent
        item={photoItem.item}
        onPhotoClick={this.handlePhotoClick}
      />
    );
  }

  _keyExtractor = (item, index) => index.toString();

  renderGridLayout = (): ReactElement<any> => {
    const {photoList} = this.props;
    const {userDetail: {name}} = this.props.navigation.state.params;

    return (
      <View>
        <View style={styles.photoAlbumWrapper}>
          <Text
            style={styles.photoAlbumName}
            testID="photoAlbumTitle"
          >
            {name}{FIRST_PHOTO_ALBUM}
          </Text>
        </View>
        <FlatList
          data={photoList}
          keyExtractor={this._keyExtractor}
          numColumns={3}
          renderItem={this.renderItem}
          testID="photoFlatList"
        />
      </View>

    );
  }

  renderBottomContent = (): ReactElement<any> => {
    const {getAlbumListLoading, getAlbumListError} = this.props;
    let content = null;

    if (getAlbumListLoading) {
      content = (<Text style={styles.loading}>{LOADING_PHOTOES}</Text>);
    } else if (getAlbumListError) {
      content = (<Text style={styles.errorMessage}>{INTERNET_CONNECTION_IS_REQUIRED}</Text>);
    } else {
      content = this.renderGridLayout();
    }

    return content;
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        {this.renderPostDetail()}
        {this.renderBottomContent()}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PostDetailScreen.propTypes = {
  getAlbumListError: PropTypes.any,
  getAlbumListLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.any.isRequired,
  photoList: PropTypes.any,
};

PostDetailScreen.defaultProps = {
  getAlbumListError: null,
  photoList: null,
};

const mapStateToProps = (state: any, ownProps: PostDetailProps) => {
  return {
    photoList: state.post.photoList,
    getAlbumListLoading: state.post.getAlbumListLoading,
    getAlbumListError: state.post.getAlbumListError,
  };
};

export default connect(mapStateToProps)(PostDetailScreen);
