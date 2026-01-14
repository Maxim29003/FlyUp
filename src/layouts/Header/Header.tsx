import { View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import Row from '@layouts/Row/Row';
import SettingsIcon from '@assets/svg/SettingsIcon';
import CupIcon from '@assets/svg/CupIcon';
import { Colors } from '@styles/colors';
import UIButtonIcon from '@ui/UIButtonIcon/UIButtonIcon';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import UIText from '@ui/UIText/UIText';
import CrossIcon from '@assets/svg/CrossIcon';
import { gameStore } from '@store/GameStore';
import BackIcon from '@assets/svg/BackIcon';
import { styles } from './styles';

type HeaderProps = {
  variant: 'main' | 'game' | 'back';
};

const Header = observer(function Header({ variant }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const navigation = useAppNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 15,
          paddingLeft: insets.left + 15,
          paddingRight: insets.right + 15,
        },
      ]}
    >
      <Row justify="space-between" align="center">
        {variant === 'main' && (
          <>
            <UIButtonIcon
              icon={<CupIcon />}
              onPress={() => navigation.navigate(SCREENS.RESULT)}
            />
            <UIButtonIcon
              icon={<SettingsIcon />}
              onPress={() => navigation.navigate(SCREENS.SETTINGS)}
            />
          </>
        )}
        {variant === 'game' && !gameStore.isGameOver && (
          <>
            <UIText variant="button" color={Colors.WHITE}>
              Счет: {gameStore.score}
            </UIText>

            <UIButtonIcon
              icon={<CrossIcon />}
              onPress={() => navigation.navigate(SCREENS.MAIN)}
            />
          </>
        )}

        {variant === 'back' && (
          <UIButtonIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        )}
      </Row>
    </View>
  );
});

export default Header;
