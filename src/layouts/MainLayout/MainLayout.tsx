import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

type MainLayoutProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
} & ViewProps;

const MainLayout = ({ children, style, ...viewProps }: MainLayoutProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      {...viewProps}
      style={[
        styles.container,
        {
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default MainLayout;
