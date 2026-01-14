import { StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';
import { maxWidth } from '@utils/normalizer';

export const styles = StyleSheet.create({
  base: {
    width: '100%',
    maxWidth,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: Colors.RED,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.WHITE_20,
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
