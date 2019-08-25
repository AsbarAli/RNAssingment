/* eslint-disable react/static-property-placement */
// @flow
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './PhotoListItem.styles';

type PhotoListItemProps = {
  item: Object,
  onPhotoClick: Function,
};
type PhotoListItemState = {};

class PhotoListItemComponent extends React.PureComponent<PhotoListItemProps, PhotoListItemState> {
  static defaultProps: any

  constructor(props: PhotoListItemProps) {
    super(props);
  }

  handlePhotoPress = () => {
    const {item, onPhotoClick} = this.props;

    onPhotoClick(item.url);
  }

  renderContent = (): ReactElement<any> => {
    const {item} = this.props;
    const thumbnailUrl = {uri: item.thumbnailUrl};

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handlePhotoPress}
        >
          <Image
            source={thumbnailUrl}
            style={styles.imageSize}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PhotoListItemComponent.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  }).isRequired,
  onPhotoClick: PropTypes.func.isRequired,
};

PhotoListItemComponent.defaultProps = {};

export default PhotoListItemComponent;
