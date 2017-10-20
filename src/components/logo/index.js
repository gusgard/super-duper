import React, { PureComponent } from 'react';
import { Image, StyleSheet } from 'react-native';

import { width } from '@themes';
import { logo } from '@images';

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: width * 0.5,
    width: width * 0.5,
  },
});

export default class Logo extends PureComponent {
  render() {
    return <Image style={styles.image} source={logo} />;
  }
}
