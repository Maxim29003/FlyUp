import { TouchableOpacity } from 'react-native';
import React from 'react';
import UIText from '@ui/UIText/UIText';
import { Colors } from '@styles/colors';
import { styles } from './styles';

type UIButtonProps = {
  variant: 'primary' | 'secondary';
  text: string;
  icon?: React.ReactNode;
  onPress?: () => void;
};

const UIButton = ({
  variant = 'primary',
  text,
  icon,
  onPress,
}: UIButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        variant === 'primary' ? styles.primary : styles.secondary,
        icon ? styles.withIcon : null,
      ]}
      onPress={onPress}
    >
      {icon}
      <UIText
        color={variant === 'primary' ? Colors.WHITE : Colors.WHITE_60}
        variant="button"
      >
        {text}
      </UIText>
    </TouchableOpacity>
  );
};

export default UIButton;
