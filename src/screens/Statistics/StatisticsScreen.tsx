import { FlatList } from 'react-native';
import React, { useCallback } from 'react';
import MainLayout from '@layouts/MainLayout/MainLayout';
import UIText from '@ui/UIText/UIText';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import UIButton from '@ui/UIButton/UIButton';
import { observer } from 'mobx-react-lite';
import { gameStore } from '@store/GameStore';
import Column from '@layouts/Column/Column';
import { styles } from './styles';
import StatisticsItem from './components/StatisticsItem/StatisticsItem';
import { GameResult } from '@appTypes/GameResultType';

const StatisticsScreen = observer(() => {
  const results = gameStore.results;

  const renderStatisticsItem = useCallback(
    ({ item }: { item: GameResult }) => <StatisticsItem item={item} />,
    [],
  );

  return (
    <MainLayout>
      <UIText variant="heading" color={Colors.WHITE}>
        Статистика
      </UIText>
      <Spacer vertical={30} />

      <Column flex={1} align="center">
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id}
          data={results}
          ItemSeparatorComponent={() => <Spacer vertical={12} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <UIText variant="label" color={Colors.WHITE_50}>
              Нет данных
            </UIText>
          }
          renderItem={renderStatisticsItem}
        />
        <Spacer vertical={15} />
        <UIButton
          variant="secondary"
          text="Сбросить статистику"
          onPress={() => {
            gameStore.clearResults();
          }}
        />
      </Column>
      <Spacer vertical={30} />
    </MainLayout>
  );
});

export default StatisticsScreen;
