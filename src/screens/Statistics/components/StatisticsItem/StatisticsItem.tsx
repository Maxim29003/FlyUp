import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import Row from '@layouts/Row/Row';
import UIText from '@ui/UIText/UIText';
import { Colors } from '@styles/colors';
import { GameResult } from '@appTypes/GameResultType';

type StatisticsItemProps = {
  item: GameResult;
};

const StatisticsItem = ({ item }: StatisticsItemProps) => {
  return (
    <Row justify="space-between" align="center">
      <UIText variant="label" color={Colors.WHITE}>
        Очки {item.score}
      </UIText>
      <UIText variant="label" color={Colors.WHITE_50}>
        {new Date(item.date).toLocaleString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </UIText>
    </Row>
  );
};

export default memo(StatisticsItem);

