import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

import { Logo } from '@components';

import styles from './styles';

export default class HomeMainScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}
