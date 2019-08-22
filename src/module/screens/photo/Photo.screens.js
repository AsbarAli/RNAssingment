// @flow
import React from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './Photo.styles';

type PhotoProps = {};
type PhotoState = {};

class PhotoScreen extends React.PureComponent<PhotoProps, PhotoState> {
  static defaultProps: any

  constructor(props: PhotoProps) {
    super(props);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://via.placeholder.com/600/a7c272'}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

PhotoScreen.propTypes = {};

PhotoScreen.defaultProps = {};

const mapStateToProps = (state: any, ownProps: PhotoProps) => {
  return {
    // TODO: Map additional props here
  };
};

export default connect(mapStateToProps)(PhotoScreen);
