import { TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

type UIButtonIconProps = {
  icon: React.ReactNode;
  onPress?: () => void;
};

const UIButtonIcon = ({ icon, onPress }: UIButtonIconProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default UIButtonIcon;
