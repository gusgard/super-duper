import { StyleSheet } from 'react-native';

import { colors } from '@themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: colors.primaryLight,
  }
});
