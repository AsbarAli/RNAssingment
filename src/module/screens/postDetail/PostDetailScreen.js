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

  handlePhotoClick = (photoImage) => {
    navigateToPhoto(photoImage);
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

  renderItem = (photoItem) => {
    return (
      <PhotoListComponent
        item={photoItem.item}
        onPhotoClick={this.handlePhotoClick}
      />
    );
  }

  renderGridLayout = () => {
    const {photoList} = this.props;

    return (
      <View>
        <FlatList
          data={photoList}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>

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
  photoList: PropTypes.any.isRequired,
};

PostDetailScreen.defaultProps = {};

const mapStateToProps = (state: any, ownProps: PostDetailProps) => {
  return {
    photoList: state.post.photoList,
  };
};

export default connect(mapStateToProps)(PostDetailScreen);
