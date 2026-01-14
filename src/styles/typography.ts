import { StyleSheet } from 'react-native';

export const Typography = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: '300',
  },
  titleMedium: {
    fontSize: 48,
    fontWeight: '300',
  },
  heading: {
    fontSize: 36,
    fontWeight: '300',
  },
  subheading: {
    fontSize: 24,
    fontWeight: '300',
  },
  button: {
    fontSize: 18,
    fontWeight: '300',
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
  },
  caption: {
    fontSize: 12,
    fontWeight: '300',
  },
});

export type FontSize = keyof typeof Typography;
