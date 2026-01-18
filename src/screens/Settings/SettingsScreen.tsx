import { Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import MainLayout from '@layouts/MainLayout/MainLayout';
import UIText from '@ui/UIText/UIText';
import { Colors } from '@styles/colors';
import Slider from '@react-native-community/slider';
import Column from '@layouts/Column/Column';
import Row from '@layouts/Row/Row';
import { Spacer } from '@ui/Spacer/Spacer';
import UIButton from '@ui/UIButton/UIButton';
import { gameStore } from '@store/GameStore';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import { styles } from './styles';
import { observer } from 'mobx-react-lite';

const SettingsScreen = observer(() => {
  const [speed, setSpeed] = useState(gameStore.speed);
  const navigation = useAppNavigation();

  return (
    <MainLayout>
      <UIText variant="heading" color={Colors.WHITE}>
        НАСТРОЙКИ
      </UIText>
      <Spacer vertical={30} />
      <Column flex={1} align="center">
        <Column style={styles.section}>
          <Row align="center" justify="space-between">
            <UIText variant="label" color={Colors.WHITE_50}>
              Скорость мяча
            </UIText>
            <UIText variant="subheading" color={Colors.RED}>
              {Math.round(speed)}
            </UIText>
          </Row>
          <Spacer vertical={16} />
          <Slider
            value={speed}
            minimumValue={500}
            maximumValue={1500}
            onValueChange={setSpeed}
            minimumTrackTintColor={Colors.RED}
            maximumTrackTintColor={Colors.WHITE_10}
          />
        </Column>

        <Spacer vertical={30} />

        <UIButton
          variant="primary"
          text="Сохранить"
          onPress={() => {
            gameStore.setSpeed(Math.round(speed));
            Alert.alert('Готово', 'Настройки сохранены');
          }}
        />
        <Spacer vertical={8} />
        <UIButton
          variant="secondary"
          text="Статистика"
          onPress={() => {
            navigation.navigate(SCREENS.STATISTIC);
          }}
        />
        <Spacer vertical={30} />
      </Column>
    </MainLayout>
  );
})

export default SettingsScreen;
