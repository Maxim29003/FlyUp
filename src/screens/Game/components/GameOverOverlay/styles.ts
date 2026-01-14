import { StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';
import { maxWidth } from '@utils/normalizer';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  scoreRow: {
    padding: 24,
    backgroundColor: Colors.WHITE_05,
    width: '100%',
    maxWidth: maxWidth,
  },
});
