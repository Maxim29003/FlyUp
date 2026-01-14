import React from 'react';
import MainLayout from '@layouts/MainLayout/MainLayout';
import UIText from '@ui/UIText/UIText';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import { observer } from 'mobx-react-lite';
import { gameStore } from '@store/GameStore';
import Column from '@layouts/Column/Column';
import { styles } from './styles';

const RecordScreen = observer(() => {
  const results = gameStore.results;
  const bestScore =
    results.length > 0
      ? results.reduce((prev, current) =>
          prev.score > current.score ? prev : current,
        ).score
      : 0;
  return (
    <MainLayout>
      <UIText variant="heading" color={Colors.WHITE}>
        РЕКОРДЫ
      </UIText>

      <Column style={styles.scoreColumn}>
        <UIText>Очки</UIText>
        <Spacer vertical={4} />
        <UIText>{bestScore}</UIText>
      </Column>
    </MainLayout>
  );
});

export default RecordScreen;
